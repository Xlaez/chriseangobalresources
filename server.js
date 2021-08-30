const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const displayRouter = require('./routes/display');

const { request, response, Router } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'img')))

app.use(adminRouter);
app.use(displayRouter);

app.use((request, response, next) => {
  response.sendFile(path.join(__dirname, 'Views', 'error_page.html'));
})

app.listen('8000');
