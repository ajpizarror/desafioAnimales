import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const btnReg = document.getElementById("btnRegistrar");
const reproductor = document.getElementById("player");

let formulario = {};

function onChangeInput(event) {
  formulario = { ...formulario, [event.target.id]: event.target.value };
}

animal.addEventListener("change", (event) => {
  onChangeInput(event);
  console.log(event.target.value);
});
edad.addEventListener("change", (event) => {
  onChangeInput(event);
  console.log(event.target.value);
});
comentarios.addEventListener("change", (event) => {
  onChangeInput(event);
  console.log(event.target.value);
});

btnReg.addEventListener("click", (event) => {
  event.preventDefault();
  let instanciaNueva = "";
  switch (formulario.animal) {
    case 'Leon':
      instanciaNueva = new Leon(formulario.animal, formulario.edad, "imagen", formulario.comentarios, "sonido");
      break;
    case 'Lobo':
      instanciaNueva = new Lobo(formulario.animal, formulario.edad, "imagen", formulario.comentarios, "sonido");
      break;
    case 'Oso':
      instanciaNueva = new Oso(formulario.animal, formulario.edad, "imagen", formulario.comentarios, "sonido");
      break;
    case 'Serpiente':
      instanciaNueva = new Serpiente(formulario.animal, formulario.edad, "imagen", formulario.comentarios, "sonido");
      break;
    case 'Aguila':
      instanciaNueva = new Aguila(formulario.animal, formulario.edad, "imagen", formulario.comentarios, "sonido");
      break;
    default:
      console.error('Tipo de animal no reconocido');
      return;
  }
  console.log(instanciaNueva)
});