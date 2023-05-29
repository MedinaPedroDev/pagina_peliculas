import {element_h3} from "./inicio.js"
import {section_principal, section,main,  } from "./formulario_1.js"
import {Img, Elemento, Boton } from "../clases/data_class.js"
import {lista_peliculas } from "../base_peliculas/datos_peliculas.js"
import {ir_categoria, buscar, ir_inicio, menu, salir, ver_pelicula, quitar_pelicula} from "../funciones/data_funciones.js"
import {header_principal, buscador, menu_desplegable, footer, icono, element_p} from "./extensiones.js"
//funcion para crear la seccion de favoritos
export function favoritos(usuario){
    const body = document.querySelector(`body`)
    section_principal(body, `container_principal`)
    const container_principal = document.querySelector(`.container_principal`)
    //el header
    header_principal(container_principal)
    //el container del buscador
    buscador(container_principal)
    //el menu desplegable
    menu_desplegable(container_principal)
    //el main
    main_favorito(container_principal, usuario)
    //el footer
    footer(container_principal)
    //las funciones necesarias
    ir_inicio(usuario)
    buscar(usuario)
    ir_categoria(usuario)
    ver_pelicula(usuario)
    salir()
    menu()
    
}
export function main_favorito(container_principal, usuario){
    main(container_principal, `main`)
    section(document.querySelector(`.main`), "container_lista")
    section(document.querySelector(".container_lista"), "lista_usuario")
    //cremaos la seccion del usuario
    datos_usuario(usuario)
    section(document.querySelector(".container_lista"), "lista_peliculas")
    //creamos la lista de peliculas favoritas del usuario
    peliculas_lista(usuario)
    quitar_pelicula(usuario)
}
function datos_usuario(usuario){
    const imagen=new Img(document.querySelector(".lista_usuario"), "icono_usuario_lista", `img`, "assets/iconos/perfil.svg", `usuario`)
    imagen.create()
    const nombre_usuario=JSON.parse(localStorage.getItem(`${usuario}`))
    element_p(document.querySelector(".lista_usuario"), "nombre_usuario", nombre_usuario.Usuario)
    element_p(document.querySelector(".lista_usuario"), "titulo_peliculas_favoritas", `Peliculas Guardadas:`)
    icono(document.querySelector(".titulo_peliculas_favoritas"), `estrella`, `assets/iconos/estrella_activado.svg`)
    element_p(document.querySelector(".lista_usuario"), "cantidad_peliculas_favoritas", nombre_usuario.Peliculas_favoritas.length )
}
function peliculas_lista(usuario){
    const nombre_usuario=JSON.parse(localStorage.getItem(`${usuario}`))
    const peliculas=[]
    lista_peliculas.Peliculas.forEach(array=>{
        array.forEach(pelicula=>{
            peliculas.push(pelicula)
        })
    })
    for(let i=0; i<=nombre_usuario.Peliculas_favoritas.length-1; i++){
        const pelis= peliculas.find(peliculas=> peliculas.id == nombre_usuario.Peliculas_favoritas[i])
        plantilla_lista(pelis.id, i+1, pelis.imagen, pelis.nombre, pelis.duracion, pelis.fecha)
    }
}
//Plantilla especial para las peliculas en la lista
function plantilla_lista(id, numero, src, nombre, duracion, fecha){
    const article=new Elemento(document.querySelector(".lista_peliculas"), `peliculas_lista`, `article`, id)
    article.create_hijo()
    element_p(document.querySelector(`.lista_peliculas #${id}`), "identificador", numero)
    const img_pelicula=new Img(document.querySelector(`.lista_peliculas #${id}`), "img_lista", `img`, src)
    img_pelicula.create()
    section(document.querySelector(`.lista_peliculas #${id}`), "list_informacion")
    element_h3(document.querySelector(` #${id} .list_informacion`), "title_list", nombre)
    element_p(document.querySelector(` #${id} .list_informacion`), "duracion_list", duracion)
    element_p(document.querySelector(` #${id} .list_informacion`), "fecha_list", fecha)
    const boton_pelicula=new Boton(document.querySelector(`.lista_peliculas #${id}`), `icono_favorito`, `button`, `button`, ``, id)
    boton_pelicula.create()
    icono(document.querySelector(`.lista_peliculas #${id} .icono_favorito`), "favorito_activado", "assets/iconos/estrella_activado.svg")
}
