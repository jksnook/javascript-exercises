const findTheOldest = function(people) {
  const currentYear = (new Date()).getFullYear();
  let oldest = false;
  let oldestAge = 0;
  let age = 0;
  for (let person of people) {
    if (person.yearOfDeath) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = currentYear - person.yearOfBirth;
    }
    if (oldest) {
      if (age > oldestAge) {
        oldest = person;
        oldestAge = age;
      }
    } else {
      oldest = person;
      oldestAge = age;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
