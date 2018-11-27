const express = require('express');
const router = express.Router();
const User = require('../models/User').User;
router.get('/', (req, res) => {

req.session.user = null;
    res.redirect('/login')
});
// 导出
module.exports = router;