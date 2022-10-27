function recursiveSum(n) {
  if (n <= 1) return n;
  return n + recursiveSum(n - 1)
}

console.log('sum of natural numbers from 0 :', recursiveSum(0));
console.log('sum of natural numbers from 1 :', recursiveSum(1));
console.log('sum of natural numbers from 1 to 3 :', recursiveSum(3));
console.log('sum of natural numbers from 1 to 10 :', recursiveSum(10));
