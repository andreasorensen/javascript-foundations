

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}

function createHobbit(name = "unknown", age = 0) {
  var hobbit = {
    name, 
    age,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  return hobbit
};

function celebrateBirthday(hobbit) {
  hobbit.age = hobbit.age + 1;
  if (hobbit.age >= 33) {
    hobbit.isAdult = true; 
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  }
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!'
  } else {
    return "You can't have it!"
  }
}

function meetPeople(bilbo, people) {
    bilbo.acquaintances = bilbo.acquaintances.concat(people)
    return bilbo
}

function findFriends(hobbit) {
  var friends = []
  for (var i=0; i<hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name)
      console.log(friends)
    } 
  } return friends
}





