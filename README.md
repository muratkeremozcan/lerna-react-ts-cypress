# Lerna monorepo, React TS, Cypress example

## How this was setup

### Lerna & Yarn workspaces

*Lerna*: provides tooling to manage multi-repository structure inside a single repository by separating out subsets of the repository into their own “sub” repositories; monorepo.

*Yarn workspaces*:  manages our dependencies. Rather than having multiple node_modules directories, it intelligently optimizes the installing of dependencies together and allows for the cross-linking of dependencies in a monorepo.



```bash
yarn config set workspaces-experimental true # enable yarn workspaces
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

> Ideally we do not have cross dependencies between our packages.

> Since we are using Yarn workspaces, we do not need `lerna bootstrap --hoist` at this point, which is used to move common dependencies to root node_modules (if using npm).

> Replace "test" scripts in the `packages/<app>/package.json` files [as such](https://github.com/facebook/create-react-app/issues/1137#issuecomment-279180815).

> slightly modify `App.tsx` files to make the unique.

> Configure tsconfig.json [as such(https://github.com/dalinarkholin/example-typescript-monorepo/blob/master/tsconfig.json)] at the root. Include the tsconfig.json file in the `packages/<app>/tsconfig.json` files.

### Add Cypress as a common dependency

TODO: Add more info once it's figured out.

### Resources

[Lerna commands](https://github.com/lerna/lerna/blob/main/commands/run/README.md)

Monorepo examples: [Jannik Buschke's blog](https://www.jannikbuschke.de/blog/monorepo-with-lerna-react-and-typescript/), [JSilvax's blog](https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d), [Jonathan Creamer's blog](https://www.jonathancreamer.com/running-cypress-tests-in-a-monorepo/).

[Gleb's monorepo CI blog](https://glebbahmutov.com/blog/test-monorepo-apps/)

[Cypress example recipes repo](https://github.com/cypress-io/cypress/tree/develop/packages)