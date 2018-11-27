$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// 鼠标指到评论显示删除
$(".comment .media").hover(
    function () {
        $(this)
            .find(".delete")
            .show();
    },
    function () {
        $(this)
            .find(".delete")
            .hide();
    }
);

// 页面加载3秒之后 关闭信息提示框
setTimeout(() => {
    $('.notification .alert').alert('close')
}, 3000);