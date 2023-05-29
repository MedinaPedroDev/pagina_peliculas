import Elemento from "./Elemento.js";
//clase Text, sirve para crear todo tipo de texto(h2, p, a)
export default class Text extends Elemento{
    constructor(padre, clase, elemento, texto, id=``, href=``){
        super(padre, clase, elemento)
        this.texto=texto
        this.id=id
        this.href=href
    }
    create(){
        const h2 = this.elemento
        h2.innerText = this.texto;
        this.padre.appendChild(h2);
        h2.classList.add(`${this.clase}`)
        h2.id=this.id
    }
    create_link(){
        const a = this.elemento
        a.innerText = this.texto;
        this.padre.appendChild(a);
        a.classList.add(`${this.clase}`)
        a.id=this.id
        a.setAttribute(`href`,`${this.href}`)
    }
}