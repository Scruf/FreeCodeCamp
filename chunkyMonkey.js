function chunk(arr, size) {
	var list_t =[];
	while(arr.length!=0){
		var list_x = arr.splice(0,size);
		list_t.push(list_x);
	}
	console.log(list_t);

}

chunk([0, 1, 2, 3, 4, 5], 4)