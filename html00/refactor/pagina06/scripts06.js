import {Papuimagen} from "./imagen06.js";

let x = document.getElementById('app').innerHTML = Papuimagen(666, "tu papa w") + Papuimagen(300, "tu mama w")

function saludar() {
alert("x");
}

const lista = app.querySelectorAll("img")
      console.log(lista);
      for (let i = 0; i < lista.length; i++) {
        //lista[i].addEventListener("click", saludar);
        lista[i].addEventListener("click", () =>{
            lista[i].classList.toggle("redonda")
        });
      }

export {x, saludar, lista};