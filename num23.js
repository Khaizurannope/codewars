function infiniteLoop(arr, d, n) {
    for (let i = 0; i < n; i++) {
      if (d === "left") {
        const shiftedElements = arr.map(subArr => subArr.shift());
        arr.forEach((subArr, index) => {
          subArr.push(shiftedElements[(index + 1) % arr.length]);
        });
      } else if (d === "right") {
        const poppedElements = arr.map(subArr => subArr.pop());
        arr.forEach((subArr, index) => {
          subArr.unshift(poppedElements[(index + 2) % arr.length]);
        });
      }
    }
    return arr;
  }

console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]], "left", 1)); 
console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]], "right", 1)); 
console.log(infiniteLoop([[1,2],[3,4,5,6],[7,8,9,10]], "left", 2)); 
  