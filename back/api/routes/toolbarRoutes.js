'use strict';
module.exports = function(app) {
  const toolbar = require('../controllers/toolbarController');
  app.route('/schematics')
    .get(toolbar.getSchematics);
};
