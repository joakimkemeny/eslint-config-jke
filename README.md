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

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except
in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0]()

Unless required by applicable law or agreed to in writing, software distributed under the License
is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions and limitations under
the License.
