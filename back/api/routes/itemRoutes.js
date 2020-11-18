'use strict';
module.exports = function(app) {
  const item = require('../controllers/itemController');
  app.route('/item')
    .get(item.listAll)
    .post(item.create);
  app.route('/item/:itemId')
    .get(item.read)
    .put(item.update)
    .delete(item.delete);

};
