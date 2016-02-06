function reverseString(str) {
  var str_s ="";
  for(var i=str.length-1;i>=0;i--){
    str_s+=str.charAt(i);
  }
  return str_s;
}

reverseString("hello");
