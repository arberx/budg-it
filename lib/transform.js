const moment = require('moment')
const saveLine = require('../scripts/saveEnv')
// Sheet to update. Will append this before cell range.
const Form = "Form Responses!"

// line to write
let LINE_NUM = 1

// Categories requried for Google Sheets
const Categories = [
  "Groceries",
  "Physical Activity",
  "Transportation",
  "Material Items",
  "Entertainment",
  "Restaurants",
  "Gifts",
  "Personal/Medical",
  "Cleaning/Supplies",
  "Travel",
  "Miscellaneous",
]

// Key -> Google Sheets Column Map
const KeyColumn = {
  "date": "A", 
  "name": "B",
  "category": "C",
  "amount": "D"
}

exports.transformTransactionsToUpdates = function(transactions) {
  /**
   * Implement your custom logic of transforming transactions into
   * Google Sheet cell updates.
   *
   * Transactions come in the format of:
   * {
   *   account: 'paypal',
   *   name: 'Payment from XXX',
   *   date: 2019-xx-xx,
   *   category: ['Food'],
   *   amount: 123
   * }
   */

  // list of dictionaries
  // const updates = [
    // {
      // "range" : Form + 'A3',
      // "value" : "8/3/2018"
    // }
  // 
  // 
  // ]
  // 

  let updates = [];
  for(let i=0; i < transactions.length(); ++i) {
    // for each transaction, write multiple lines
    const item = transactions[i];
    for(let j=0; j < 4; ++j) {
      
    }
    ++LINE_NUM;
  }

  // console.log(transactions)
  console.log(updates)

  // save line number
  // saveLine.writeToEnv(LINE_NUM)
  // return updates
}


function findCategory(categories) {

  /* Will match transaction category with google sheet's category.
     Return proper category.
  */
  


}