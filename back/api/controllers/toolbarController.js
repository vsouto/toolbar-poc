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
        'toolbarId' : '123',
        'menuItems': [
            {
                'title': 'Charts',
                'id': 'menu-charts',
                'icon': 'mdi-apps',
                'status': 'active',
                'children': [
                    {
                        'id': 'children-chart-vertical',
                        'title': 'Chart Vertical',
                        'icon': 'mdi-chart-bar',
                        'status': 'active',
                        'image': 'assets/charts/chart-vertical.png',
                        'events': [
                            {
                                'name': 'onClick',
                                'action': 'ApapController::chartVertical()'
                            }
                        ]
                    },
                    {
                        'id': 'children-chart-horizontal',
                        'title': 'Chart Horizontal',
                        'icon': 'mdi-chart-line',
                        'status': 'active',
                        'image': 'assets/charts/chart-vertical.png',
                        'events': [
                            {
                                'name': 'onClick',
                                'action': 'ApapController::chartHorizontal()'
                            }
                        ]
                    }
                ]
            },
            {
                'title': 'Accounts',
                'id': 'menu-account',
                'icon': 'mdi-account',
                'status': 'active',
                'children': [
                    {
                        'id': 'children-chart-vertical',
                        'title': 'User Accounts',
                        'icon': 'mdi-account',
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
            },
            {
                'title': 'Batteries',
                'id': 'menu-batteries',
                'icon': 'mdi-battery',
                'status': 'active',
                'children': [
                    {
                        'id': 'children-chart-vertical',
                        'title': 'Batteries',
                        'icon': 'mdi-battery',
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
