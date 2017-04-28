//define the terms of the promise
let myPromise = new Promise(function(resolve, reject){
  let isSuccess = false //just as an example
  if(isSuccess){
    //the string can be passed as an argument into the success function below
    resolve("the data")
  }else{
    //the string can be passed as an argument into the failure function below
    reject("reason it failed")
  }
})

//if resolve, do this:
let success = function(result){
  console.log("success: " + result)
}

//if reject, do this:
let failure = function(result){
  console.log("failed: " + result)
}

//syntax BEFORE
myPromise.then(function(result){
  console.log("success: " + result)
}).catch(function(result){
  console.log("failed: " + result)
})

//syntax AFTER
myPromise.then(success).catch(failure)
