const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  ItemModel = require('./api/models/itemModel'),
  ElementModel = require('./api/models/elementModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/philips-toolbar-poc')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const toolbarRoutes = require('./api/routes/toolbarRoutes');
toolbarRoutes(app);

const itemRoutes = require('./api/routes/itemRoutes');
itemRoutes(app);

const elementRoutes = require('./api/routes/elementRoutes');
elementRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port);
