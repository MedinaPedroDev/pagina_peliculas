import Elemento from "./Elemento.js";
//clase IMG, sirve para crear imagenes y videos
export default class Img extends Elemento{
    constructor(padre, clase, elemento, src, alt){
        super(padre, clase, elemento)
        this.src=src
        this.alt=alt
    }
    create(){
        const img = this.elemento
        img.src=this.src
        img.alt=this.alt
        this.padre.appendChild(img);
        img.classList.add(`${this.clase}`)
    }
    create_inicio(){
        const img = this.elemento
        img.src=this.src
        img.alt=this.alt
        this.padre.prepend(img);
        img.classList.add(`${this.clase}`)
    }
    create_video(){
        const videos = this.elemento
        videos.src=this.src
        videos.alt=this.alt
        this.padre.appendChild(videos);
        videos.classList.add(`${this.clase}`)
        videos.setAttribute(`controls`, true)
    }
}