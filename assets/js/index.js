// Animales
class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  getNombre() {
    return this._nombre;
  }
  getEdad() {
    return this._edad;
  }
  getImg() {
    return this._img;
  }
  setComentarios(comentarioNuevo) {
    return (this._comentario = comentarioNuevo);
  }
  getSonido() {
    return this._sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  rugir() {}
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  aullar() {}
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  gruñir() {}
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  sisear() {}
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  chillar() {}
}

// Formulario
const animal = document.getElementById("animal");
const edadAnimal = document.getElementById("edad");
const btnReg = document.getElementById("btnRegistrar");
