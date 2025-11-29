/**
 * This was all vibe coded... lol.
 *
 * I wanted to have strict formatting around changeset entries but couldn't be bothered creating the parser by hand.
 * I can totally come back to this if there are any issues.
 */

import { getInfo, getInfoFromPullRequest } from '@changesets/get-github-info';
import { SECTION_MAP } from './constants.js';

/**
 * Read environment variables for GitHub configuration
 */
const readEnv = () => {
  const GITHUB_SERVER_URL = process.env.GITHUB_SERVER_URL || 'https://github.com';
  return { GITHUB_SERVER_URL };
};

/**
 * Extract users from changeset summary
 * Looks for patterns like "author: @username" or "user: username"
 */
const extractUsersFromSummary = summary => {
  const users = [];
  const lines = summary.split('\n');

  for (const line of lines) {
    // Match patterns like "author: @username", "user: username", etc.
    const match = line.match(/^\s*(?:author|user):\s*@?([^\s]+)/i);
    if (match) {
      users.push(match[1]);
    }
  }

  return users;
};

/**
 * Extract semantic type from changeset summary
 * Looks for patterns like "feat: description" or "fix(scope): description"
 */
const extractTypeFromSummary = summary => {
  const firstLine = summary.split('\n')[0].trim();

  // Match patterns like "feat:", "fix(scope):"
  const match = firstLine.match(/^([a-z]+)?(\([^)]*\))?:\s*/i);

  if (match) {
    const type = match[1].toLowerCase();
    return type;
  }

  // Fallback: look for keywords at the start of the summary
  const lowercaseFirst = firstLine.toLowerCase();
  for (const [keyword] of Object.entries(SECTION_MAP)) {
    if (lowercaseFirst.startsWith(keyword + ' ') || lowercaseFirst.startsWith(keyword + ':')) {
      return keyword;
    }
  }

  return null;
};

/**
 * Clean the summary by removing the semantic type prefix and user attribution lines
 */
const cleanSummary = (summary, type) => {
  const lines = summary.split('\n');
  const firstLine = lines[0].trim();

  // Remove the semantic type prefix if it exists (including optional ! for legacy compatibility)
  const match = firstLine.match(/^([a-z]+)?(\([^)]*\))?:\s*/i);
  if (match) {
    lines[0] = firstLine.replace(match[0], '');
  } else if (type && firstLine.toLowerCase().startsWith(type + ' ')) {
    lines[0] = firstLine.slice(type.length + 1);
  } else if (type && firstLine.toLowerCase().startsWith(type + ':')) {
    lines[0] = firstLine.slice(type.length + 1).trim();
  }

  // Remove user attribution lines (author: or user: lines) and PR lines
  const cleanedLines = lines.filter(line => {
    return !line.match(/^\s*(?:author|user|pr|pull|pull\s+request):\s*/i);
  });

  return cleanedLines.join('\n');
};

const getReleaseLine = async (changeset, _type, options = {}) => {
  const semanticType = extractTypeFromSummary(changeset.summary);
  const manualUsers = extractUsersFromSummary(changeset.summary);

  // Extract PR number and commit hash from summary
  let prFromSummary;
  let commitFromSummary;

  changeset.summary.replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_match, pr) => {
    let num = Number(pr);
    if (!isNaN(num)) prFromSummary = num;
    return '';
  });

  changeset.summary.replace(/^\s*commit:\s*([^\s]+)/im, (_match, commit) => {
    commitFromSummary = commit;
    return '';
  });

  const cleanedSummary = cleanSummary(changeset.summary, semanticType);

  // Enhanced GitHub info fetching with proper link generation
  const { GITHUB_SERVER_URL } = readEnv();
  let githubUsers = [];
  let prLink = null;
  let commitLink = null;

  if (options.repo) {
    try {
      if (prFromSummary) {
        // Fetch PR info if PR number found
        const { links } = await getInfoFromPullRequest({
          repo: options.repo,
          pull: prFromSummary,
        });
        if (links.user) {
          githubUsers = [
            links.user
              .replace(/[@\[\]()]/g, '')
              .split('/')
              .pop(),
          ];
        }
        prLink = links.pull;

        // If we also have a commit from summary, create a commit link
        if (commitFromSummary) {
          const shortCommitId = commitFromSummary.slice(0, 7);
          commitLink = `[\`${shortCommitId}\`](${GITHUB_SERVER_URL}/${options.repo}/commit/${commitFromSummary})`;
        }
      } else if (changeset.commit || commitFromSummary) {
        // Fallback to commit info
        const commitToFetchFrom = commitFromSummary || changeset.commit;
        const { links } = await getInfo({
          repo: options.repo,
          commit: commitToFetchFrom,
        });
        if (links.user) {
          githubUsers = [
            links.user
              .replace(/[@\[\]()]/g, '')
              .split('/')
              .pop(),
          ];
        }

        // Create commit link
        if (commitToFetchFrom) {
          const shortCommitId = commitToFetchFrom.slice(0, 7);
          commitLink = `[\`${shortCommitId}\`](${GITHUB_SERVER_URL}/${options.repo}/commit/${commitToFetchFrom})`;
        }
      }
    } catch (error) {
      // Gracefully handle GitHub API errors (missing token, rate limits, etc.)
    }
  }

  // Combine users (manual takes priority, then GitHub)
  const allUsers = [...new Set([...manualUsers, ...githubUsers])];

  const [firstLine, ...futureLines] = cleanedSummary.split('\n').map(l => l.trimEnd());

  // Preserve the original semantic type info as a hidden comment for grouping
  const typeComment = semanticType ? `<!-- type:${semanticType} -->` : '';

  let returnVal = `- ${firstLine}${typeComment}`;

  // Build metadata section (PR, commit, user attribution) - following pasted code style
  const metadataParts = [];

  if (prLink) {
    metadataParts.push(prLink);
  }

  if (commitLink) {
    metadataParts.push(commitLink);
  }

  if (allUsers.length > 0) {
    const userLinks = allUsers.map(user => `[@${user}](https://github.com/${user})`).join(', ');
    metadataParts.push(`Thanks ${userLinks}!`);
  }

  // Add separator and metadata if we have any metadata
  if (metadataParts.length > 0) {
    returnVal += ` - ${metadataParts.join(' ')}`;
  }

  if (futureLines.length > 0) {
    returnVal += `\n\n${futureLines.map(l => `  ${l}`).join('\n')}`;
  }

  return returnVal;
};

