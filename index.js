var input = process.argv.slice(2)
var controller = require('./controller')

if (input[0] === 'read') {
  controller.readFile(input[1])
}