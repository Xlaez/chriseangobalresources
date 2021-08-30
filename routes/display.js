const path = require('path');

const express = require('express');
const { request } = require('http');
const { response } = require('express');

// const rootDir = require('../utils/path');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'Views', 'index.html'))
})

router.get('/about', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'Views', 'about.html'))
})

router.get('/services', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'Views', 'services.html'))
})

module.exports = router;