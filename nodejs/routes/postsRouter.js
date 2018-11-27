const express = require('express');
const url = require('url');
const router = express.Router();
const User = require('../models/User').User;
const Post = require('../models/Post').Post;
const Comment = require('../models/Comment').Comment;
const checkLogin = require('../middleware/checkLogin').checkLogin;
// 个人文章和全部文章
router.get('/', (req, res) => {
    // console.log(url.parse(req.url));
    var author = url.parse(req.url, true).query.author;

    var whereStr;
    if (!author) {
        whereStr = {}
    } else {
        whereStr = {
            author: author
        }
    }
    Post.find(whereStr).sort({
        _id: -1
    }).populate('author').exec((err, result) => {
        // console.log('============================');
        // console.log('post', result);

        if (err) {
            console.log('获取作者文章失败', err);
        }
        res.render('post-list', {
            post: result
        });
    });
    // res.send('value');
});
// ====================================
// 发表文章
router.get('/create', checkLogin, (req, res) => {
    // res.send('register GET');
    // console.log(req.session.user);

    res.render('create');
});

router.post('/create', (req, res) => {
    // console.log('req.body', req.body);
    var title = req.body.title;
    var content = req.body.content;
    var author = req.session.user._id;
    // console.log(req.session.user)
    // 校验参数
    try {
        if (!title) {
            throw new Error('标题不能为空')
        }
        if (!content) {
            throw new Error('文章内容不能为空')
        }
    } catch (e) {
        req.flash("error", e.message);
        // 阻止代码继续向下执行 校验错误就不要写入数据库
        return res.redirect('back');
    }
    //写入数据库
    Post.create({
        title: title,
        content: content,
        author: author
    }, (err, result) => {
        if (err) {
            console.log('发表文章失败', err)
        } else {
            console.log('发表文章成功')
            req.flash("success", '发布文章成功');
            res.redirect('/posts/?author=' + result.author._id);
        }
    })
});
// ===========================



// =============================
// 查看文章
router.get('/:postId', (req, res) => {
    // console.log(req.params.postId);
    var postId = req.params.postId;
    Post.findById(postId).populate('author').exec((err, result) => {
        // console.log(result);
        if (err) {
            console.log('查找文章失败', err)
        }
        Post.findByIdAndUpdate(postId, {
            pv: result.pv + 1
        }, (pverr, pvresult) => {
            // console.log('pvresult', pvresult);
        })
        Comment.find({
            postId: postId
        }).populate('author').exec((comErr, comResult) => {
            res.render('post-detail', {
                post: result,
                comments: comResult
            });
        })
    })
});


// =============================
// 删除文章
router.get('/:postId/remove', checkLogin, (req, res) => {
    var postId = req.params.postId;
    Post.findById(postId, (err, result) => {
        if (err) {
            console.log('查找文章失败', err);
        }
        Post.findByIdAndRemove(postId, (removeErr, removeResult) => {
            req.flash('success', '删除成功');
            res.redirect('/posts');
        })
    })
});
// =============================

module.exports = router