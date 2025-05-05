console.log("Inicio")

const boton = document.getElementById("enviar")
boton.addEventListener("click",
    () => {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password =document.getElementById("password")
        console.log(password.value)
        console.log(user.value)
    }
)