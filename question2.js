const testArray = [1, 25, 7, -7, -3, 12, -22, 0];

const jsSortArray = testArray.slice().sort(function (a, b) {
  return a - b;
})

console.log('Javascript sort array :', jsSortArray);

function absValue(n) {
  return n < 0 ? -n : n;
}

function jsAbsoluteSortArray (array) {
  let inputArray = array.slice();
  let temp;
  // Sort array using buble sort, swap the negative number if its index higher than the non-negative number with the same absolute value
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (absValue(inputArray[i]) > absValue(inputArray[j]) || (absValue(inputArray[i]) === absValue(inputArray[j])) && inputArray[j] < 0) {
        temp = inputArray[j];
        inputArray[j] = inputArray[i];
        inputArray[i] = temp;
      }
    }
  }
  return inputArray;

}
console.log('Javascript absolute sort array :', jsAbsoluteSortArray(testArray));
