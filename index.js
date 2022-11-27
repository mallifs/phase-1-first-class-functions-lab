// Code your solution in this file!
const returnFirstTwoDrivers = function(someArray){
    return( someArray.slice(0,2));
}
const returnLastTwoDrivers = function(someArray){
    return(someArray.slice(-2));
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(someInteger){
    return function(fare){
        return (fare * someInteger);
    };
}
function fareDoubler(fare){
    return (fare+fare);
}
const fareTripler = function(fare){
    return (fare*3);
}
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
};