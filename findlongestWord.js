function findLongestWord(str) {
	list_x=[];
  var list_t = str.split(" ").map(function(el){
  		list_x.push(el.length);
  });
 return list_x.sort(function(a,b){
   return a-b;
 })[list_x.length-1];
}

findLongestWord("The quick brown fox jumped over the lazy dog");
