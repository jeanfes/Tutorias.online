let Contraseña = document.querySelector("#contraseña");
let RepetirContraseña = document.querySelector("#repetircontraseña");
let Mostrarcontraseña = document.querySelector("#mostrar1");
let MostrarRepetirContraseña = document.querySelector("#mostrar2");

Mostrarcontraseña.addEventListener("mousedown", ShowPassword)
Mostrarcontraseña.addEventListener("mouseup", HidePassword)

MostrarRepetirContraseña.addEventListener("mousedown", ShowRPassword)
MostrarRepetirContraseña.addEventListener("mouseup", HideRPassword)

Mostrarcontraseña.addEventListener("touchstart", ShowPassword)
MostrarRepetirContraseña.addEventListener("touchstart", ShowRPassword)

function ShowPassword(){
   Contraseña.type = "text";
}
function HidePassword(){
    Contraseña.type = "password";
}
function ShowRPassword(){
    RepetirContraseña.type = "text";
 }
 function HideRPassword(){
     RepetirContraseña.type = "password";
 }

const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("form input");

 const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,14}$/, // 8 a 14 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    edad: /^[0-9]{2,3}$/
}

const campos = {
    input_name: false,
    input_lastname: false,
    input_email: false,
    contraseña: false,
    edad:false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validarcampo(expresiones.nombre,e.target,"input_name");
        break;
        case "apellido":
            validarcampo(expresiones.apellido,e.target,"input_lastname");
        break;
        case "correo":
            validarcampo(expresiones.correo,e.target,"input_email");
        break;
        case "contraseña":
            validarcampo(expresiones.password,e.target,"contraseña");
            validarcontraseña();
        break;
        case "repetircontraseña":
            validarcontraseña();
        break;
        case "edad":
            validarcampoedad(expresiones.edad,e.target,"edad");
        break;
    }
}
const validarcampoedad = (expresion,input,campo) =>{
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove("validaredad");
        campos[campo] = true;
    }else{
        document.getElementById(campo).classList.add("validaredad");
        campos[campo] = false;
    }
}

const validarcampo = (expresion,input,campo)=>{
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove("incorrecto");
        campos[campo] = true;
    }else{
        document.getElementById(campo).classList.add("incorrecto");
        campos[campo] = false;
    }
}

const validarcontraseña = () =>{
    const inputPassword1 = document.getElementById("contraseña");
    const inputPassword2 = document.getElementById("repetircontraseña");
    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById("repetircontraseña").classList.add("incorrecto");
        campos["contraseña"] = false;
    }else{
        document.getElementById("repetircontraseña").classList.remove("incorrecto");
        campos["contraseña"] = true;
    }
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();//Evita que el formulario se actualice al darle submit.
    let showerror = document.querySelector("#dialog_error");
    if (campos.input_name && campos.input_lastname && campos.input_email && campos.contraseña && campos.edad) {
        formulario.reset();//Limpia todos los campos del formulario.
        window.location.href = "./inciarsesion.html";//Si el usuario es registrado se direcciona a la pagina de inicio de sesion.
    }else{
        showerror.classList.remove("active");
    }
});