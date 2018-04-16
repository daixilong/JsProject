/**
 * Created by Administrator on 2018/4/16.
 * 程序的入口调用
 */
layui.use(['layer','demo','fsCommon'],function(){
    var layer=layui.layer;
    var demo= layui.demo;
    var fsCommon=layui.fsCommon;
    demo.init({name:"呆呆"});
    var _csrf_code=$('meta[name="_csrf_code"]').attr("content");
    var _csrf_name=$('meta[name="_csrf_name"]').attr("content");
   // layer.msg("hello "+demo.getValue("name"));
  // layer.msg("name:"+$.result(fsCommon,"base.name"));
   // var device = layui.device('myapp');
   //console.log(device);
    // layer.msg(device);
    $.post("plugins/frame/json/tsconfig.json",{});
});