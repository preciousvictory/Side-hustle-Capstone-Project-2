const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// const password= document.getElementById("password").setAttribute("type", "password" );
// const eye= document.getElementById("eye").style.color="#f0008e";

// function toggle(){
//     if (password.type ==='password') {
//         password.setAttribute("type", "text" );
//         eye.classList.add("hide")
//     } else {
//         password.setAttribute("type", "password" );
//         eye.classList.remove("hide")
//     }
// }

var state= false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password" );
        document.getElementById("eye1").style.color="#f0008e";
        state=false
    }else{
        document.getElementById("password").setAttribute("type", "text" );
        document.getElementById("eye1").style.color="#f0008e";
        state=true
    }
}

var state= false;
function toggle(){
    if(state){
        document.getElementById("password").setAttribute("type", "password" );
        document.getElementById("eye").style.color="#f0008e";
        state=false
    }else{
        document.getElementById("password").setAttribute("type", "text" );
        document.getElementById("eye").style.color="#f0008e";
        state=true
    }
}

function validForm(){
    //alert("alert")
    var name = document.custom_form.name;
    var email= document.custom_form.email;
    var phone= document.custom_form.name;
    var password= document.custom_form.password;
    var password_= document.custom_form.password_;
    var gender= document.custom_form.gender;

    if (name.value ==""){
        name.nextElementSibling.style.display ="block"
        name.style.border ="1px solid #f00";
        return false
    }else{
        name.nextElementSibling.style.display ="none"
        name.style.border ="1px solid transparent";
    }

    if (email.value ==""){
        email.nextElementSibling.style.display ="block"
        email.style.border ="1px solid #f00";
        return false
    }else{
        email.nextElementSibling.style.display ="none"
        email.style.border ="1px solid transparent";
    }

    if (phone.value ==""){
        phone.nextElementSibling.style.display ="block"
        phone.style.border ="1px solid #f00";
        return false
    }else{
        phone.nextElementSibling.style.display ="none"
        phone.style.border ="1px solid transparent";
    }

    if (password.value ==""){
        password.nextElementSibling.style.display ="block"
        password.style.border ="1px solid #f00";
        return false
    }else{
        password.nextElementSibling.style.display ="none"
        password.style.border ="1px solid transparent";
    }

    if (!password_.value.match(password) || password_.value ==""){
        password_.nextElementSibling.style.display ="block"
        password_.style.border ="1px solid #f00";
        return false
    }else{
        password_.nextElementSibling.style.display ="none"
        password_.style.border ="1px solid transparent";
    }

}

