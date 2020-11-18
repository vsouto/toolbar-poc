'use strict';

var path = require('path');
var rootPath = path.dirname(require.main.filename);

const mongoose = require('mongoose'),
  MonitorModel = mongoose.model('MonitorModel'),
    Monitor = require('../../framework/monitor'),
    Element = require('../../framework/element'),
    ElementModel = mongoose.model('ElementModel');

exports.listAll = function(req, res) {
    MonitorModel.find({}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.create = function(req, res) {
    var new_monitor = new MonitorModel(req.body);
    new_monitor.save(function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.read = function(req, res) {
    MonitorModel.findById(req.params.monitorId, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.update = function(req, res) {
    MonitorModel.findOneAndUpdate({_id: req.params.monitorId}, req.body, {new: true}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.delete = function(req, res) {
    MonitorModel.remove({
        _id: req.params.monitorId
    }, function(err, monitor) {
        if (err)
            res.send(err);
        res.json({ message: 'Monitor successfully deleted' });
    });
};

exports.addElement = function(req, res) {

    if (!req || ! req.body.monitorId || !mongoose.Types.ObjectId.isValid(req.body.monitorId) || !mongoose.Types.ObjectId.isValid(req.body.elementId))
        res.send('monitorId and elementId required as ObjectId');

    // Get the monitor
    MonitorModel.findById(req.body.monitorId, function(err, monitor) {
        if (err)
            res.send(err);
    })
    .then(monitorObj => {

        // Get the element
        ElementModel.findById(req.body.elementId, function(err, element) {
            if (err)
                res.send(err);
        })
        .then(elementObj => {

            var monitor = new Monitor(monitorObj);
            var element = new Element(elementObj);

            if (!monitor.addElement(element, [1,1]))
                res.json('Element doesnt fit!');

            // Save the new monitor Grid
            MonitorModel.findOneAndUpdate({_id: monitor.id}, monitor, {'useFindAndModify':false}, function(err, monitor) {
                if (err)
                    res.send(err);
                res.json(monitor);
            });
        })

    });

};

exports.removeElement = function(req, res) {
    MonitorModel.findOneAndUpdate({_id: req.params.monitorId}, req.body, {new: true}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.moveElement = function(req, res) {
    MonitorModel.findOneAndUpdate({_id: req.params.monitorId}, req.body, {new: true}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.render = function(req, res) {

    if (!req || ! req.params.monitorId || !mongoose.Types.ObjectId.isValid(req.params.monitorId))
        res.send('monitorId and elementId required as ObjectId');

    // Get the monitor
    MonitorModel.findById(req.params.monitorId, function(err, monitor) {
        if (err)
            res.send(err);

        //console.log(req.app.get('views'));

        //res.sendFile(path.join(rootPath + '/framework/views/monitor.js'));
        res.render('monitor', { name: 'Tobi' }, function (err, html) {
            // ...
        })
    });
};