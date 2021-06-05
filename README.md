# Threejs-template including Shaders

### Template to be used with parcel-bundler

If you have parcel-bundler installed globally then,

#### For bundling:

`npm init` or `yarn init` orand add dev script in package.json

"scripts": {
"dev": "parcel ./index.html",
},

and then -> `npm run dev` or `yarn dev`

#### For PRODUCTION build:

-> `npm i parcel-bundler --dev` or `yarn add parcel-bundler --dev`

And then add build script in package.json

"scripts": {
"dev": "parcel ./index.html",
"build": "parcel build ./index.html"
},

and THEN run -> `npm run build` or `yarn build`

(NOTE: Had issues with parcel build from global so its recommended to build from local dev-dependencies)

Note: Not necessary to have .glsl files instead the shaders can be written inside backtick `` , and doing so will not add glslify in dependencies but you also lose linting.
