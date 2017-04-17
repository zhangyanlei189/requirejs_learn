/**
 * Created by zhangyanlei on 2017/4/12.
 */
define(['jquery'],function($){
    var add = function(x,y){
        return x+y;
    };
    var len = function(str){
        return $.trim(str).length;
    };
    return {
        add:add,
        len:len
    }
});