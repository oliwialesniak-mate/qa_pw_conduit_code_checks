# Set Up Automatic Code Checks for a Conduit Project

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:
   - `npm ci`
   - `npx playwright install`

## Task

1. Set up ESLint using instructions given in the theory:
   - Run the `npx eslint` command and make sure you see the list of errors.
   - Fix all bugs in the code.

2. Set up Prettier using the instructions given in the theory section.
3. Set up Husky and Lint-Staged using instructions given in the theory section.
4. Re-run all your tests and make sure they pass after the updates.
5. Commit all your updates:
   - To see all ESlint errors in the terminal, run `git commit -m "<commit message>"` from the terminal.
   - Fix all remaining errors, if any. You will not be able to do a commit until all errors are resolved.

## Task Reporting

1. Push the code to the origin.
2. Create a PR for your changes.
3. Keep implementing suggestions from code review until the PR is approved.
