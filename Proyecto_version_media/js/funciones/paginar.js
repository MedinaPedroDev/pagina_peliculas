import {eliminar} from "../paginas/formulario_1.js"
import {Elemento} from "../clases/data_class.js"
import {total_peliculas} from "../paginas/inicio.js"
import {crear_categorias} from "../paginas/categorias.js"
import {ver_pelicula} from "./ver_pelicula.js"
import { añadir_pelicula } from "./añadir_pelicula.js"
//funcion encargada de paginar entre las distintas paginas de las peliculas
export function paginar_inicio(usuario){
    const paginas=document.querySelectorAll(".icono_paginacion")
    paginas.forEach((pagina)=>{
        pagina.addEventListener(`click`,()=>{
            const numero_pagina=Number(pagina.innerText)-1
            const contenerdor_padre=document.querySelector(`.container_sub_2_peliculas`)
            eliminar(contenerdor_padre, `container_sub_3_peliculas`)
            const new_contenedor = new Elemento(contenerdor_padre.children[0], `container_sub_3_peliculas`, `section`)
            new_contenedor.create_hermano()
            total_peliculas(numero_pagina, usuario)
            ver_pelicula(usuario)
            añadir_pelicula(usuario, `pelicula_estreno`)
        })
    })
}
//funcion encargada de paginar entre las distintas paginas en la seccion de categoria
export function paginar_categorias(categoria, usuario){
    const paginas=document.querySelectorAll(".icono_paginacion")
    paginas.forEach((pagina)=>{
        pagina.addEventListener(`click`,()=>{
            const numero_pagina=Number(pagina.innerText)-1
            const contenerdor_padre=document.querySelector(`.container_categorias`)
            eliminar(contenerdor_padre, `container_pelicula_categoria`)
            const new_contenedor= new Elemento(contenerdor_padre.children[0], `container_pelicula_categoria`, `section`)
            new_contenedor.create_hermano()
            crear_categorias(categoria, numero_pagina, usuario)
            ver_pelicula(usuario)
            añadir_pelicula(usuario, `pelicula_estreno`)
        })
    })
}