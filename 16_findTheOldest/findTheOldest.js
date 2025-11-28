const findTheOldest = function(array) {
    const present = new Date().getFullYear();
    array.forEach(person => {
        if (person.yearOfDeath) person["endYear"] = person.yearOfDeath
        else person["endYear"] = present
    });
    array.sort((a, b) => (b.endYear - b.yearOfBirth) - (a.endYear - a.yearOfBirth));
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
