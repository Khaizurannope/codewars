function fiveLine(s){
    s = s.trim();
    return `${s}\n${s + s}\n${s + s + s}\n${s + s + s + s}\n${s + s + s + s + s}`;
  }

console.log(fiveLine("  a"));
console.log(fiveLine("  xy "));
  