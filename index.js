#! /usr/bin/env node
var cp = require('child_process');

module.exports = function detectNodeWebkit(npgCommands, cb) {
  var cmd = 'node';
  var args = ['node_modules/.bin/node-pre-gyp'].concat(npgCommands);

  [runtime, arch, target, disturl].forEach(function(config) {
    var val = process.env['npm_config_' + config];
    if (val) {
      args.push('--' + config + '=' + val);
    }
  });

  var proc = cp.spawn(cmd, args);
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.on('exit', function(code) {
    if (cb) {
      cb(code);
    }
  });
}
