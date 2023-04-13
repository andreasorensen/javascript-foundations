
module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};

function createAirport(name, airlines, availableGates ) {
  var airport = {
    name,
    airlines,
    availableGates,
  } 
  return airport
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, landingPlanes) {
 airport.availableGates = (airport.availableGates - landingPlanes)
 if (airport.availableGates > 0){
  return 'Success! Current availability is 2.'
 }
 if (airport.availableGates < 0){
  airport.availableGates = 0;
  return 'Oh no! Not enough gates available. Current overflow is 1.'
 }
}

function checkAirlineLocations(allAirports, airlines) {
  var airlinesAirports = []
  for (var i=0; i<allAirports.length; i++){
    if (allAirports[i].airlines.includes(airlines)){
      airlinesAirports.push(allAirports[i].name)
    }
  } return airlinesAirports
}
