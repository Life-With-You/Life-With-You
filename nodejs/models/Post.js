const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        //关联数据库
        type: mongoose.Schema.Types.ObjectId,
        //从哪个数据库获取
        ref: 'User'
    },
    //浏览次数
    pv: {
        type: Number,
        default: 0
    },
    //写入文章时间
    creationTime: {
        type: Date,
        default: Date.now()
    },
    //留言个数
    comments: {
        type: Number,
        default: 0
    }
});
// 导出数据并已字符串导出
exports.Post = mongoose.model('Post', postSchema);