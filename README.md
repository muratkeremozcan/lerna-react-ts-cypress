# Lerna monorepo, React TS, Cypress example

Lerna & Yarn workspaces monorepo with React TS apps, Cypress tests at app level, CI running with Github Actions workflows depending on the changed files.

```bash
yarn install / yarn i / yarn --registry # at root level; all sub-level dependencies are taken care of
yarn start:a / start:b / start:c # start app-*
# on a different tab
yarn cy:open-a / cy:open-b / cy:open-c #  open cypress test runner at app level
# on a different tab
yarn cy:run-a / cy:run-b / cy:run-c # run cypress headlessly at app level

# if you are not using GitHub actions, or if you want to test locally, server-test can be utilized
# make sure the app is not running
yarn test:ci-a / test:ci-b / test:ci-c # start app-*, run tests headlessly against it
```

## Key ideas

* Lerna & Yarn workspaces config makes it so that we can install at root, and not worry about sub-level app dependencies.

* While at the root, utilize `lerna --stream --scope` to execute scripts within `packages/app-*` context. 
   
* Cypress is installed at the root, but the spec files live with the packages. To run/open tests per app:
   1. trigger `cypress run/open` from root-level, in order to hit app-level `package.json` script
   2. from app-level `package.json` script, invoke the node_modules back at the root (ex: `"../../node_modules/.bin/cypress open"`)

* For CI
  1. only execute when app-* changes, or its workflow file changes, or package.json changes
  2. start the app utilizing root level script (lerna & yarn workspaces ftw)
  3. Wait for app to be served (`wait-on: 'http://localhost:3000'`) 
  4. Specify the project to run using [Cypress --project parameter](https://github.com/cypress-io/github-action/blob/master/README.md#project) (ex: `project: ./packages/app-a`) . This is the key difference to local test execution.
   
## Test Reports

[Cypress Dashboard](https://dashboard.cypress.io/projects/6v2c2y/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D)

[Github Actions](https://github.com/muratkeremozcan/lerna-react-ts-cypress/actions)

### How this was setup

<details>

### Lerna & Yarn workspaces

*Lerna*: provides tooling to manage multi-repository structure inside a single repository by separating out subsets of the repository into their own “sub” repositories; monorepo.

*Yarn workspaces*:  manages our dependencies. Rather than having multiple node_modules directories, it intelligently optimizes the installing of dependencies together and allows for the cross-linking of dependencies in a monorepo.



```bash
yarn config set workspaces-experimental true # enable yarn workspaces, has to be a private repo
yarn init # generate package.json
yarn add lerna --dev # add lerna
lerna init # creates packages/ folder and lerna.json file
```

Edit `lerna.json` to enable yarn workspaces:
```json
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.1",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

Add workspaces property to `package.json` root level:
```json
  "workspaces": [
     "packages/*"
  ]  
``` 

### Create react apps
```bash
npx create-react-app packages/app-a --template typescript
npx create-react-app packages/app-b --template typescript
npx create-react-app packages/app-c --template typescript
```

> The assumption is that we do not have cross dependencies between our packages.

> Since we are using Yarn workspaces, we do not need `lerna bootstrap --hoist` at this point, which is used to move common dependencies to root node_modules (if using npm).

### Add Cypress as a common dependency

Install it at the root, that is it.

</details>


### Resources

[Lerna commands](https://github.com/lerna/lerna/blob/main/commands/run/README.md)

Monorepo examples: [Jannik Buschke's blog](https://www.jannikbuschke.de/blog/monorepo-with-lerna-react-and-typescript/), [JSilvax's blog](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d), [Jonathan Creamer's blog](https://www.jonathancreamer.com/running-cypress-tests-in-a-monorepo/).

[Gleb's monorepo CI blog](https://glebbahmutov.com/blog/test-monorepo-apps/)

[Cypress example recipes repo](https://github.com/cypress-io/cypress/tree/develop/packages)
