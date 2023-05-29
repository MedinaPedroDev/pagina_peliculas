import { eliminar } from "../paginas/formulario_1.js"
import { main_favorito } from "../paginas/favoritos.js"
// Funcion encargada de eliminar las peliculas de la seccion de favoritos cando el usuario se encuentra en esa seccion
export function quitar_pelicula(usuario){
    const boton = document.querySelectorAll(`.icono_favorito`)
    boton.forEach(boton=>{
        boton.addEventListener(`click`,()=>{
            const container=document.querySelector(".main")
            eliminar(container, "container_lista")
            const lista=JSON.parse(localStorage.getItem(`${usuario}`))
            if(lista.Peliculas_favoritas.some(lista => lista == boton.id)){
                const posicion=lista.Peliculas_favoritas.indexOf(boton.id)
                lista.Peliculas_favoritas.splice(posicion, 1)
                localStorage.setItem(`${usuario}`, JSON.stringify(lista))
            }
            main_favorito(usuario)
        })
    })
}