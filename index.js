const { Writable } = require('stream')

const myStream = new Writable({
  write(chunk, encoding, callback) {}
})
process.stdin.on('data', (chunk) => {
  console.log('writing: ' + chunk)
})

process.stdin.pipe(myStream)

