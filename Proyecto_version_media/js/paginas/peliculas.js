import {section_principal, section,main, crear_titulo  } from "./formulario_1.js"
import {element_h3} from "./inicio.js"
import {lista_peliculas} from "../base_peliculas/datos_peliculas.js"
import {Img, Elemento, Boton } from "../clases/data_class.js"
import {añadir_pelicula,ir_categoria, buscar, favorito, ir_inicio, menu, salir } from "../funciones/data_funciones.js"
import {header_principal, buscador, menu_desplegable, footer, icono, element_p} from "./extensiones.js"
//funcion para crear las distintas paginas de las peliculas
export function peliculas(peli, usuario){
    const body = document.querySelector(`body`)
    section_principal(body, `container_principal`)
    const container_principal = document.querySelector(`.container_principal`)
    //se crea el header
    header_principal(container_principal)
    //container para buscar peliculas
    buscador(container_principal)
    //el menu desplegable
    menu_desplegable(container_principal)
    //el main
    main_peliculas(container_principal, peli, usuario)
    // el footer
    footer(container_principal)
    //activacion de todas las funcones necesarias
    ir_inicio(usuario)
    buscar(usuario)
    ir_categoria(usuario)
    favorito(usuario)
    salir()
    menu()
    
}
function main_peliculas(padre, peli, usuario){
    main(padre, `main`)
    const contenedor_reproductor= new Elemento(document.querySelector(`.main`), `container_reproductor_peliculas`, `section`, "Ver_Pelicula" )
    contenedor_reproductor.create_hijo()
    const container=document.querySelector(`.container_reproductor_peliculas`)
    lista_peliculas.Peliculas.forEach(array=>{
        array.forEach(pelicula=>{
            if(pelicula.id===peli){
                crear_pelicula(container, pelicula.nombre, pelicula.imagen, pelicula.descripcion, pelicula.fecha, pelicula.duracion, pelicula.director, pelicula.video, pelicula.id, usuario)
            }
        })
    })
    añadir_pelicula(usuario,`container_reproductor_peliculas` )
}
function crear_pelicula(padre, nombre, src, descripcion, fecha, duracion, director, trailer, id, usuario){
    crear_titulo(padre, "titulo_reproductor_peliculas", nombre)
    section(padre,"container_pelicula")
    const container_pelicula=document.querySelector(`.container_pelicula`)
    const portada=new Img(container_pelicula, "portada_pelicula", `img`, src, `portada`)
    portada.create()
    section(container_pelicula, `section`)
    element_h3(container_pelicula.children[1], "subtitulos_pelicula", `Descripción:`)
    element_p(container_pelicula.children[1], "texto_pelicula", descripcion)
    element_h3(container_pelicula.children[1], "subtitulos_pelicula", `Fecha:`)
    element_p(container_pelicula.children[1], "texto_pelicula", fecha)
    element_h3(container_pelicula.children[1], "subtitulos_pelicula", `Duración:`)
    element_p(container_pelicula.children[1], "texto_pelicula", duracion)
    element_h3(container_pelicula.children[1], "subtitulos_pelicula", `Director:`)
    element_p(container_pelicula.children[1], "texto_pelicula", director)
    const boton_pelicula=new Boton(container_pelicula.children[1], `icono_favorito`, `button`, `button`, ``, id)
    boton_pelicula.create()
    const lista=JSON.parse(localStorage.getItem(`${usuario}`))
    if(lista.Peliculas_favoritas.some(lista => lista == id)){
        document.querySelector(`.container_reproductor_peliculas #${id}`).classList.add(`activado`)
    }
    icono(document.querySelector(`.container_pelicula .icono_favorito`), "favorito_desactivado", "assets/iconos/estrella_dessactivada.svg")
    icono(document.querySelector(`.container_pelicula .icono_favorito`), "favorito_activado", "assets/iconos/estrella_activado.svg")
    section(padre, "container_video")
    const container_video=document.querySelector(`.container_video`)
    section(container_video, `reproductor_video`)
    const video=new Img(container_video.children[0], `video`, `video`, trailer, `trailer`)
    video.create_video()
}