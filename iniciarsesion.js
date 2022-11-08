const maincontainer = document.querySelector(".section-main-container");
const textcorreo = document.querySelector("#text_correo");
let passwordcontainer = document.querySelector(".log-in-container_password");
let emailcontainer = document.querySelector(".log-in-container_email");
let inputemail = document.querySelector("#input_email");
let inputpassword = document.querySelector("#input_password");
let arrowback = document.querySelector(".arrow-back_container");
let siguiente = document.querySelector("#button-siguiente");

arrowback.addEventListener("click", showemailcontainer);
siguiente.addEventListener("click", MostrarCampoCorreo);
siguiente.addEventListener("click", showpasswordcontainer);
inputemail.addEventListener("keyup", quitarerror);
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        showpasswordcontainer();
        MostrarCampoCorreo();
    }
});
function quitarerror(){
    inputemail.classList.remove("incorrecto");
    document.querySelector(".text-error").classList.add("inactive");
}

function showpasswordcontainer(){
    if (inputemail.value.length > 0) {
        maincontainer.style.transform = "translateX(-55%)"
        passwordcontainer.classList.remove("ocultar");
        emailcontainer.classList.add("ocultar");
    }else{
        inputemail.classList.add("incorrecto");
        document.querySelector(".text-error").classList.remove("inactive");
    }
}

function showemailcontainer(){
    maincontainer.style.transform = "translateX(0%)"
    passwordcontainer.classList.add("ocultar");
    emailcontainer.classList.remove("ocultar");
}

function MostrarCampoCorreo(){
    textcorreo.innerText = (inputemail.value);//muestra el correo ingresado en el contenedor de la contraseña
}
