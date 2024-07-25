const findTheOldest = function(person) {
    const currentYear = new Date().getFullYear();
    const oldest = person.sort(function(a, b){
        const first = !a.yearOfDeath ? currentYear - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        const next = !b.yearOfDeath ? currentYear - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;

        return first > next ? -1 : 1;
    });

    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
