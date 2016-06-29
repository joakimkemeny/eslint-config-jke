# eslint-config-jke
This package provides my opinionated `.eslintrc` as an extensible shared config.

## Usage
This package provides two ESLint configurations. 

### eslint-config-jke
The default set of rules.

1. `npm install --save-dev eslint eslint-config-jke`
2. Add `"extends": "jke"` to your `.eslintrc`

### eslint-config-jke/react
Extends the default set of rules with React and JSX rules.

1. `npm install --save-dev eslint eslint-config-jke eslint-plugin-react`
2. Add `"extends": "jke/react"` to your `.eslintrc`

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
Copyright 2016 Joakim Kemeny

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
