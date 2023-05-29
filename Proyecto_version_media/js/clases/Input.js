import Elemento from "./Elemento.js";
//clase input, sirve para crear Inputs
export default class Input extends Elemento{
    constructor(padre, clase, elemento, name, id, type, placeholder ){
        super(padre, clase, elemento, id)
        this.name=name
        this.type=type
        this.placeholder=placeholder
    }
    create(){
        const input = this.elemento
        this.padre.appendChild(input);
        input.classList.add(`${this.clase}`)
        input.name=this.name
        input.type=this.type
        input.id=this.id
        input.placeholder=this.placeholder
    }

}