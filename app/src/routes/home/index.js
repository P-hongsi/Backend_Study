'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);
router.get('/signup', ctrl.output.signup);

module.exports = router;
