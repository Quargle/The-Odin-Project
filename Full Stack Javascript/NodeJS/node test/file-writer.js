const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/Programming/node/node test/test.txt', content, {flag: 'w+'}, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

const logContent = 'This is a log\n'

fs.appendFile('file.log', logContent, err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })

fs.readFile('/Programming/node/node test/test.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
