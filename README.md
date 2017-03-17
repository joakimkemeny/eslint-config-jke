# eslint-config-jke
[![NPM version](https://img.shields.io/npm/v/eslint-config-jke.svg)](https://www.npmjs.com/package/eslint-config-jke) [![Build status](https://img.shields.io/travis/joakimkemeny/eslint-config-jke/master.svg)](https://travis-ci.org/joakimkemeny/eslint-config-jke)

This project provides my opinionated ESLint configuration as an extensible shared config.

## Usage
This project provides five ESLint configurations. 

### eslint-config-jke/browser
A set of rules to use in a browser environment.

1. `yarn add --dev eslint eslint-config-jke`
2. Add `"eslintConfig": { "extends": "jke/browser" }` to your `package.json`

### eslint-config-jke/node
A set of rules to use in a Node environment.

1. `yarn add --dev eslint eslint-config-jke`
2. Add `"eslintConfig": { "extends": "jke/node" }` to your `package.json`

### eslint-config-jke/react
Extends the browser set of rules with rules for React and JSX.

1. `yarn add --dev eslint eslint-config-jke eslint-plugin-react eslint-plugin-jsx-a11y`
2. Add `"eslintConfig": { "extends": "jke/react" }` to your `package.json`

### eslint-config-jke/jest
An extension to the other set of rules that adds rules for Jest tests.

1. `yarn add --dev eslint eslint-config-jke eslint-plugin-jest`
2. Add one of the following rows to you `package.json`
	- `"eslintConfig": { "extends": ["jke/browser", "jke/jest"] }`
	- `"eslintConfig": { "extends": ["jke/node", "jke/jest"] }`
	- `"eslintConfig": { "extends": ["jke/react", "jke/jest"] }`

### eslint-config-jke/import
An extension to the other set of rules that adds rules for import statements.

1. `yarn add --dev eslint eslint-config-jke eslint-plugin-import`
2. Add one of the following rows to you `package.json`
	- `"eslintConfig": { "extends": ["jke/browser", "jke/import"] }`
	- `"eslintConfig": { "extends": ["jke/node", "jke/import"] }`
	- `"eslintConfig": { "extends": ["jke/react", "jke/import"] }`

## Versioning
This project tries to follow [semantic versioning](http://semver.org). Since it's not clear what that means for a ESLint configuration I've decided on the following interpretation.

### Patch version
Patch versions will never effect your build. Changes may modify the project configuration, build system, documentation and other stuff that doesn't break your build. It may also deactivate rules. So if I decide that a rule is to strict, I may deactivate it in a patch release. The rule definition will still be present though since removing it may cause defaults to be activated which may break your build.

### Minor version
Minor versions should not break your build either. Minor versions are going to be used for adding new rules as ESLint adds more rules. The way I will handle this is by adding them as warnings. If you don't want your build to break, you should only break on errors, not linting warnings.

### Major version
Major versions will probably break your build. All rules that were previously added as warnings in minor versions will be turned into errors and rule definitions can change. All changes will be documented, and motivated, in a changelog to make updates easier.

## License
Copyright 2016-2017 Joakim Kemeny

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Dependencies
This project relies on the work of great people who have created the following dependencies. 

### Development dependencies
[![devDependency status](https://img.shields.io/david/dev/joakimkemeny/eslint-config-jke/master.svg)](https://david-dm.org/joakimkemeny/eslint-config-jke/master#info=devDependencies)

- [eslint](https://www.npmjs.com/package/eslint): Used to run this project
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Used to extend ESLint with rules for import statements
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest): Used to extend ESLint with rules for Jest
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): Used to extend ESLint with rules for React
- [is-plain-obj](https://www.npmjs.com/package/is-plain-obj): Used in tests to check the configuration
- [jest](https://www.npmjs.com/package/jest): Used to test the configuration
- [rimraf](https://www.npmjs.com/package/rimraf): Used to remove directories cross platform in the build
- [temp-write](https://www.npmjs.com/package/temp-write): Used in tests to write temporary files

### Peer dependencies
[![peerDependency status](https://img.shields.io/david/peer/joakimkemeny/eslint-config-jke/master.svg)](https://david-dm.org/joakimkemeny/eslint-config-jke/master#info=peerDependencies)

- [eslint](https://www.npmjs.com/package/eslint): Used to run this project
