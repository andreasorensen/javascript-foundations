

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}

function createDragon(name, rider, temperment) {
  var dragon = {
    name,
    rider,
    temperment,
    timesEaten: 0,
    hungry: true
  }
  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}




  function eat(dragon) {
    dragon.timesEaten = dragon.timesEaten + 1;
    if (dragon.timesEaten >= 3) {
      dragon.hungry = false;
    }
    return dragon
  }

