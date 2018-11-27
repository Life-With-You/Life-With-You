// 创建数据库并连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-blog', (err) => {
    if (err) {
        console.log('数据库登录失败', err);
    } else {
        console.log('数据库登录成功');
    }
});
// 导出数据库数据，并已字符串格式导出
exports.db = mongoose.connection;