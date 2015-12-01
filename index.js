#! /usr/bin/env node
var cp = require('child_process');
var npgCommands = Array.prototype.slice.call(process.argv, 2);
if (!npgCommands.length) {
  console.error('no commands specified');
  process.exit(0);
}

var cmd = 'node';
var args = ['node_modules/.bin/node-pre-gyp'].concat(npgCommands);

['runtime', 'arch', 'target', 'disturl'].forEach(function(config) {
  var val = process.env['npm_config_' + config];
  if (val) {
    args.push('--' + config + '=' + val);
  }
});

var proc = cp.spawn(cmd, args);
proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);
proc.on('exit', function(code) {
  process.exit(code);
});
