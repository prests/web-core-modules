# Lunar Contributing Guide

Greetings wayward explorer!

We are excited that you're interested in contributing to the Lunar Project. Before submitting a contribution, please
read through the following contribution guide. Please also read the Project Philosophy in our documentation.

## Repo Setup

To develop locally, fork the Lunar repository and clone it in your local machine. The Lunar repo is a monorepo using
PNPM workspaces. The package manager used to install and link dependencies must be PNPM. You can find the required PNPM
version in `package.json` under the `packageManger` field. The Node.JS version for the project is controlled via NVM.
You are free to download Node.JS versions manually, however, NVM makes switching between Node.JS versions extremely
easy.

## Quick Start

1. Ensure you are using hte project specified node version:

   ```bash
   nvm use # You may need to run `nvm install` before you can use the node version
   ```

2. Install dependencies:

   ```bash
   pnpm install # This should be ran at the root of the project
   ```

### Running Lunar

There are a few ways to run Lunar depending on what you're working on:

```bash
    pnpm -F @lunar-js/lunar dev # Runs the core package on its own

    pnpm dev:lunar-storybook # Runs the core package and associated storybook application

    pnpm dev:lunar-react-router # Runs the core package and React Router app
```

## Think Before Adding a flag to a Component

We aim to make components as composable as possible and would rather opt for a composable prop like a render function
instead of a flag. Choices like this give the consumer more extensibility. Before adding a flag, consider whether the
problem:

- is really worth addressing
- can be fixed with a render function

## Running Tests

To ensure tests are passing before opening a pull request, run the following command:

```bash
pnpm test
```

## Pull Request Guidelines

The following instructions lay out the necessary requirements when creating a pull request outside of your change
itself.

### Creating a Changeset

All package changes require a Changeset. A Changeset defines, in a human readable format, what exactly your change is
including. To create a changeset run the following command:

```bash
pnpm changelog:add
```

#### Picking a change level

There are 3 change levels:

- major
  - Use this option when there is a breaking change the requires a new major version
- minor
  - Feature additions
- patch
  - Fixes, dependency updates, security fixes, and refactors that don't introduce new functionality

#### Creating a summary

Changeset summaries must be defined in the following format to ensure proper `CHANGELOG.md` format when publishing:

```
<type>: <summary>
```

The following supported types are:

- feat -> features
- fix -> fixes
- chore -> refactors, documentation updates, changes that don't introduce new functionality nor fix a bug
- deprecate -> used when marking functionality as deprecated
- security -> reserved for security vulnerability fixes
- remove -> used when removing exposed functionality
