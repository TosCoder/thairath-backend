const express = require('express');
const router = express.Router();
const controller = require('../controllers/public.controller');

router.get('/api/', controller.getAll);


module.exports = router;