function userLookup(index){
  let users = [
    {
      name: 'Bob',
      age: 37
    },
    {
      name: 'Mary',
      age: 7
    },
    {
      name: 'Enoch',
      age: 21
    }
  ]
  let user = users[index]
  return new Promise(function(resolve, reject){
    if(user){
    //the resolve passes the content that we wish to push through. If we reject, it runs to catch
      resolve(user)
    }else{
      reject("No user found")
    }
  })
}

//assuming the previous step was a "resolve," we take the contents of that resolve and push it through this function. depending upon the results of this function, we apply a string to the chosen user and run another promise statement. If it is a reject, it runs to catch. Otherwise, we can continue.
function ageDescriptor(user){
  if(user.age){
    if(user.age < 18){
      var descriptor = "a minor"
    }else{
      var descriptor = "an adult"
    }
  }
  return new Promise(function(resolve, reject){
    if(!user.name){
      reject("No user name found")
    }else if(!descriptor){
      reject("Could not describe age for " + user.name)
    }else{
      resolve(user.name + " is " + descriptor)
    }
  })
}


userLookup(2).then(function(user){
  return ageDescriptor(user)
  console.log(user)
}).then(function(a){
  console.log(a)
}).catch(function(error){
  console.log(error)
})

function descriptionForUser(index){
  return userLookup(index).then(function(user){
    return ageDescriptor(user)
  })
}

Promise.all([descriptionForUser(0), descriptionForUser(1), descriptionForUser(2)]).then(function(descriptions){
  descriptions.forEach(function(description){
    console.log(description)
  })
}).catch(function(error){
  console.log(error)
})

// return new Promise(function(resolve, reject){
//   let selectedUser = users[index]
//
//   if(selectedUser){
//     resolve(selectedUser)
//   }else{
//     reject("Could not resolve user")
//   }
// })

// userLookup(67).then(function(user){
//   console.log("Found " + user.name)
// }).catch(function(error){
//   console.log("Error: " + error)
// })

// let success = function(result){
//   console.log(result)
// }
//
// let failure = function(result){
//   console.log(result)
// }

// ageDescriptor({name: 'Phil', age: 17}).then(function(description){
//   console.log(description)
// }).catch(function(error){
//   console.log("Error: " + error)
// })

// userLookup(2).then(function(userLookupResult){
//   ageDescriptor(userLookupResult)
//   console.log(result)
// }).catch(function(result){
//   console.log(result)
// })
// ageDescriptor(userLookup(2)).then(success).catch(failure)




  // let success = function(result){
  //   console.log ("name: " + selectedUser.name)
  //   console.log ("age: " + selectedUser.age)
  // }
  //
  // let failure = function(result){
  //   console.log("error: " + result)
  // }
  //
  // promise.then(success).catch(failure)
