# base
#### 引入

    <script src="../../lib/require.js" data-main="../main"></script>

#### 符合amd规范的
    paths:{
        "jquery":"../../../lib/jquery.1.12.4",
        "greet":"greet"
    }
#### 不符合
    shim:{
        "test":{
            exports:"test"
        }
    }
#### 使用
    require(['jquery','greet',"test"],function($,math){
        console.log($);
        console.log(math.add(1,1));
        console.log(math.len(" ddf "));
        console.log("");
    });