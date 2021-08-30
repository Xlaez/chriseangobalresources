const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/get-form', (request, response, next) => {
  response.sendFile(path.join(__dirname, '../', 'Views', 'form.html'));
})

router.use('/form', (request, response, next) => {
  console.log(request.body)
  response.redirect('/')
})


module.exports = router;