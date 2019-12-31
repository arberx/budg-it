const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const envPath = path.resolve(__dirname, '../.env')
const linePath = path.resolve(_direname, '../.linenum')

module.exports = function(vars) {
  let current
  try {
    current = dotenv.parse(fs.readFileSync(envPath))
  } catch (e) {
    current = {}
  }
  Object.assign(current, vars)
  const serlized = Object.keys(current)
    .map(key => `${key}=${current[key]}`)
    .join(`\n`)
  fs.writeFileSync(envPath, serlized)
}

module.exports.writeToEnv = function(var) {
  fs.writeFileSync(linePath, var);
}