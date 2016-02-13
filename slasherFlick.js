function slasher(arr, howMany) {
  if(howMany===0)
  	return arr;
  if(howMany>arr.length)
  	return [];
  else{
  	return arr[howMany];
  }
}

var x=slasher([1, 2, 3], 2);
console.log(x);
