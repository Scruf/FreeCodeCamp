function titleCase(str) {
  var normal_str="";
  str.split(" ").map(function(el){
  	normal_str+=el.charAt(0).toUpperCase();
  	for(var i=1;i<el.length;i++)
  		normal_str+=el.charAt(i).toLowerCase();
  	normal_str+=" ";
  });
 return normal_str.substring(0,normal_str.length-1);
 
}

titleCase("I'm a little tea pot");
