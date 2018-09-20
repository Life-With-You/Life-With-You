var ajax = {
	request:function(obj) {
		var xhr;
		try{
			xhr = new XMLhttpRequset();
		}catch(e){
			xhr = new ActiveXObject();
		}
		if (obj.method =='GET'){
			xhr.open(obj.method,obj.url+'?'+obj.data+'&'+Math.random(),true);
			xhr.send();
		}else if(obj.method == 'POST'){
			xhr.open(obj.method,obj.url,true);
			xhr.setRequestHeader('Content_Type','application/x_www_from_urlencoded');
			xhr.send.(obj.data);
		};
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(obj.dataType=='xml'){
					obj.callback(xhr.responseXML);
				}else if(obj.dataType=='text'){
					eval("var res = "+xhr.responseText);
					obj.callback(res);
				}
			}

	}
	
}