'use strict';
module.exports = function(app) {
  const template = require('../controllers/templateController');
  app.route('/template')
    .get(template.listAll)
    .post(template.create);
  app.route('/template/:templateId')
    .get(template.read)
    .put(template.update)
    .delete(template.delete);
};
