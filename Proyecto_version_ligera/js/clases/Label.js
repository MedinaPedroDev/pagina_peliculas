import Elemento from "./Elemento.js";
//clase Label, sirve para crear label
export default class Label extends Elemento{
    constructor(padre,clase, elemento, key, id ){
        super(padre, clase, elemento)
        this.for=key
        this.id=id
    }
    create(){
        const label = this.elemento
        this.padre.appendChild(label);
        label.classList.add(`${this.clase}`)
        label.setAttribute(`for`,`${this.for}`)
        label.id=this.id
        
        
    }

}