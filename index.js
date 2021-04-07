function distanceFromHqInBlocks(street){
  if(street <= 42){
   return(42 - street)
  }else if (street > 42){
   return(street - 42) 
  }
}

const block = 264
function distanceFromHqInFeet(street){
   return distanceFromHqInBlocks(street)*block;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if(startBlock <= endBlock){
    return((endBlock - startBlock)*block)
  }else if(startBlock > endBlock){
    return((startBlock - endBlock)*block)  
  }
}

const price = 0.02
function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if(distance > 2500){
    return('cannot travel that far')
  }else if((distance) > 2000){
    return 25
  }else if(distance > 400){
    return((distance - 400)*price)
  }else if(distance <= 400){
    return 0
  }   
}