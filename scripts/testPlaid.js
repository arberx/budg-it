require('dotenv').config()

const path = require('path')
const { writeFile } = require('fs-extra')
const { fetchCategories } = require('../lib/fetch')

;(async () => {
  const res = await fetchCategories()
  console.log(res)
})()
