const concat = require('concat-stream')

process.stdin.pipe(concat(function (body) {
  process.stdout.write(body.toString().split('').reverse().join(''))
}))