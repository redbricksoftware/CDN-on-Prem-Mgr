'use strict;'

//Libraries
var express = require('express');
//var logger = require('morgan');
//var mongoose = require('mongoose');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//API Router
var router = express.Router();

router.get('/', function (req, res) {
    console.log('get heroes');
    res.json(
        {
            data: [
                {id: 11, name: '1 - Mr. Nice'},
                {id: 12, name: 'Narco'},
                {id: 13, name: 'Bombasto'},
                {id: 14, name: 'Celeritas'},
                {id: 15, name: 'Magneta'},
                {id: 16, name: 'RubberMan'},
                {id: 17, name: 'Dynama'},
                {id: 18, name: 'Dr IQ'},
                {id: 19, name: 'Magma'},
                {id: 20, name: 'Tornado'}]
        }
    );
});

router.get('/cdnfiles', function (req, res) {
    console.log('get cdn files');
    res.json(
        {
            data: [
                {
                    id: 'abc-def',
                    name: 'some name',
                    modified: true,
                    deleted: false,
                    createdDate: '2015-12-31',
                    modifiedDate: '2016-12-31'
                },
                {
                    id: 'xyz-abc',
                    name: 'some other file',
                    modified: false,
                    deleted: false,
                    createdDate: '2016-12-31',
                    modifiedDate: null
                }
                ]
        }
    );
});

router.get('/cdnfiles/:fileid', function (req, res) {
    console.log('get cdn files');
    res.json(
        {
            data: {
                id: 'abc-def',
                name: 'some name',
                modified: true,
                deleted: false,
                createdDate: '2015-12-31',
                modifiedDate: '2016-12-31'
            }
        });
});


router.delete('/cdnfiles/:fileid', function (req, res) {
    console.log('get cdn files');
    res.json(
        {
            data: {
                id: 'abc-def',
                name: 'some name',
                modified: true,
                deleted: false,
                createdDate: '2015-12-31',
                modifiedDate: '2016-12-31'
            }
        });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);