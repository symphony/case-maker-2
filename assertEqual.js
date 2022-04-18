const eqNonObj = function(elemA, elemB) {
  if (elemA === elemB) return true;
  if (!Array.isArray(elemA) || !Array.isArray(elemB)) return false;
  if (elemA.length !== elemB.length) return false;
  for (let i = 0; i < elemA.length; i++) {
    if (elemA[i] !== elemB[i]) return false;
  }
  return true;
};

const eqObjects = function(objectA, objectB) {
  if (Array.isArray(objectA) || Array.isArray(objectB)) return false;
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;
  for (const key in objectA) {
    if (!eqNonObj(objectA[key], objectB[key])) return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const failedMsg = `🦐 Assertion Failed 🍅 > ${inspect(actual)} !== ${inspect(expected)}`;
  const passedMsg = `👽 Assertion Passed 🐸 > ${inspect(actual)} === ${inspect(expected)}`;
  let isEqual = eqNonObj(actual, expected); // send to sub function
  const areObjs = typeof(actual) === "object" && typeof(expected) === "object";
  if (!isEqual && areObjs) isEqual = eqObjects(actual, expected); // send to sub function
  console.log(isEqual ? passedMsg : failedMsg);
};

module.exports = { assertEqual };