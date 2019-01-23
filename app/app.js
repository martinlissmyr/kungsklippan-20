const express = require('express');
const router = require('./routes');
const app = express();

app.set('views', 'app/views');
app.set('view engine', 'ejs');
app.use(router);
app.use(express.static('assets'));
module.exports = app;

