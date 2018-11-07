var arr = [];
function require(module,callback) {
   try{
       for(i in module) {
           if(arr.indexOf(module[i]) == -1) {
               if(callback)
                 callback('模块未定义');
                 return;
           }
           let script = document.createElement('script');
           script.src = module[i]

           let head = document.querySelector('head');
           head.appendChild(script);
           if (callback)
              callback();
       }
   }catch (err) {
       if(callback)
         callback(err)
   }
  
}


function define(module,callback) {
    if(arr.indexOf(module) == -1) {
        arr.push(module);
    }
    if(callback)
       callback();
  }


