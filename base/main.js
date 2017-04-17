/**
 * Created by zhangyanlei on 2017/4/12.
 */
require.config({
    baseUrl:"../../base/day1/js",
    paths:{
        "jquery":"../../../lib/jquery.1.12.4",
        "greet":"greet"
    },
    shim:{
        "test":{
            exports:"test"
        }
    }
});
require(['jquery','greet',"test"],function($,math){
    console.log($);
    console.log(math.add(1,1));
    console.log(math.len(" ddf "));
    console.log("");
});