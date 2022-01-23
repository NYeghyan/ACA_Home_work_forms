




///////////////  Disable copy for inputs  Start   ////////////////

window.onload = () => {
    const myInputNumber = document.getElementById('cart_number_input');
    const myInputName = document.getElementById('cart_name_input');

    myInputNumber.onpaste = e => e.preventDefault();
    myInputName.onpaste = e => e.preventDefault();

}



///////////////  Disable copy for inputs  End  ////////////////



///////////////  Remove All Child Start  ////////////////

function removeAllChid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


///////////////  Remove All Child End  ////////////////





let inputNumber = document.getElementById("cart_number_input")
let inputName = document.getElementById("cart_name_input")




///////////  Code For Numbers only Start ///////////////


function isNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

///////////  Code For Numbers only End ///////////////





///////////////    NUMBER INPUT Start  ////////////////

inputNumber.oninput = insertNumbers;


function insertNumbers(e) {
    let span = ""
    let count = e.target.value.replaceAll(" ", '').length
    if(!e.data){
        return false
    }
    if( count % 4 === 0 && count > 3){
        document.getElementById("cart_number_input").value+=' ';
    } 
    if (count > 0) {
        span = 'span' + count
        document.getElementById(span).classList.remove("rotated1")
        document.getElementById(span).classList.add("rotated")
        document.getElementById(span).innerText = e.data;

    }
}

document.getElementById("cart_number_input").addEventListener('keydown', logKeyForNumber);
function logKeyForNumber(e) {
    let span = ""
    let count = inputNumber.value.replaceAll(" ", '').length
    
    if(count === 16 && e.keyCode !== 8){
        e.preventDefault();
        return false
    }
    if (e.code === 'Backspace' && count > 0 && e.target.value.split('').pop().indexOf(' ') < 0) {
        span = 'span' + count
        document.getElementById(span).classList.add("rotated1")
        document.getElementById(span).innerText = "#"
        document.getElementById(span).classList.remove("rotated")
    }
    if ( e.code === 'Backspace' && e.target.selectionStart == 0 && e.target.selectionEnd == e.target.value.length) {
        let addRemAnimation = document.querySelectorAll(".rotated")
        for (let i = 0; i < addRemAnimation.length; i++) {
            addRemAnimation[i].classList.remove("rotated")
            addRemAnimation[i].classList.remove("rotated1")
            addRemAnimation[i].innerText = "#"
        }
    }
}

///////////////    NUMBER INPUT ENDS ////////////////




///////////////    NAME INPUT  Start ////////////////


inputName.oninput = insertName


function insertName(e) {
    let count = inputName.value.length
    let span_id = count
    let span_for_name = document.createElement("span");
    span_for_name.setAttribute("id", span_id)

    document.getElementById('credit_cart_name').appendChild(span_for_name);
    if (inputName.value.length === 0) {
        removeAllChid(credit_cart_name);
        document.getElementById('jD').innerText = 'John Doe';
    } 
    else {
        document.getElementById('jD').innerText = '';
        span_for_name.classList.add("animation_for_cart_holder")
        document.getElementById(span_id).innerText = inputName.value.substring(count - 1, count).toUpperCase();
    }

}


document.getElementById("cart_name_input").addEventListener('keydown', logKeyforName);
function logKeyforName(e) {
    let count =  inputName.value.length
    let nwe_count = inputName.value.length - 1
    let span_id = count
    last_span_id = nwe_count
    if (e.keyCode === 8 && inputName.value.length > 0) {
        document.getElementById('credit_cart_name').removeChild(document.getElementById(span_id));
    if(document.getElementById(last_span_id)){
        document.getElementById('credit_cart_name').removeChild(document.getElementById(last_span_id));
        }
    }
    if(e.keyCode === 32){
        setTimeout(function () {
            document.getElementById(count + 1).innerHTML += '&nbsp;'
            document.getElementById(count + 1).classList.add('animatioanNone')
            document.getElementById("cart_name_input").innerHTML += " "
        }, delayInMilliseconds);
       

    }
}


///////////////    NAME INPUT  Ends ////////////////




///////////////    Cart Type IMG  Start  ////////////////

document.getElementById("cart_number_input").addEventListener('keyup', cartType);
function cartType() {
    if (inputNumber.value.substring(0, 1) === "3") {
        document.getElementById("cart_type").classList.add("cart_type_animation")
        document.getElementById("cart_type").style.background = "url('img/visa.png') 0% 0% / cover ";
        document.getElementById("back_cart_type").style.background = "url('img/visa.png') 0% 0% / cover ";
    } else
        if (inputNumber.value.substring(0, 1) === "5") {
            document.getElementById("cart_type").classList.add("cart_type_animation")
            document.getElementById("cart_type").style.background = "url('img/master_cart.png') 0% 0% / cover ";
            document.getElementById("back_cart_type").style.background = "url('img/master_cart.png') 0% 0% / cover ";
        }
        else
            if (inputNumber.value.substring(0, 1) === "6") {
                document.getElementById("cart_type").classList.add('cart_type_animation')
                document.getElementById("cart_type").style.background = "url('img/discover.png') 0% 0% / cover ";
                document.getElementById("back_cart_type").style.background = "url('img/discover.png') 0% 0% / cover ";
            } else
                if (inputNumber.value.substring(0, 1) === "") {
                    document.getElementById("cart_type").style.background = "url('img/visa.png') 0% 0% / cover ";
                    document.getElementById("back_cart_type").style.background = "url('img/visa.png') 0% 0% / cover ";
                    document.getElementById("cart_type").classList.remove('cart_type_animation')
                }
}

///////////////    Cart Type IMG  Ends  ////////////////






//  expiration  Inputs


const delayInMilliseconds = 500; 



document.getElementById("expiration_mm_set").oninput = () => {
    document.querySelector(".expiration_mm_show").classList.add("animation_for_expiration")
    document.querySelector(".expiration_mm_show").innerText = document.getElementById("expiration_mm_set").value;
    setTimeout(function () {
        document.querySelector(".expiration_mm_show").classList.remove("animation_for_expiration")
    }, delayInMilliseconds);

}

document.getElementById("expiration_yy_set").oninput = () => {
    document.querySelector(".expiration_yy_show").classList.add("animation_for_expiration")
    document.querySelector(".expiration_yy_show").innerText = document.getElementById("expiration_yy_set").value;
    setTimeout(function () {
        document.querySelector(".expiration_yy_show").classList.remove("animation_for_expiration")
    }, delayInMilliseconds);
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







///////////  Code For Border Start ///////////////

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


///////////  Code For Border End ///////////////










let dummyTxt = '1234567890123456';

let joy = dummyTxt.match(/.{1,4}/g);
console.log(joy.join(' '));