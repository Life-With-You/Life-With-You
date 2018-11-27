const express = require('express');
const url = require('url');
const router = express.Router();
const User = require('../models/User').User;
const Post = require('../models/Post').Post;
const Comment = require('../models/Comment').Comment;
const checkLogin = require('../middleware/checkLogin').checkLogin;
// 发表留言
router.post('/:postId', (req, res) => {

    // console.log(req.params.postId);
    // console.log("req.body", req.body);
    // console.log("req.session.user._id", req.session.user._id);

    var postId = req.params.postId;
    var content = req.body.content;
    var author = req.session.user._id;
    // console.log(postId, content, author);

    // res.send('value');
    // 校验参数
    try {
        if (!content) {
            throw new Error('留言内容不能为空')
        }
    } catch (e) {
        req.flash("error", e.message);
        // 阻止代码继续向下执行 校验错误就不要写入数据库
        res.redirect('back');
        return
    }
    //写入数据库
    Comment.create({
        postId: postId,
        content: content,
        author: author
    }, (err, result) => {
        if (err) {
            console.log('发表留言失败', err)
        } else {
            console.log('发表留言成功')
            req.flash("success", '发布留言成功');
            res.redirect('back');
        }
    })
});
// ===========================

// =============================
// 删除文章
router.get('/:commentId/remove', checkLogin, (req, res) => {
    var commentId = req.params.commentId;
    Comment.findById(commentId, (err, result) => {
        if (err) {
            console.log('查找留言失败', err);
        }
        Comment.findByIdAndRemove(commentId, (removeErr, removeResult) => {
            req.flash('success', '删除成功');
            res.redirect('back');
        })
    })
    // res.send('ssssssssss');
});
// =============================

module.exports = router