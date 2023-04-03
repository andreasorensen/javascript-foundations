

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}

function createHobbit(name = "unknown", age = 0) {
  var hobbit = {
    name, 
    age
  }
  return hobbit
};

function celebrateBirthday(hobbit) {
  hobbit.age = hobbit.age + 1;  
  if (hobbit.age < 33) {
    hobbit.isAdult = true;
  }
  return hobbit
}



