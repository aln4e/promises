function reverseText(text){
  if(text){
    var splitText = text.split("")
    var reverseArray = splitText.reverse()
    var reverse = reverseArray.join("")
  }

  return new Promise(function(resolve, reject){
    if(reverse){
      //the resolve passes the content that we wish to push through. If we reject, it runs to catch
      resolve(reverse)
    }
    else{
      reject("No text provided")
    }
  })
}

function capitalizeText(reverse){
  var capitalized = reverse.toUpperCase()

  return new Promise(function(resolve, reject){
    if(capitalized){
      //the resolve passes the content that we wish to push through. If we reject, it runs to catch
      resolve(capitalized)
      console.log(capitalized)
    }else{
      reject("No text provided")
    }
  })
}

//chain them together
reverseText("Antonio").then(function(success){
  return capitalizeText(success)
}).then(function(success2){
  console.log(success2)
}).catch(function(error){
  console.log(error)
})
