
//C String Notes: Finger Pattern 1

let firstCOneInput=document.getElementById("first-finger-c-one")
let secondCOneInput=document.getElementById("second-finger-c-one")
let thirdCOneInput=document.getElementById("third-finger-c-one")
let fourthCOneInput=document.getElementById("fourth-finger-c-one")

let firstCOneSubmit=document.getElementById("first-finger-c-one-submit")
let secondCOneSubmit=document.getElementById("second-finger-c-one-submit")
let thirdCOneSubmit=document.getElementById("third-finger-c-one-submit")
let fourthCOneSubmit=document.getElementById("fourth-finger-c-one-submit")

firstCOneSubmit.addEventListener("click", function(){
    let firstPitch=firstCOneInput.value

    if (firstPitch === "D" || firstPitch === "d"){
       firstCOneInput.style.backgroundColor="#00FF00"
    }else{
       firstCOneInput.style.backgroundColor="#FF0000"
    }

})

secondCOneSubmit.addEventListener("click", function(){
    let secondPitch=secondCOneInput.value

    if (secondPitch === "Eb" || secondPitch === "eb" || secondPitch === "E b" || secondPitch === "e b"){
       secondCOneInput.style.backgroundColor="#00FF00"
    }else{
       secondCOneInput.style.backgroundColor="#FF0000"
    }

})

thirdCOneSubmit.addEventListener("click", function(){
    let thirdPitch=thirdCOneInput.value

    if (thirdPitch === "F" || thirdPitch === "f"){
       thirdCOneInput.style.backgroundColor="#00FF00"
    }else{
       thirdCOneInput.style.backgroundColor="#FF0000"
    }

})

fourthCOneSubmit.addEventListener("click", function(){
    let fourthPitch=fourthCOneInput.value

    if (fourthPitch === "G" || fourthPitch === "g"){
       fourthCOneInput.style.backgroundColor="#00FF00"
    }else{
       fourthCOneInput.style.backgroundColor="#FF0000"
    }

})

//G String Notes Finger Pattern 1

document.getElementById("first-finger-g-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("first-finger-g-one").value

   if (pitch === "A" || pitch === "a"){
      document.getElementById("first-finger-g-one").style.backgroundColor="#00FF00"}
      else{
         document.getElementById("first-finger-g-one").style.backgroundColor="#FF0000"}
      })

document.getElementById("second-finger-g-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("second-finger-g-one").value
      
   if (pitch === "Bb" || pitch === "bb" || pitch === "B b" || pitch === "b b"){
       document.getElementById("second-finger-g-one").style.backgroundColor="#00FF00"}
         else{document.getElementById("second-finger-g-one").style.backgroundColor="#FF0000"}
            })

document.getElementById("third-finger-g-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("third-finger-g-one").value
   
   if (pitch === "C" || pitch === "c"){
   document.getElementById("third-finger-g-one").style.backgroundColor="#00FF00"}
  else{document.getElementById("third-finger-g-one").style.backgroundColor="#FF0000"}
   })
   
document.getElementById("fourth-finger-g-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("fourth-finger-g-one").value
      
   if (pitch === "D" || pitch === "d"){
   document.getElementById("fourth-finger-g-one").style.backgroundColor="#00FF00"}
   else{document.getElementById("fourth-finger-g-one").style.backgroundColor="#FF0000"}
   })           

//D String Notes Finger Pattern 1

document.getElementById("first-finger-d-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("first-finger-d-one").value

   if (pitch === "E" || pitch === "e"){
      document.getElementById("first-finger-d-one").style.backgroundColor="#00FF00"}
      else{
         document.getElementById("first-finger-d-one").style.backgroundColor="#FF0000"}
      })

document.getElementById("second-finger-d-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("second-finger-d-one").value
      
   if (pitch === "F" || pitch === "f"){
       document.getElementById("second-finger-d-one").style.backgroundColor="#00FF00"}
         else{document.getElementById("second-finger-d-one").style.backgroundColor="#FF0000"}
            })

document.getElementById("third-finger-d-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("third-finger-d-one").value
   
   if (pitch === "G" || pitch === "g"){
   document.getElementById("third-finger-d-one").style.backgroundColor="#00FF00"}
  else{document.getElementById("third-finger-d-one").style.backgroundColor="#FF0000"}
   })
   
document.getElementById("fourth-finger-d-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("fourth-finger-d-one").value
      
   if (pitch === "A" || pitch === "a"){
   document.getElementById("fourth-finger-d-one").style.backgroundColor="#00FF00"}
   else{document.getElementById("fourth-finger-d-one").style.backgroundColor="#FF0000"}
   }) 

//A String Notes Finger Pattern 1

document.getElementById("first-finger-a-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("first-finger-a-one").value

   if (pitch === "B" || pitch === "b"){
      document.getElementById("first-finger-a-one").style.backgroundColor="#00FF00"}
      else{
         document.getElementById("first-finger-a-one").style.backgroundColor="#FF0000"}
      })

document.getElementById("second-finger-a-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("second-finger-a-one").value
      
   if (pitch === "C" || pitch === "c"){
       document.getElementById("second-finger-a-one").style.backgroundColor="#00FF00"}
         else{document.getElementById("second-finger-a-one").style.backgroundColor="#FF0000"}
            })

document.getElementById("third-finger-a-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("third-finger-a-one").value
   
   if (pitch === "D" || pitch === "d"){
   document.getElementById("third-finger-a-one").style.backgroundColor="#00FF00"}
  else{document.getElementById("third-finger-a-one").style.backgroundColor="#FF0000"}
   })
   
document.getElementById("fourth-finger-a-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("fourth-finger-a-one").value
      
   if (pitch === "E" || pitch === "e"){
   document.getElementById("fourth-finger-a-one").style.backgroundColor="#00FF00"}
   else{document.getElementById("fourth-finger-a-one").style.backgroundColor="#FF0000"}
   })

   //E String Notes Finger Pattern 1

document.getElementById("first-finger-e-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("first-finger-e-one").value

   if (pitch === "F#" || pitch === "F #" || pitch === "f#" || pitch === "f #"){
      document.getElementById("first-finger-e-one").style.backgroundColor="#00FF00"}
      else{
         document.getElementById("first-finger-e-one").style.backgroundColor="#FF0000"}
      })

document.getElementById("second-finger-e-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("second-finger-e-one").value
      
   if (pitch === "G" || pitch === "g"){
       document.getElementById("second-finger-e-one").style.backgroundColor="#00FF00"}
         else{document.getElementById("second-finger-e-one").style.backgroundColor="#FF0000"}
            })

document.getElementById("third-finger-e-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("third-finger-e-one").value
   
   if (pitch === "A" || pitch === "a"){
   document.getElementById("third-finger-e-one").style.backgroundColor="#00FF00"}
  else{document.getElementById("third-finger-e-one").style.backgroundColor="#FF0000"}
   })
   
document.getElementById("fourth-finger-e-one-submit").addEventListener("click", function(){
   let pitch = document.getElementById("fourth-finger-e-one").value
      
   if (pitch === "B" || pitch === "b"){
   document.getElementById("fourth-finger-e-one").style.backgroundColor="#00FF00"}
   else{document.getElementById("fourth-finger-e-one").style.backgroundColor="#FF0000"}
   })
   
//Reset Button

document.getElementById("reset-btn").addEventListener("click", function() {
   const inputs = document.querySelectorAll("input")
   for(let i=0; i < inputs.length; i++){
   if (inputs[i].type == "text"){
      inputs[i].value = ""
      inputs[i].style.removeProperty('background-color')
   }
   }
})