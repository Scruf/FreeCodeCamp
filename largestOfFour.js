function largestOfFour(arr) {
  var largest=[];
  arr.map(function (el){
  	var large = el.sort(function(a,b){
  		return a-b;
  	})[el.length-1];
  	largest.push(large);
  });
 	console.log(largest);
  return largest;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
