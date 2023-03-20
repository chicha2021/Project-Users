const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { User } = require('./models/User');
const { Company } = require('./models/Company');
const app = express();
const origin = "http://localhost:3000";

app.use(express.json());
app.use(cors({origin: origin}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
// app.use('/', require('./routes/users.routes.js'));

User.belongsToMany(Company, { through: 'user-company' });

Company.belongsToMany(User, { through: 'user-company' });

module.exports = app;