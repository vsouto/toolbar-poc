'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TemplateModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the template title'
    },
    elements: [],
    grid: [],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TemplateModel', TemplateModelSchema);
