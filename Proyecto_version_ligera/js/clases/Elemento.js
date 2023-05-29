//clase Element, sirve para crear contenedores(header, main, section) y se posiscionan en posiciones diferentes
export default class Elemento{
    constructor(padre, clase, elemento, id=`` ){
        this.padre=padre
        this.clase=clase
        this.elemento=document.createElement(`${elemento}`)
        this.id=id
    }
    create_inicio(){
        const element = this.elemento
        this.padre.prepend(element);
        element.classList.add(`${this.clase}`)
    }
    create_hermano(){
        const element = this.elemento
        this.padre.after(element);
        element.classList.add(`${this.clase}`)
    }
    create_hijo(){
        const element = this.elemento
        this.padre.appendChild(element);
        element.classList.add(`${this.clase}`)
        element.id=this.id
    }
    
}