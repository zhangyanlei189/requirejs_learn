define(["domReady","modernizr","jquery","bootstrap","app/manager"],function(e,t,n,r,i){i.addNewStudent("wong","male"),i.addNewStudent("jenking","female"),console.log(JSON.stringify(i.getMyClassData())),alert(Modernizr.borderradius)});