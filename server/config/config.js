var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    db: 'mongodb://localhost/recipe_finder',
    root: rootPath
  },
  qa: {},
  production: {}
}