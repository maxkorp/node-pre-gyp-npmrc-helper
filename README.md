node-pre-gyp-npmrc-helper
=============

node-pre-gyp-npmrc-helper is a command line tool for calling out to node-pre-gyp
in npm scripts, but to allow it to pull arguments like runtime from npmrc.
This is useful so that native modules can automatically get downloads/compile for
electron or node-webkit

##Installation
Install it as a dependency, and include it in your bundledDependencies, just like
with node-pre-gyp. *node-pre-gyp is still required, and must be configured as per usual*
```json
"dependencies": {
  "node-pre-gyp": "x.y.z",
  "node-pre-gyp-npmrc-helper": "a.b.c"
},
"bundledDependencies": [
  "node-pre-gyp",
  "node-pre-gyp-npmrc-helper"
]
```

##Usage:
Use it just like you would use node-pre-gyp in your npm scripts.
```json
scripts: {
  "install": "npg-npmrc-helper install --fallback-to-build"
}
```
instead of
```json
scripts: {
  "install": "node-pre-gyp install --fallback-to-build"
}
```
