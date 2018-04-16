/**
 * Created by Administrator on 2018/4/16.
 */
layui.define([],function(exports){
    var fsCommon={};
    /**
     * 获取一些通用的配置信息
     * @type {{name: string, age: string}}
     */
    fsCommon["base"]={
        name:"xiaodai",
        age:"123"
    }
    exports('fsCommon',fsCommon)
})