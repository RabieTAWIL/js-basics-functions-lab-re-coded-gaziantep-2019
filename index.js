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
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400 ){
    return "gives customers a free sample";
  }
  else if ( distance > 400 && distance <= 2000 ){
    return (distance * 2 - 800)/1000;
  }
  
}