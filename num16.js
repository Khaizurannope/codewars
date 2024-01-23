function cutIt(arr) {
    var minLength = Math.min(...arr.map(str => str.length));

    var result = arr.map(str => str.slice(0, minLength));
  
    return result;
  }
console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));
  