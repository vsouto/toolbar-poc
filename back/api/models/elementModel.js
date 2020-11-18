'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ElementModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the element title'
    },
    type: {
        type: String,
        required: 'please enter the element type'
    },
    category: {
        type: String, // 'token', 'media', 'top-bars', 'others'
        required: 'element category required'
    },
    rows: {
        type: Number,
        min: 1,
        max: 8,
        required: 'please enter the element rows'
    },
    cols: {
        type: Number,
        min: 1,
        max: 8,
        required: 'please enter the element cols'
    },
    props: [],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ElementModel', ElementModelSchema);
