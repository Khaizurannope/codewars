function threeInOne(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 3) {
      const sum = arr.slice(i, i + 3).reduce((acc, num) => acc + num, 0);
      result.push(sum);
    }
    
    return result;
  }
  
console.log(threeInOne([1,2,3]));
console.log(threeInOne([1,2,3,4,5,6]));
console.log(threeInOne([1,2,3,4,5,6,7,8,9]));
console.log(threeInOne([1,3,5,2,4,6,7,7,7]));
  