const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId: String,
    content: String,
    author: {
        //关联数据库
        type: mongoose.Schema.Types.ObjectId,
        //从哪个数据库获取
        ref: 'User'
    },
    //浏览次数
    //写入文章时间
    creationTime: {
        type: Date,
        default: Date.now()
    },
});
// 导出数据并已字符串导出
exports.Comment = mongoose.model('Comment', commentSchema);