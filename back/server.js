const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  UserModel = require('./api/models/userModel'),
  MonitorModel = require('./api/models/monitorModel'),
  TemplateModel = require('./api/models/templateModel'),
  ElementModel = require('./api/models/elementModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/philips-poc')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

const monitorRoutes = require('./api/routes/monitorRoutes');
monitorRoutes(app);

const templateRoutes = require('./api/routes/templateRoutes');
templateRoutes(app);

const elementRoutes = require('./api/routes/elementRoutes');
elementRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port);
