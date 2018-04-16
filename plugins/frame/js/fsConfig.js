/**
 * Created by Administrator on 2018/4/16.
 */
layui.config({
    base : "plugins/frame/js/",
    version:"1.0.0"
});
/**
 * jquery的扩展
 */
(function($){
    /**
     * 获取token信息
     */
    var getToken = function ()
    {
        var _csrf_code=$('meta[name="_csrf_code"]').attr("content");
        var _csrf_name=$('meta[name="_csrf_name"]').attr("content");
        var token = {};
        token[_csrf_name] = _csrf_code;
        return token;
    };

    $.ajaxSetup({
        headers : getToken(),
        type: 'POST',
        async: true,
        dataType : "json",
        timeout : 30000
    });
    $.extend({
        isEmpty:function(value){
            if(value==''||value==null ||value==undefined){
                return true;
            }
            return false;
        },
        isObject:function(value){
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
        },
        result: function(object, path, defaultValue) {
            var value = "";
            if(!$.isEmpty(object) && $.isObject(object) && !$.isEmpty(path)){
                var paths = path.split('.');
                var length = paths.length;
                $.each(paths,function(i,v){
                    object = object[v];
                    if(length-1 == i){
                        value = object;
                    }
                    if(!$.isObject(object)){
                        return false;
                    }
                })

            }

            if($.isEmpty(value) && !$.isEmpty(defaultValue)){
                value = defaultValue;
            }
            return value;
        },
        post:function(url,param){
            $.ajax({
                url:url,
                data:param,
                success:function(result){
                    alert(result.compilerOptions.module);
                },
                error:function (result) {

                }
            })
        }
    });
})(jQuery)
