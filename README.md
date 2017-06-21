# urler
获取URL参数 ，简单的路由实现

使用（usage）： urler.getHashObj();  

路由工作原理：当URL发生变化的时候，解析URL根据URL找到对应定义好的程序，执行完之后更新视图和数据

定义路由：  
urler.route('/', function(){ alert('default'); });  
urler.route('/a', function(){ alert('a'); });  
urler.route('/b', function(){ alert('b'); });

监听URL变化：  
window.addEventListener('load', urler.refresh(), false);  
window.addEventListener('hashchange', urler.refresh(), false);    

HTML:  
```
<a href="#/a">a</a>
<a href="#/b">b</a>
```

不依赖其他库（no dependence）  
