import { lista_peliculas } from "../base_peliculas/datos_peliculas.js"
import { eliminar, section } from "../paginas/formulario_1.js"
import { ver_pelicula } from "./ver_pelicula.js"
import {Elemento, Img } from "../clases/data_class.js"
//funcion encargada de colocar el contendor de busquedad de peliculas y activar la funcion para la busquedad de las mismas
export function buscar(usuario) {
    const barra = document.querySelector(`#serch`)
    const boton = document.querySelector(`.boton_buscar`)
    const container_buscador = document.querySelector(`.buscador`)
    const main = document.querySelector(`.main`)
    const footer = document.querySelector(`.footer`)
    //si se da click en la barra de busqueda quita todo los elementos y agrega el contenedor de busqueda
    barra.addEventListener(`click`, () => {
        if (document.querySelector(`.hero`)) {
            const hero = document.querySelector(`.hero`)
            hero.classList.add(`eliminar`)
        }
        main.classList.add(`eliminar`)
        footer.classList.add(`eliminar`)
        container_buscador.classList.add(`show`)
    })
    //activacion de la funcion para buscar la pelicula al dar click en el boton para buscar o al escribir
    barra.addEventListener('keyup', () => {
        buscar_pelicula(container_buscador, barra, usuario)
    })

    boton.addEventListener(`click`, () => {
        buscar_pelicula(container_buscador, barra, usuario)
    })
    //funcion para quitar el contenedor de busquedad al dar click en el icono close o alrededor de el
    container_buscador.addEventListener(`click`, (e) => {
        if (e.target !== document.querySelector(`.pelicula_estreno`)) {
            if (document.querySelector(`.hero`)) {
                const hero = document.querySelector(`.hero`)
                hero.classList.remove(`eliminar`)
            }
            main.classList.remove(`eliminar`)
            footer.classList.remove(`eliminar`)
            container_buscador.classList.remove(`show`)
        }
    })

}
//funcion para buscar la pelicula que esta en la barra de busquedad
function buscar_pelicula(container_buscador, barra, usuario) {
    const nombre = barra.value.replaceAll(` `, `.`)
    const expresion = new RegExp(`${nombre}`, `i`)
    eliminar(container_buscador, `contenedor_buscador`)
    section(container_buscador, `contenedor_buscador`)
    const contenedor_buscado = document.querySelector(`.contenedor_buscador`)
    lista_peliculas.Peliculas.forEach(array => {
        array.forEach(pelicula => {
            if (expresion.test(pelicula.nombre)) {
                plantilla_buscar(contenedor_buscado, pelicula.id, pelicula.imagen)
                ver_pelicula(usuario)
            }
        })
    })
}
//la plantilla par al aforma de las peliculas
function plantilla_buscar(padre, id, src ){
    const article=new Elemento(padre, `pelicula_estreno`, `article`, id)
    article.create_hijo()
    const pelicula=document.querySelector(`.contenedor_buscador #${id}`)
    section(pelicula, `caraptula`)
    const img_pelicula=new Img(pelicula.children[0], "img_estreno", `img`, src, `imagen_pelicula`)
    img_pelicula.create()
}



