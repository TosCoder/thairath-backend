const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin.controller');

router.get('/admin/', controller.getAll);
// router.post('/admin/', controller.create);
// router.patch('/admin/news/', controller.update);


module.exports = router;
