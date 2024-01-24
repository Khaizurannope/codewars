function cutCube(volume, n) {
    const cubeRoot = Math.cbrt(volume);
    const sideLength = Math.cbrt(volume / n);
  
    return cubeRoot % 1 === 0 && sideLength % 1 === 0;
  }

console.log(cutCube(27, 27));
console.log(cutCube(512, 8));
console.log(cutCube(512, 64));
console.log(cutCube(256, 8));
console.log(cutCube(27, 3));
console.log(cutCube(123, 456));
console.log(cutCube(50000, 50));
console.log(cutCube(256, 4));
  