import Elemento from "./Elemento.js";
//clase Boton, sirve para crear botones
export default class Boton extends Elemento{
    constructor(padre, clase, elemento, type, nombre, id=``){
        super(padre, clase, elemento, id)
        this.type=type
        this.nombre=nombre
    }
    create(){
        const boton = this.elemento
        this.padre.appendChild(boton);
        boton.classList.add(`${this.clase}`)
        boton.type=this.type
        boton.innerText=this.nombre
        boton.id=this.id
    }
}