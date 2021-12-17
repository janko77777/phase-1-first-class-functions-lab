
const array = ['Antonia', 'Nuru', 'Amari', 'Claudia']

const returnFirstTwoDrivers = function(array){
    let newArray = [...array].slice(0, 2)
    return newArray
}

console.log(returnFirstTwoDrivers(array))

const returnLastTwoDrivers = function(array){
    let newArray2 = [...array].slice(array.length - 2, array.length)
    return newArray2
}

const selectingDrivers = returnFirstTwoDrivers(array).concat(returnLastTwoDrivers(array))

const createFareMultiplier = function(multiplier) {
    return function(fare) {return fare*multiplier}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(array, foo) {
    return foo(array)
}