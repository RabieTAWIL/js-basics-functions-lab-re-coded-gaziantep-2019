// Code your solution in this file!
function distanceFromHqInBlocks(xBlocks) {
  return Math.abs(xBlocks - 42);
}

function distanceFromHqInFeet(xBlocks){
  return distanceFromHqInBlocks(xBlocks) * 264;
}
function distanceTravelledInFeet(xBlock1, xBlock2){
  return Math.abs(xBlock2 - xBlock1) * 264;
}

