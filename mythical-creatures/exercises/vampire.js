module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}

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
  if (vampire.thirsty) {
    return "I WANT TO SUCK YOUR BLOOD!";
  } else {
  return `No thanks, I am too full.`
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50){
    vampire.ouncesDrank = vampire.ouncesDrank + 10
  }
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  } 
  return vampire
}

function inquirePlace(locations, place) {
  if (locations.includes(place)) {
    return "Yes, I have spent some time in New Orleans."
  } else {
    return "No, I have never been to Idaho."
  }
}

function findBatLovers(vampires) {
  var batLovers = []
  for (var i=0; i<vampires.length; i++) {
    if (vampires[i].pet === 'bat') {
      batLovers.push(vampires[i].name)
    } console.log(vampires[i].pet)
  } return batLovers
}

