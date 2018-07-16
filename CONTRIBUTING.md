# Contributing

1.  Open an issue

2.  Fork the project and clone your fork.

3.  Create a local feature branch:

        $ git checkout -b <branch>

4.  If adding a public function/class/etc, define it in `src/foo.ts`, export it from
    `src/index.ts`, include unit tests in `spec/foo.spec.ts` and typings in `index.d.ts`. If adding an internal
    function `_foo`, define it in `src/internal/_foo.js` and include unit tests in `spec/internal/foo.spec.ts`. Document the function/class/etc in both implementation and typings.

5.  Make one or more atomic commits. Each commit should have a descriptive
    commit message, wrapped at 72 characters. Please adhere to [Angular's commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) (only exception they allow up to 100 characters, please adhere to 72)

6.  Run `npm run test`  and address any errors.  Preferably, fix commits in place using `git
    rebase` or `git commit --amend` to make the changes easier to review and to
    keep the history tidy.

7.  Run tslint: `npm run lint`, if no errors, also respect this guidelines:
    * Sort alphabetically groups and metagroups except where it makes sense to not do so. Example you can have a group of functions or variables etc F, G, H then another group further down the file with names A, B, C. The whole file itself isn't alphabetized but they groups are.
    
    * Import groups are as follows: 1st imports from node_modules, 2nd imports from other folders, 3rd. imports from the same folder

7.  Push to your fork:

        $ git push origin <branch>

8.  Open a pull request.

