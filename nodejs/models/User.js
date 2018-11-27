const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        // 是否是唯一的
        unique: true
    },
    password: String,
    gender: String,
    profile: String,
    avatar: String
})
// 导出数据并已字符串导出
exports.User = mongoose.model('User', userSchema)