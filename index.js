const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(collection, name){
  const result = []
  for (const driver of collection){
  
  if (name.toLowerCase() === driver.toLowerCase()){
  result.push(driver)
  }
  }
  return result
  }
 
  function fuzzyMatch(drivers, names){
  let fuzzyArray = drivers.filter(function (letter) {
        return (letter.charAt(0,1) === names.charAt(0,1));
    });
   return fuzzyArray
  }

function matchName(drivers, firstname){
  let newArray = drivers.filter(function (drivers){
    return (firstname === drivers.name)
  })
  return newArray
}