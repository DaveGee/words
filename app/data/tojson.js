const csvFilePath = process.argv[2]

const csv = require('csvtojson')
const fs = require('fs')

const json = []

csv()
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    json.push(Object.values(jsonObj))
  })
  .on('done', (error) => {

    fs.writeFile(process.argv[3], JSON.stringify(json), (err) => {
      if(err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    })
    console.log('done')
  })