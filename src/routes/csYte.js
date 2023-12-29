const express = require('express');
const router = express.Router();

const YteController = require('../app/controllers/YteController');

router.get('/createYte', YteController.create);
router.post('/newYte', YteController.newYte);
router.get('/showYte', YteController.show);

module.exports = router;