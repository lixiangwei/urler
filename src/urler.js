var urler = (function(element, callback) {
    //存储路由
    var routes = {};
    var currentUrl = '';
    return {
        getHashObj: function() {
            var args = {}; 
            var query = location.search.substring(1); 
            if(query){ 
                if(query.indexOf('=') == -1) { 
                    alert('参数形式错误'); 
                    return false; 
                }else { 
                    var pairs = query.split('&'); 
                    for(var i = 0; i < pairs.length; i++) { 
                        var pos = pairs[i].indexOf('='); 
                        if(pos == -1) continue; 
                        var name = pairs[i].substring(0, pos); 
                        if(!name) { 
                            alert('参数名不能为空'); 
                            return false; 
                        } 
                        var value = pairs[i].substring(pos + 1); 
                        value = decodeURIComponent(value); 
                        args[name] = value; 
                    } 
                } 
            }else { 
                alert('没有参数'); 
                return false; 
            } 
            return args; 
        },
        route: function(path, callback) {
            routes[path] = callback || function(){};
        },
        refresh: function() {
            currentUrl = location.hash.slice(1) || '/';
            if(currentUrl) routes[currentUrl]();
        }
    }
}());
