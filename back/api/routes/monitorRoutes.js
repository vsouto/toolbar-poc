'use strict';
module.exports = function(app) {
  const monitor = require('../controllers/monitorController');
  app.route('/monitor')
    .get(monitor.listAll)
    .post(monitor.create);
  app.route('/monitor/render/:monitorId')
      .get(monitor.render)
  app.route('/monitor/:monitorId')
    .get(monitor.read)
    .put(monitor.update)
    .delete(monitor.delete);
  app.route('/monitor/addElement')
    .post(monitor.addElement);

};
