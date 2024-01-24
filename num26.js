function isolateIt(arr) {
    return arr.map(str => {
      const middleIndex = Math.floor(str.length / 2);
      
      if (str.length % 2 === 0) {
        return str.slice(0, middleIndex) + '|' + str.slice(middleIndex);
      } else {
        return str.slice(0, middleIndex) + '|' + str.slice(middleIndex + 1);
      }
    });
  }

console.log(isolateIt(["abcd","efgh"]));
console.log(isolateIt(["abcde","fghij"]));
console.log(isolateIt(["1234","56789"]));
  