#!/usr/bin/env node

/**
 * This was all vibe coded... lol.
 *
 * I wanted to have strict formatting around changeset entries but couldn't be bothered creating the parser by hand.
 * I can totally come back to this if there are any issues.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

import { SECTION_MAP } from '../.changeset/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Extract semantic type from changeset summary
 */
const extractTypeFromSummary = summary => {
  const firstLine = summary.split('\n')[0].trim();

  // Match patterns like "feat:", "fix(scope):", etc.
  const match = firstLine.match(/^([a-z]+)(\([^)]*\))?:\s*/i);

  if (match) {
    return match[1].toLowerCase();
  }

  return null;
};

/**
 * Parse changeset file content
 */
const parseChangesetFile = filePath => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter and summary
  const parts = content.split('---');
  if (parts.length < 3) {
    throw new Error(`Invalid changeset format in ${filePath}`);
  }

  const summary = parts[2].trim();
  return { summary, filePath };
};

/**
 * Validate that changeset has proper semantic type
 */
const validateChangeset = changeset => {
  const { summary, filePath } = changeset;
  const type = extractTypeFromSummary(summary);

  if (!type) {
    return {
      valid: false,
      error: `No semantic type found in changeset summary. Must start with one of: ${Object.keys(SECTION_MAP).join(', ')}`,
      filePath,
      summary: summary.split('\n')[0],
    };
  }

  if (!SECTION_MAP[type]) {
    return {
      valid: false,
      error: `Unknown semantic type '${type}'. Must be one of: ${Object.keys(SECTION_MAP).join(', ')}`,
      filePath,
      summary: summary.split('\n')[0],
    };
  }

  return {
    valid: true,
    type,
    section: SECTION_MAP[type],
    filePath,
    summary: summary.split('\n')[0],
  };
};

/**
 * Main validation function
 */
const validateChangesets = async () => {
  const rootDir = path.resolve(__dirname, '..');
  const changesetDir = path.join(rootDir, '.changeset');

  console.log('🔍 Validating changesets...');

  // Find all changeset files
  const changesetFiles = await glob('*.md', {
    cwd: changesetDir,
    ignore: ['README.md'],
  });

  if (changesetFiles.length === 0) {
    process.exit(0);
  }

  console.log(`Found ${changesetFiles.length} changeset file(s)`);
  console.log('');

  const results = [];
  let hasErrors = false;

  for (const file of changesetFiles) {
    const filePath = path.join(changesetDir, file);
    try {
      const changeset = parseChangesetFile(filePath);
      const validation = validateChangeset(changeset);
      results.push(validation);

      if (validation.valid) {
        console.log(`✅ ${file}`);
        console.log(`   Type: ${validation.type} (${validation.section})`);
        console.log(`   Summary: ${validation.summary}`);
      } else {
        console.log(`❌ ${file}`);
        console.log(`   Error: ${validation.error}`);
        console.log(`   Summary: ${validation.summary}`);
        hasErrors = true;
      }
      console.log('');
    } catch (error) {
      console.log(`❌ ${file}`);
      console.log(`   Error: ${error.message}`);
      console.log('');
      hasErrors = true;
    }
  }

  // Summary
  const validChangesets = results.filter(r => r.valid);
  const invalidChangesets = results.filter(r => !r.valid);

  console.log('📊 Summary:');
  console.log(`   Valid: ${validChangesets.length}`);
  console.log(`   Invalid: ${invalidChangesets.length}`);
  console.log('');

  if (hasErrors) {
    console.log('❌ Changeset validation failed!');
    console.log('');
    console.log('Please ensure all changeset summaries follow semantic commit format:');
    console.log('');
    console.log('Valid semantic types:');
    for (const [key, section] of Object.entries(SECTION_MAP)) {
      console.log(`  ${key}: ${section}`);
    }
    console.log('');
    console.log('Examples:');
    console.log('  feat: add dark mode support');
    console.log('  fix: resolve button focus states in dark mode');
    console.log('  perf: optimize component re-renders with React.memo');
    console.log('  docs: update installation guide');
    console.log('');
    process.exit(1);
  }

  console.log('✅ All changesets are valid!');
};

// Run validation if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    await validateChangesets();
  } catch (error) {
    console.error('Error during validation:', error);
    process.exit(1);
  }
}

export { validateChangesets, validateChangeset, extractTypeFromSummary };
