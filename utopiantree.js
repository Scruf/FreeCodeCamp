process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function parseInt(n) {
  var sum = 0;
  var k = 0;
  while (k <= n) {
    if (k % 2 == 0) sum = sum + 1;
    else if (k % 2 == 1) sum = sum * 2;
    k++;
  }
  return sum;
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    if (n != 0) console.log(n);
  }
}
