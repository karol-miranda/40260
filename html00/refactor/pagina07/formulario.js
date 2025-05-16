console.log("inicio");

/* function mostrar(){
    let nombre = document.getElementById("username");
    let pass = document.getElementById("password");
    console.log(nombre.value);
    console.log(pass.value);
    alert("nombre: "+ nombre + " contraseña: "+ pass);
} */

export const mostrar = () => {
    console.log("Los parametros: ")
    let nombre = document.getElementById("username");
    let pass = document.getElementById("password");
    console.log(nombre.value);
    console.log(pass.value);

    let formulario = document.getElementsByTagName("form");
    console.log(formulario)
    username.setAttribute("name", "q")
    password.setAttribute("name", "password")
    formulario[0].setAttribute("action", "https://www.google.com/search")
    formulario[0].submit()
}