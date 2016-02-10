function processData(myArray) {
    var arr1=myArray.filter(function(item,pos){
        return myArray.indexOf(item)==pos;
    });
    console.log(arr1.sort(function(a,b){return a-b;})[arr1.length-2]);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
