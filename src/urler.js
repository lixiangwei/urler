var urler = (function(element, callback) {
	return {
		getHashObj: function() { 
			var args = {}; 
			var query = location.search.substring(1); 
			if(query){ 
				if(query.indexOf('=') == -1) { 
					alert('������ʽ����'); 
					return false; 
				}else { 
					var pairs = query.split('&'); 
					for(var i = 0; i < pairs.length; i++) { 
						var pos = pairs[i].indexOf('='); 
						if(pos == -1) continue; 
						var name = pairs[i].substring(0, pos); 
						if(!name) { 
							alert('����������Ϊ��'); 
							return false; 
						} 
						var value = pairs[i].substring(pos + 1); 
						value = decodeURIComponent(value); 
						args[name] = value; 
					} 
				} 
			}else { 
				alert('û�в���'); 
				return false; 
			} 
			return args; 
		}
	}
}());
