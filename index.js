// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, startChars) {
    return drivers.filter(drivers => drivers.substring(0,startChars.length) === startChars);
}

function matchName(drivers, name) {
    return drivers.filter(drivers => drivers.name === name);
}