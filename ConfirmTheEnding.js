function end(str, target) {
  if(str.split(" ").length===1)
  	return str.charAt(str.length-1)===target ? true : false;
  else
  	{
  		var list = str.split(" ");
  		
  		return list[list.length-1]===target ? true : false;
  	}
}

var x=end("He has to give me a new name", "name");
if (x)
	console.log("True");
else
	console.log("False");
