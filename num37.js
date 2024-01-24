function countAnimals(animals, count) {
    const result = [];
  
    count.forEach(animal => {
      const regex = new RegExp(animal, "ig");
      const matches = animals.match(regex) || [];
      result.push(matches.length);
    });
  
    return result;
  }
  
  console.log(countAnimals("dog,cat", ["dog", "cat"]));
  console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]));
  console.log(countAnimals("dog,dog,cat", ["dog", "cat"]));
  console.log(countAnimals("dog,dog,cat", ["pig", "cow"]));
  