// Copied TOP solution because it was better
function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// My original solution is below.
// It satisfied the test requirements, but it 
// mutated the array, which was less than ideal.

// const findTheOldest = function(array) {
//     const present = new Date().getFullYear();
//     array.forEach(person => {
//         if (person.yearOfDeath) person["endYear"] = person.yearOfDeath
//         else person["endYear"] = present
//     });
//     array.sort((a, b) => (b.endYear - b.yearOfBirth) - (a.endYear - a.yearOfBirth));
//     return array[0];
// };

// Do not edit below this line
module.exports = findTheOldest;
