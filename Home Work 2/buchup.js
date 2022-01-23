




let input_number = document.getElementById("cart_number_input")
let input_name = document.getElementById("cart_name_input")




input_number.oninput = random;


function random() {
    let span = ""
    let count =  input_number.value.length 
        if ( count > 0 && count < 17) {
            span = 'span' + count
            document.getElementById(span).classList.add("rotated")
            document.getElementById(span).innerText = input_number.value.substring(count -1, count)
            
        }
    } 



    document.getElementById("cart_number_input").addEventListener('keydown', logKey);
    function logKey(e) {
        let span = ""
        let count =  input_number.value.length 
        if (e.code === 'Backspace') {
            span = 'span' + count
            document.getElementById(span).innerHTML = "#"
            document.getElementById(span).classList.remove("rotated")
        }
    }
    












    // document.getElementById('credit_cart_number_span').classList.add("rotated")  
 






/*

function random() {
        document.getElementById('span1').innerText = input_number.value.substring(0, 1)
        document.getElementById('span1').classList.add("rotated")
    if (input_number.value[1] !== undefined) {
        document.getElementById('span2').innerText = input_number.value[1]
        document.getElementById('span2').classList.add("rotated")
    } 
    // document.getElementById('credit_cart_number_span').classList.add("rotated")  
 }

    document.getElementById('span3').innerText = input_number.value[2]
    document.getElementById('span4').innerText = input_number.value[3]

input_number.oninput = function () {
       document.getElementById('span1').innerText = input_number.value[0]
       console.log(input_number.value[0])
       console.log(input_number.value)

       // document.getElementById('credit_cart_number_span').classList.add("rotated")
    }



input_number.oninput = function () {
    if (input_number.value.length == 0 ) {
        document.getElementById('credit_cart_number').innerText = '1234 4565 4566 4566';
       
    } else if (input_number.value[1] !== undefined ) {
       document.getElementById('span2').innerText = input_number.value[1]

       // document.getElementById('credit_cart_number_span').classList.add("rotated")
    }
}
document.getElementById("cart_number_input").addEventListener('keydown', logKey);

function logKey(e) {
   document.getElementById('credit_cart_number').textContent += ` ${e.code}`;
}



document.getElementById("cart_number_input").addEventListener('keydown', e => {

    document.getElementById('span1').innerText = ` ${e.key}`;
    document.getElementById('span2').innerText = ` ${e.key}`;
    
    console.log(e)
});


*/


document.getElementById('credit_cart_name').innerText = 'John Doe';

input_name.oninput = function () {
    if (input_name.value.length == 0) {
        document.getElementById('credit_cart_name').innerText = 'John Doe';
       
    } else {
        document.getElementById('credit_cart_name').innerText = input_name.value.toUpperCase();
       
    }
};

 

document.getElementById("expiration_mm_set").oninput = () => {
    document.querySelector(".expiration_mm_show").innerText = document.getElementById("expiration_mm_set").value;
}

document.getElementById("expiration_yy_set").oninput = () => {
    document.querySelector(".expiration_yy_show").innerText = document.getElementById("expiration_yy_set").value;
}



document.getElementById("cvv_code_input").oninput = () => {
    document.querySelector(".cvv_box").innerText = document.getElementById("cvv_code_input").value;
}



// code for Rotate



document.getElementById("cvv_code_input").addEventListener("mouseenter", () => {
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(-180deg)"
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)"

})

document.getElementById("cvv_code_input").addEventListener("mouseleave", () => {
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)"
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)"

})


document.getElementById("cvv_code_input").addEventListener("focusin", () => {
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(-180deg)"
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)"

})

document.getElementById("cvv_code_input").addEventListener("focusout", () => {
    document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)"
    document.querySelector(".back").style.transform = "perspective(1000px) rotateY(180deg)"

})







// Code For Border


document.getElementById("expiration_mm_set").addEventListener('focus', function () {
    document.querySelector(".expiration_box").classList.add("border")
    document.querySelector(".cart_number_box").classList.remove("border")
    document.querySelector(".cart_holder_box").classList.remove("border")
});


document.getElementById("cart_name_input").addEventListener('focus', function () {
    document.querySelector(".cart_number_box").classList.remove("border")
    document.querySelector(".cart_holder_box").classList.add("border")
    document.querySelector(".expiration_box").classList.remove("border")
})

document.getElementById("cart_number_input").addEventListener('focus', function () {
    document.querySelector(".cart_number_box").classList.add("border")
    document.querySelector(".cart_holder_box").classList.remove("border")
    document.querySelector(".expiration_box").classList.remove("border")
})



document.getElementById("expiration_mm_set").addEventListener("click", () => {
    document.querySelector(".expiration_box").classList.add("border")
    document.querySelector(".cart_number_box").classList.remove("border")
    document.querySelector(".cart_holder_box").classList.remove("border")
})

document.getElementById("cart_name_input").addEventListener("click", () => {
    document.querySelector(".cart_holder_box").classList.add("border")
    document.querySelector(".cart_number_box").classList.remove("border")
    document.querySelector(".expiration_box").classList.remove("border")
})

document.getElementById("cart_number_input").addEventListener("click", () => {
    document.querySelector(".cart_number_box").classList.add("border")
    document.querySelector(".cart_holder_box").classList.remove("border")
    document.querySelector(".expiration_box").classList.remove("border")
})

