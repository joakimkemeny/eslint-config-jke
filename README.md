# eslint-config-jke
[![NPM version](https://img.shields.io/npm/v/eslint-config-jke.svg)](https://www.npmjs.com/package/eslint-config-jke) [![Build status](https://img.shields.io/travis/joakimkemeny/eslint-config-jke/master.svg)](https://travis-ci.org/joakimkemeny/eslint-config-jke)

This project provides my opinionated `.eslintrc` as an extensible shared config.

## Usage
This project provides five ESLint configurations. 

### eslint-config-jke/browser
A set of rules to use in a browser environment.

1. `npm install --save-dev eslint eslint-config-jke`
2. Add `"extends": "jke/browser"` to your `.eslintrc`

### eslint-config-jke/node
A set of rules to use in a Node environment.

1. `npm install --save-dev eslint eslint-config-jke`
2. Add `"extends": "jke/node"` to your `.eslintrc`

### eslint-config-jke/react
Extends the browser set of rules with rules for React and JSX.

1. `npm install --save-dev eslint eslint-config-jke eslint-plugin-react`
2. Add `"extends": "jke/react"` to your `.eslintrc`

### eslint-config-jke/mocha
An extension to the other set of rules that adds rules for Mocha tests.

1. `npm install --save-dev eslint eslint-config-jke eslint-plugin-mocha`
2. Add one of the following rows to you `.eslintrc`
	- `"extends": ["jke/browser", "jke/mocha"]`
	- `"extends": ["jke/node", "jke/mocha"]`
	- `"extends": ["jke/react", "jke/mocha"]`

### eslint-config-jke/import
An extension to the other set of rules that adds rules for import statements.

1. `npm install --save-dev eslint eslint-config-jke eslint-plugin-import`
2. Add one of the following rows to you `.eslintrc`
	- `"extends": ["jke/browser", "jke/import"]`
	- `"extends": ["jke/node", "jke/import"]`
	- `"extends": ["jke/react", "jke/import"]`

## Versioning
Currently the project is in its initial development (as indicated by the 0.x version). This means that rule definitions can change at any time and your build may break. After the 1.0.0 release the project should be considered stable and will follow [semantic versioning](http://semver.org).

But what does semantic versioning mean for ESLint configuration? I've decided on the following interpretation.

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

- [babel-cli](https://www.npmjs.com/package/babel-cli): Used to run Babel from the build
- [babel-plugin-istanbul](https://www.npmjs.com/package/babel-plugin-istanbul): Used to configure Istanbul to use Babel for coverage
- [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015): Used to configure Babel to understand ES2015
- [babel-register](https://www.npmjs.com/package/babel-register): Used by Mocha to use Babel to understand ES2015
- [chai](https://www.npmjs.com/package/chai): Used by Mocha to make assertions in the tests
- [cross-env](https://www.npmjs.com/package/cross-env): Used to set environment variables cross platform in the build
- [eslint](https://www.npmjs.com/package/eslint): Used to run this project
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Used to extend ESLint with rules for import statements
- [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha): Used to extend ESLint with rules for Mocha
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): Used to extend ESLint with rules for React
- [is-plain-obj](https://www.npmjs.com/package/is-plain-obj): Used in tests to check the configuration
- [mocha](https://www.npmjs.com/package/mocha): Used to test the configuration
- [nyc](https://www.npmjs.com/package/nyc): Used to check test coverage
- [rimraf](https://www.npmjs.com/package/rimraf): Used to remove directories cross platform in the build
- [temp-write](https://www.npmjs.com/package/temp-write): Used in tests to write temporary files

### Peer dependencies
[![peerDependency status](https://img.shields.io/david/peer/joakimkemeny/eslint-config-jke/master.svg)](https://david-dm.org/joakimkemeny/eslint-config-jke/master#info=peerDependencies)

- [eslint](https://www.npmjs.com/package/eslint): Used to run this project
