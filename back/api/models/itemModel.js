'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemModelSchema = new Schema({
    title: {
        type: String,
        required: 'please enter the item title'
    },
    children: [],
    createdDate: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('ItemModel', ItemModelSchema);
