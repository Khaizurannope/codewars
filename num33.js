function maxMin(arr1, arr2) {
    const differences = arr1.map((num, index) => Math.abs(num - arr2[index]));
  
    const maxValue = Math.max(...differences);
    const minValue = Math.min(...differences);
  
    return [maxValue, minValue];
  }

console.log(maxMin([1, 3, 5], [9, 8, 7]));