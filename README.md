# Threejs-template including Shaders

### Template is to be used with parcel-bundler

If you have parcel-bundler installed globally then,

#### For bundling:

`yarn init` or `npm init` and add dev script in package.json

"scripts": {
"dev": "parcel ./index.html",
},

and then -> `run yarn dev`

#### For PRODUCTION build:

-> `yarn add parcel-bundler --dev` or `npm i parcel-bundler --dev`

And then add build script in package.json

"scripts": {
"dev": "parcel ./index.html",
"build": "parcel build ./index.html"
},

and THEN run -> `yarn build`

(NOTE: Had issues with parcel build from global so its recommended to build from local dev-dependencies)

Note: Not necessary to have .glsl files instead the shaders can be written inside backtick `` , and doing so will not add glslify in dependencies but you also lose linting.
