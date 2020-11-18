'use strict';

var path = require('path');
var rootPath = path.dirname(require.main.filename);

const mongoose = require('mongoose'),
  ItemModel = mongoose.model('ItemModel');

exports.listAll = function(req, res) {
    ItemModel.find({}, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.create = function(req, res) {
    var new_item = new ItemModel(req.body);
    new_item.save(function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.read = function(req, res) {
    ItemModel.findById(req.params.itemId, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.update = function(req, res) {
    ItemModel.findOneAndUpdate({_id: req.params.itemId}, req.body, {new: true}, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.delete = function(req, res) {
    ItemModel.remove({
        _id: req.params.itemId
    }, function(err, item) {
        if (err)
            res.send(err);
        res.json({ message: 'Item successfully deleted' });
    });
};
