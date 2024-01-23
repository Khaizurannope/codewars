function giveMeFive(obj) {
    var resultArray = [];
  
    for (var key in obj) {
      if (key.length === 5) {
        resultArray.push(key);
      }
      if (obj[key].length === 5) {
        resultArray.push(obj[key]);
      }
    }
  
    return resultArray;
  }
  