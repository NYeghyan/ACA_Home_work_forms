

let validate = document.getElementById("submit")

validate.addEventListener("click", () => {
    const any_input = document.getElementById("my_form");
    if (!any_input.checkValidity()) {
       let my_chekmark =  document.createElement("span"); 
       let chekmark  = document.querySelectorAll(".valid") 
       chekmark.forEach(element => {
        element.appendChild(my_chekmark)
        console.log("gg")
    });
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } 
})






console.log(inputs["country"].value)
    
for (i = 0; i < inputs.length; i++) {
 console.log(inputs[i].value)
 var inputByName = inputs["country"];
 if (inputs[i].value === "") {
   
    } else {
        open_my_model.classList.add("my_modal_active")
    }
 }

 




 var inputByName = inputs["country"];
 if (inputs[i].value === "") {
     console.log(inputs[i].value)
    } else {
        open_my_model.classList.add("my_modal_active")
    }
 }



 for (i = 0; i < inputs.length; i++) {
    if(inputs[i].value === ""){
        console.log("1")
    } else {
        console.log("ok")
    }
    
}  



let my_name = inputs["name"].value
let my_email = inputs["email"].value
let my_phone_number = inputs["phone_number"].value
checkValidity();
console.log(my_name)



const emailField = document.getElementById('emailField');

validate.addEventListener("click", () => {

    isValidEmail = emailField.checkValidity();
  
    if ( isValidEmail ) {
     console.log("1")
    } else {
        console.log("2")
    }
    })


    const emailField = document.querySelectorAll('input');




    let cssObj = window.getComputedStyle(set_img, )
let show_img_div_backround = cssObj.getPropertyValue("background-image")


show_img.addEventListener("click", () => {
    if (show_img_div_backround !== "") {
        console.log(cssObj)
        set_img.classList.add("show_img_div_active")
    }
    
})


let cssObj = window.getComputedStyle(set_img, )
let show_img_div_backround = cssObj.getPropertyValue("background-image")


show_img.addEventListener("click", () => {
    if (show_img_div_backround !== "") {
        console.log(cssObj)
        set_img.classList.add("show_img_div_active")
    }
    
})




inputs.forEach(element => {
    element.addEventListener("change", () =>{
        console.log(element)
    })

}) 



for (i = 0; i < inputs.length; i++) {
    inputs.addEventListener("change", () =>{
        console.log(inputs)
    
})
} 