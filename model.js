const fs = require('fs')

function readFile (fileName) {
  fs.readFile('./assets/' + fileName, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      console.log('success get data')
      console.log(data.toString())
    }
  })
}

module.exports = {
  readFile,
}