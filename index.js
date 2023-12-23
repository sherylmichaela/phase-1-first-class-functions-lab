const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function fareMultiplier(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = function createFareMultiplier(fare) {
  return fare * 2;
};

const fareTripler = function createFareMultiplier(fare) {
  return fare * 3;
};

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
};

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
