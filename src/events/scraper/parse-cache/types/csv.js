const csvParse = require('csv-parse/lib/sync')

/**
 * Parse CSV
 * @param {*} data the CSV payload to parse
 * @param {*} options customizable options:
 *  - delimiter: the delimiter to use (default is ,)
 */
module.exports = function csv (params) {
  const { data, options={} } = params
  return csvParse(data, {
    delimiter: options.delimiter,
    columns: true
  })
}