const getDependencyReleaseLine = async (_changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return '';

  const updatedDependenciesList = dependenciesUpdated.map(
    dependency => `- update ${dependency.name} to ${dependency.newVersion}`
  );

  return updatedDependenciesList.join('\n');
};

/**
 * Group changes by their semantic type using SECTION_MAP
 * Separates breaking changes into their own section with subsections
 */
const groupChangesByType = async changelogLines => {
  const sections = {};
  const breakingChanges = {};

  // Process changes by type, major changes are breaking changes
  const changeTypes = [
    { changes: changelogLines.major || [], isBreaking: true },
    { changes: changelogLines.minor || [], isBreaking: false },
    { changes: changelogLines.patch || [], isBreaking: false },
  ];

  for (const { changes, isBreaking } of changeTypes) {
    for (const changePromise of changes) {
      const change = await changePromise;
      if (!change || change.trim() === '') continue;

      // Extract semantic type from the hidden comment
      const typeCommentMatch = change.match(/<!-- type:([^>]+) -->/);
      let semanticType = null;

      if (typeCommentMatch) {
        semanticType = typeCommentMatch[1];
      } else {
        // Fallback to extracting from text (shouldn't happen with our new system)
        const cleanChange = change.replace(/^\s*-\s*/, '');
        semanticType = extractTypeFromSummary(cleanChange) || 'chore';
      }

      // Default to chore if no type found
      if (!semanticType || !SECTION_MAP[semanticType]) {
        semanticType = 'chore';
      }

      const sectionName = SECTION_MAP[semanticType];

      if (isBreaking) {
        // Add to breaking changes with subsection
        if (!breakingChanges[sectionName]) {
          breakingChanges[sectionName] = [];
        }
        breakingChanges[sectionName].push(change);
      } else {
        // Add to regular sections
        if (!sections[sectionName]) {
          sections[sectionName] = [];
        }
        sections[sectionName].push(change);
      }
    }
  }

  // If we have breaking changes, add them as a special section
  if (Object.keys(breakingChanges).length > 0) {
    sections['BREAKING CHANGES'] = breakingChanges;
  }

  return sections;
};

/**
 * Get priority for section ordering
 * Lower numbers = higher priority (shown first)
 */
const getSectionPriority = sectionName => {
  const priorities = {
    'BREAKING CHANGES': 1,
    Added: 2,
    Fixed: 3,
  };

  return priorities[sectionName] || 999; // Everything else gets low priority
};

/**
 * Format date as YYYY-MM-DD
 */
const formatDate = (date = new Date()) => {
  return date.toISOString().split('T')[0];
};

/**
 * Custom changelog entry generator that groups changes by semantic type
 * and orders them by importance (breaking changes first, then features, fixes, etc.)
 * @param {import("@changesets/types").ModCompWithPackage} release
 * @param {Record<"major" | "minor" | "patch", Array<Promise<string>>>} changelogLines
 * @param {any} changelogOpts
 */
const getChangelogEntry = async (release, changelogLines, changelogOpts) => {
  // Group changes by their semantic types
  const sections = await groupChangesByType(changelogLines, changelogOpts);

  // Sort sections by priority
  const sortedSectionNames = Object.keys(sections).sort((a, b) => {
    const priorityA = getSectionPriority(a);
    const priorityB = getSectionPriority(b);

    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    // If same priority, sort alphabetically
    return a.localeCompare(b);
  });

  // Build the changelog entry
  const parts = [];

  // Add version header with date
  const date = formatDate();
  parts.push(`## ${release.newVersion} (${date})`);

  // Add each section
  for (const sectionName of sortedSectionNames) {
    const changes = sections[sectionName];
    if (!changes) continue;

    if (sectionName === 'BREAKING CHANGES') {
      // Special handling for breaking changes with subsections
      parts.push(`\n### ${sectionName}\n`);

      // Sort subsections by priority
      const subsectionNames = Object.keys(changes).sort((a, b) => {
        const priorityA = getSectionPriority(a);
        const priorityB = getSectionPriority(b);
        return priorityA - priorityB;
      });

      for (const subsectionName of subsectionNames) {
        const subsectionChanges = changes[subsectionName];
        if (subsectionChanges && subsectionChanges.length > 0) {
          parts.push(`\n#### ${subsectionName}\n`);
          // Remove HTML comments from the final output
          const cleanedChanges = subsectionChanges.map(change => change.replace(/<!-- type:[^>]+ -->/g, ''));
          parts.push(cleanedChanges.join('\n'));
        }
      }
    } else {
      // Regular section handling
      if (changes.length > 0) {
        parts.push(`\n### ${sectionName}\n`);
        // Remove HTML comments from the final output
        const cleanedChanges = changes.map(change => change.replace(/<!-- type:[^>]+ -->/g, ''));
        parts.push(cleanedChanges.join('\n'));
      }
    }
  }

  return parts.join('\n');
};

export { getReleaseLine, getDependencyReleaseLine, getChangelogEntry };
