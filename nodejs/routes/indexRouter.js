const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('home');
    res.redirect('posts');
});

// 导出
module.exports = router;