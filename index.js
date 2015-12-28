var data = require('./dist/devices-latest')
var data2 = require('./dist/devices-autodesk')
var mapping = require('./mapping')

module.exports.find = function(properties) {
  var id = mapping(properties)
    , match

  if (id && ((match = data[id]) || (match = data2[id]))) {
    match.image = match.image || id + '.jpg'
    return match
  }

  return null
}
