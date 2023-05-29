import {data} from "./data.js";
(()=>{
    const peliculas=document.querySelectorAll(`.peli`)
    const peli=document.querySelector(`.movie`)
    const caraptula=document.querySelector(`.caraptula`)
    const titulo=document.querySelector(`.titulo`)
    const descripcion=document.querySelector(`.descripcion`)
    const close=document.querySelector(`.close`)
    const video=document.querySelector(`.video`)

    peliculas.forEach(movie=>{
        movie.addEventListener(`click`,()=>{
            datos_pelicula(movie.id)
            colocar_pelicula()
        })
    })

    function datos_pelicula(id){
        data.forEach(pelicula=>{
            if(pelicula.id===id){
                caraptula.src=pelicula.imagen
                titulo.innerText=pelicula.nombre
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