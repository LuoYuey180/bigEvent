// 设置article对象保存文章接口的调用方法

var article = {
    // 文章分类获取接口
    getCate: function (options) {
        $.ajax({
            url: ARTICE_GET,
            success: options.success
        })
    },
    // 文章分类新增接口
    addCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICE_ADD,
            data: options.data,
            success: options.success
        });
    },
    // 文章分类编辑接口
    editCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICE_EDIT,
            data: options.data,
            success: options.success
        })
    },
    // 文章分类删除接口
    delCate: function (options) {
        $.ajax({
            type: 'post',
            url: ARTICE_DEL,
            data: options.data,
            success: options.success
        })
    }
}