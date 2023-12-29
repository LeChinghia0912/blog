const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

router.get('/createUser', UserController.create);
router.get('/showUser', UserController.show)
router.post('/newUser', UserController.newUser)



module.exports = router;
