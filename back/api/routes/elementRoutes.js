'use strict';
module.exports = function(app) {
  const element = require('../controllers/elementController');
  app.route('/element')
    .get(element.listAll)
    .post(element.create);
  app.route('/element/:elementId')
    .get(element.read)
    .put(element.update)
    .delete(element.delete);
  app.route('/element/props')
    .get(element.getProps)
};
