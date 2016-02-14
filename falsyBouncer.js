function bouncer(arr) {
  arr.filter(function(val,index){
     if(typeof(val)!=='string' )
     {
     	arr.slice(index,1);
     }
   });
  var filtered = arr.filter(Boolean);
console.log(filtered);
}

bouncer([7, "ate", "", false, 9]);
