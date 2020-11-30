const { Readable } = require('stream')

const myStream = new Readable({})
myStream._read = () => {}
myStream.push(process.argv[2])
myStream.pipe(process.stdout)

