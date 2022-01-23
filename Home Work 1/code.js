
//  For chekmarks next to form inputs start //

let validate = document.getElementById("submit")

validate.addEventListener("click", () => {
        let chekmark  = document.querySelectorAll(".valid") 
        chekmark.forEach(element => {
            let my_chekmark =  document.createElement("span"); 
        element.appendChild(my_chekmark)
     });
})

//  For chekmarks next to form inputs end //



// code for Show my image  after selection  start  // 

const my_image = document.querySelector("#my_image")
let uploaded_image = ""
my_image.addEventListener("change", function() {
    show_img.classList.add("display_block")
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#show_img_div").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0])
});


let show_img = document.getElementById("show_my_img_btn")
let set_img = document.getElementById("show_img_div")
let my_opacity = document.getElementById("opacity")


show_img.addEventListener("click", () => {
    set_img.classList.add("show_img_div_active")
    my_opacity.classList.add("opacity_active")
})

let close_my_img = document.getElementById("close_img_div_btn")



close_my_img.addEventListener("click", () => {
    set_img.classList.remove("show_img_div_active")
    my_opacity.classList.remove("opacity_active")
})

// code for Show my image  after selection  End  // 






// Code For Show From Info Validate //

let inputs = document.getElementById("my_form").elements;


validate.addEventListener("click", () => {
        let input_test = document.getElementById("my_form").checkValidity();
        if ( input_test ) {
            let my_opacity = document.getElementById("opacity")
            let my_name = inputs["name"].value
            let my_email = inputs["email"].value
            let my_birthday = inputs["birthday"].value
            let my_phone_number = inputs["phone_number"].value
            let my_gender = inputs["gender"].value
            let my_address = inputs["address"].value
            let my_city = inputs["city"].value
            let my_state = inputs["state"].value
            let my_country = inputs["country"].value
        
            let myhtml = `
            <div id="my_main_modal">
                <div class="container">
                    <div  class="my_photo_of_modal"><img src="${uploaded_image}"  alt="My image"></div>
                    <div> 
                        <ul class="modal_info_list">
                            <li>Name: ${my_name} </li>
                            <li>Email: ${my_email} </li>
                            <li>Phone Number: ${my_phone_number}</li>
                            <li>Birthday: ${my_birthday}</li>
                            <li>Gender: ${my_gender}</li>
                            <li>Address: ${my_address} </li>
                            <li>City: ${my_city} </li>
                            <li>State: ${my_state} </li>
                            <li>Country: ${my_country} </li>
                        </ul>
                    </div>
                </div>
                <div> <button id="reset_page"   class="btn">Send My info</button> </div>
            </div>
            `
            document.getElementById("main").innerHTML = myhtml

            let reset = document.getElementById("reset_page")

            reset.addEventListener("click", () =>{
                window.open("index.html");
            })
        } else {
            console.log("1")
        }
    })

  






