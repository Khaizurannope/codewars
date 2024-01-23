function pickIt(arr) {
    var odd = [], even = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        // Jika elemen merupakan bilangan ganjil, masukkan ke dalam array odd
        odd.push(arr[i]);
      } else {
        // Jika elemen merupakan bilangan genap, masukkan ke dalam array even
        even.push(arr[i]);
      }
    }
  
    return [odd, even];
  }
  