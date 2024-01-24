function rndCode() {
    const generateRandomChar = (characters) => characters[~~(characters.length * Math.random())];
  
    const uppercaseLetters = "ABCDEFGHIJKLM";
    const numbers = "0123456789";
    const symbols = "~!@#$%^&*";
  
    const code =
      generateRandomChar(uppercaseLetters) +
      generateRandomChar(uppercaseLetters) +
      numbers[~~(numbers.length * Math.random())] +
      numbers[~~(numbers.length * Math.random())] +
      numbers[~~(numbers.length * Math.random())] +
      numbers[~~(numbers.length * Math.random())] +
      generateRandomChar(symbols) +
      generateRandomChar(symbols);
  
    return code;
  }
  for (let i = 0; i < 5; i++) {
    console.log(rndCode());
  }
  