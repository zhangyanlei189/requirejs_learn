/**
 * Created by zhangyanlei on 2017/4/17.
 */
require.config({
    baseUrl:"js/",
    paths:{
        "jquery":"jquery.1.12.4",
        "test":"test"
    }
});

require(["jquery","test"],function($,t){
    console.log($);
    //console.log(t);
});
