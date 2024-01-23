function howManySmaller(arr, n) {
    arr = arr.map(function(element) {
      return parseFloat(element.toFixed(2));
    });
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < n) {
        count++;
      }
    }
  
    return count;
  }


console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));