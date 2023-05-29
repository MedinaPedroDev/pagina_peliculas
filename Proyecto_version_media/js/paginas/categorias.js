import {section_principal, section,main, crear_titulo  } from "./formulario_1.js"
import {lista_peliculas} from "../base_peliculas/datos_peliculas.js"
import {Elemento } from "../clases/data_class.js"
import {paginas, plantilla_peliculas} from "./inicio.js"
import {añadir_pelicula,ir_categoria, buscar, favorito, ir_inicio, menu, paginar_categorias, salir, ver_pelicula} from "../funciones/data_funciones.js"
import {header_principal, buscador, menu_desplegable, footer, icono} from "./extensiones.js"
//funcion para crear la seccion de categorias
function categorias(categoria, nombre, usuario){
    const body = document.querySelector(`body`)
    section_principal(body, `container_principal`)
    const container_principal = document.querySelector(`.container_principal`)
    //el header
    header_principal(container_principal)
    //el buscador
    buscador(container_principal)
    //el menu desplegable
    menu_desplegable(container_principal)
    //el main
    main_categorias(container_principal, categoria, nombre, usuario)
    //el footer
    footer(container_principal)
    //las funciones necesarias
    ver_pelicula(usuario)
    ir_categoria(usuario)
    ir_inicio(usuario)
    buscar(usuario)
    favorito(usuario)
    añadir_pelicula(usuario, `pelicula_estreno`)
    salir()
    menu()

    function main_categorias(padre, categoria, nombre, usuario){
        main(padre, `main`)
        const container_categorias=new Elemento(document.querySelector(`main`), `container_categorias`,  `section`, `Categorias`)
        container_categorias.create_hijo()
        crear_titulo(document.querySelector(`.container_categorias`), "title_genero_peliculas", nombre)
        icono(document.querySelector(".title_genero_peliculas"), "icono_genero_pelicula", `assets/iconos/genero.svg`)
        section(document.querySelector(`.container_categorias`), "container_pelicula_categoria")
        crear_categorias(categoria, 0, usuario)
        section(document.querySelector(`.container_categorias`), "container_paginacion")
        paginas(lista_peliculas.Generos[categoria].length, `#Categorias`)
        paginar_categorias(categoria, usuario)
    }
}
function crear_categorias(categoria, pagina=0, usuario){
    const contenedor_peliculas=document.querySelector(`.container_pelicula_categoria`)
    lista_peliculas.Generos[categoria][pagina].forEach((pelicula)=>{
        plantilla_peliculas(contenedor_peliculas, `container_pelicula_categoria`, pelicula.id, pelicula.año, pelicula.imagen, pelicula.nombre, usuario)
    })
}
export {categorias, crear_categorias}