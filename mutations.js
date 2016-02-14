function mutation(arr) {
	var flag=true;
	arr[1].split('').filter(function(val1){
		if(arr[0].indexOf(val1)===-1)
			flag=false;
	});
	console.log(flag);	  
}
mutation(["hello", "Hello"]);
