// Code your solution here
function findMatching(arr,string) {
 
   return arr.filter((driver => driver.toLowerCase() === string.toLowerCase()))
   //return arr.filter((driver => driver.toLowerCase() === string.toLowerCase()))
}

function fuzzyMatch(arr,string){
    return arr.filter((driver => driver.slice(0,1) === string.slice(0,1)))
}

function matchName(arr,string){
    return arr.filter((driver => driver.name === string))
 
}




