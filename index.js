// Code your solution in this file!
function distanceFromHqInBlocks(xBlocks) {
  return Math.abs(xBlocks - 42);
}

function distanceFromHqInFeet(xBlocks){
  return distanceFromHqInBlocks(xBlocks) * 264;
}
function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if (distanceTravelledInFeet(start, destination) <= 400 ){
    return price = "gives customers a free sample";
  }
  else if ( distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000 ){
    return price = distanceTravelledInFeet(start, destination) * 0.2;
  }
  
}