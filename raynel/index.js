import { data } from "./data-pelis.js";
(()=>{
    const peliculas=document.querySelectorAll(`.pelicula`)
    const peli=document.querySelector(`.peli`)
    const caraptula=document.querySelector(`.caraptula`)
    const titulo=document.querySelector(`.titulo`)
    const duraccion=document.querySelector(`.duraccion`)
    const fecha=document.querySelector(`.fecha`)
    const descripcion=document.querySelector(`.descripcion`)
    const close=document.querySelector(`.close`)
    const video=document.querySelector(`.video`)
    peliculas.forEach(peli=>{
        peli.addEventListener(`click`,()=>{
            datos_pelicula(peli.id)
            colocar_pelicula()
        })
    })

    function datos_pelicula(id){
        data.forEach(pelicula=>{
            if(pelicula.id===id){
                caraptula.src=pelicula.imagen
                titulo.innerText=pelicula.nombre
                duraccion.innerText=pelicula.duracion
                fecha.innerText=pelicula.fecha
                descripcion.innerText=pelicula.descripcion
                video.src=pelicula.video
            }
        })
    }
    function colocar_pelicula(){
        peli.classList.add(`show`)
    }
    close.addEventListener(`click`,()=>{
        peli.classList.remove(`show`)
        video.src=``
    })
})()