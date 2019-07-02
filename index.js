// Code your solution in this file!
function distanceFromHqInBlocks(xBlocks) {
  return Math.abs(xBlocks - 42);
}

function distanceFromHqInFeet(xBlocks){
  return distanceFromHqInBlocks(xBlocks) * 264;
}