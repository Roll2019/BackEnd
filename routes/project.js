'use strict'
 var express = require('express');
 var projectController = require('../controllers/project');

 var router = express.Router();

 var multipart = require('connect-multiparty');
 var multipartMiddleware = multipart({uploadDir: './uploads'});

 router.get('/home', projectController.home);
 router.post('/test',projectController.test);

 module.exports = router;