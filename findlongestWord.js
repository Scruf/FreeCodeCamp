function findLongestWord(str) {
	list_x=[];
  var list_t = str.split(" ").map(function(el){
  		list_x.push(el.length);
  });
  console.log(list_x.sort(function(a,b){
  	return a-b;
  }));
	console.log(list_x.sort()[list_x.length-1]);
 
}


findLongestWord("What if we try a super-long word such as otorhinolaryngology");
