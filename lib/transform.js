const moment = require('moment')

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
   *
   * Updates should be in the form of:
   * {
   *   range: 'A1',
   *   value: 123
   * }
   */

  const updates = []

  console.log(transactions)
  // console.log(updates)

  return updates
}
