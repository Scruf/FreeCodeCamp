function factorialize(num) {
  var product=1;
  for (var i=1;i<=num;i++)
    product*=i;
  return product;
}
////recursive Factorial
function factorialize(num) {

    return (num < 1) ? 1 : num*factorialize(num-1);
}

factorialize(5);

factorialize(5);
