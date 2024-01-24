function shuffleIt(arr, ...args) {
    args.forEach(([index1, index2]) => {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    });
    return arr;
  }
  
console.log(shuffleIt([1,2,3,4,5],[1,2]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]));
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));
  