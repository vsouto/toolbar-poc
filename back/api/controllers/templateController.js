'use strict';

const mongoose = require('mongoose'),
  Template = mongoose.model('TemplateModel');

exports.listAll = function(req, res) {
    Template.find({}, function(err, template) {
        if (err)
            res.send(err);
        res.json(template);
    });
};

exports.create = function(req, res) {
    var new_template = new Template(req.body);
    new_template.save(function(err, template) {
        if (err)
            res.send(err);
        res.json(template);
    });
};

exports.read = function(req, res) {
    Template.findById(req.params.templateId, function(err, template) {
        if (err)
            res.send(err);
        res.json(template);
    });
};

exports.update = function(req, res) {
    Template.findOneAndUpdate({_id: req.params.templateId}, req.body, {new: true}, function(err, template) {
        if (err)
            res.send(err);
        res.json(template);
    });
};

exports.delete = function(req, res) {
    Template.remove({
        _id: req.params.templateId
    }, function(err, template) {
        if (err)
            res.send(err);
        res.json({ message: 'Template successfully deleted' });
    });
};
