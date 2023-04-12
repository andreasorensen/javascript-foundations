function createVampire(name, pet = 'bat') {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  };
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  return "I WANT TO SUCK YOUR BLOOD!";
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}