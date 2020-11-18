'use strict';

const mongoose = require('mongoose'),
  Element = mongoose.model('ElementModel');

exports.listAll = function(req, res) {
    Element.find({}, function(err, element) {
        if (err)
            res.send(err);
        res.json(element);
    });
};

exports.create = function(req, res) {
    var new_element = new Element(req.body);
    new_element.save(function(err, element) {
        if (err)
            res.send(err);
        res.json(element);
    });
};

exports.read = function(req, res) {
    Element.findById(req.params.elementId, function(err, element) {
        if (err)
            res.send(err);
        res.json(element);
    });
};

exports.update = function(req, res) {

    if (!req || ! req.body.elementId || !mongoose.Types.ObjectId.isValid(req.body.elementId))
        res.send('elementId required as ObjectId');

    Element.findOneAndUpdate({_id: req.body.elementId}, req.body, {new: true}, function(err, element) {
        if (err)
            res.send(err);
        res.json(element);
    });
};

exports.delete = function(req, res) {
    Element.remove({
        _id: req.params.elementId
    }, function(err, element) {
        if (err)
            res.send(err);
        res.json({ message: 'Element successfully deleted' });
    });
};

exports.getProps = function(req, res) {
    Element.findById(req.params.elementId, function(err, element) {
        if (err)
            res.send(err);
        res.json(element.props);
    });
};
