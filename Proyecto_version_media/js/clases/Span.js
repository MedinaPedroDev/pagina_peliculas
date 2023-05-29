import Elemento from "./Elemento.js";
//clase span, sirve para crear spans
export default class Span extends Elemento{
    constructor(padre, clase, elemento, texto){
        super(padre, clase, elemento)
        this.texto=texto
    }
    create_inicio(){
        const span = this.elemento
        span.innerText=this.texto
        this.padre.prepend(span);
        span.classList.add(`${this.clase}`)
    }
}