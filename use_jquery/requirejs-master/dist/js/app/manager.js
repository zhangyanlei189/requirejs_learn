define(["app/student","app/class"],function(e,t){return{addNewStudent:function(n,r){t.addToClass(e.createStudent(n,r))},getMyClassSize:function(){return t.getClassSize()},getMyClassData:function(){return t.getClassData()}}});