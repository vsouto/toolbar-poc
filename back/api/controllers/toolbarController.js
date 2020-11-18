'use strict';

const mongoose = require('mongoose');

exports.getSchematics = function(req, res) {

    // TODO:
    // get all items and the elements
    // format the queries into schematics for the views

/*
    Item.find({}, function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });*/



    var options = {
        'filters': true
    };

    var jsonStructure = {
        'menuItems': [
            {
                'title': 'Charts',
                'id': 'menu-charts',
                'icon': 'mdi-sun',
                'children': [
                    {
                        'id': 'children-chart-vertical',
                        'title': 'Chart Vertical',
                        'status': 'active',
                        'image': 'assets/charts/chart-vertical.png',
                        'events': [
                            {
                                'name': 'onClick',
                                'action': 'ApapController::chartVertical()'
                            }
                        ]
                    }
                ]
            }
        ]
    }

    //var toolbarHandler = new ToolbarFactory( JSON.stringify(jsonStructure), options );*/

    res.json( JSON.stringify(jsonStructure) );

};
