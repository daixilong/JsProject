/**
 * Created by Administrator on 2018/4/16.
 */
layui.define([],function(exports){
    var demo=function(){
        this.config={
            name:"小呆",
            age:"20"
        };
    }
    /**
     * 传递配置参数
     * @param options
     */
    demo.prototype.init=function(options){
        var _that=this;
        $.extend(true,_that.config,options);
        return _that;
    };

    /**
     * 获取对应的参数信息
     */
    demo.prototype.getValue=function(param){
        var _that=this;
        var _result= _that.config[param];
        if(!$.isEmpty(_result)){
            return _result;
        }
        return _that.config;
    };
    exports("demo",new demo());
})