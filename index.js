const { Writable } = require('stream')

const myStream = new Writable({
  write(chunk) {}
})
process.stdin.on('data', (chunk) => {
  console.log('writing: ' + chunk)
})

process.stdin.pipe(myStream)

