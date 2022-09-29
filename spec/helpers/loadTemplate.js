const fs = require('fs')

function removeCommentsFromJs(jsString) {
  return jsString.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, ' ')
}

function loadTemplate (fileName) {
  
  let templateString
  let jsonString
  let jsonObj
  
  try {
    templateString = fs.readFileSync(fileName, 'utf-8')
  } catch (err) {
    console.log(err)
    throw `Could not read template file: ${fileName}`
  }
  
  try {
    jsonString = removeCommentsFromJs(templateString)
  } catch (err) {
    console.log(err)
    throw `Could not strip comments from template: ${fileName}`
  }
  
  try {
    jsonObj = JSON.parse(jsonString)
  } catch (err) {
    console.log(err)
    throw `Invalid JSON in template: ${fileName}`
  }
  
  return jsonObj
  
}

module.exports = loadTemplate