const { doesNotMatch } = require('assert')
const split2 = require('split2')
const through2 = require('through2')

const isEven = (number) => number % 2 === 0

let lineCount = 0

const stream = through2(
  function (chunk, encoding, next) {
    let line = chunk.toString()
    line = (isEven(lineCount))
      ? line.toLowerCase()
      : line.toUpperCase()
    this.push(line + '\n')
    lineCount++;
    next()
  }
)

process.stdin
  .pipe(split2())
  .pipe(stream)
  .pipe(process.stdout)