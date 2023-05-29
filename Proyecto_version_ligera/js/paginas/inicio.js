import {section_principal, section,main, crear_titulo} from "./formulario_1.js"
import {Elemento, Img, Text, Boton } from "../clases/data_class.js"
import {lista_peliculas} from "../base_peliculas/datos_peliculas.js"
import {añadir_pelicula, buscar,ir_categoria, favorito, ir_inicio, menu, paginar_inicio, salir, ver_pelicula} from "../funciones/data_funciones.js"
import {header_principal, hero, buscador, menu_desplegable, footer, icono, element_p} from "./extensiones.js"
//funcion para crear la seccion de inicio
function inicio(usuario){
    //Primero eliminamos la clase del body y creamos un contenedor nuevo en este
    const body = document.querySelector(`body`)
    body.classList.remove(`cuerpo_form`)
    section_principal(body, `container_principal`)
    //creamos el header nuevo
    const container_principal = document.querySelector(`.container_principal`)
    header_principal(container_principal)
    //creamos el hero
    hero(container_principal)
    //container para buscar peliculas
    buscador(container_principal)
    //menu desplegable
    menu_desplegable(container_principal)
    //creamos el main
    main_principal(container_principal, usuario)
    //creamos el footer
    footer(container_principal)
    //activamos todas las funciones necesarias
    favorito(usuario)
    paginar_inicio(usuario)
    ver_pelicula(usuario)
    ir_categoria(usuario)
    ir_inicio(usuario)
    buscar(usuario)
    añadir_pelicula(usuario, `pelicula_estreno`)
    salir()
    menu()

    //se crea el main
    function main_principal(container_principal, usuario){
        //creamos el main
        main(container_principal, `main`)
        section(document.querySelector(`.main`), "container_peliculas")
        section(document.querySelector(`.container_peliculas`), "ultimas_peliculas")
        section(document.querySelector(`.container_peliculas`), "vista_peliculas")
        //creamos la seccion de Ultimos Estrenos
        seccion_ultimas_peliculas(usuario)
        //creamos la seccion de las peliculas
        const container_peliculas=new Elemento(document.querySelector(`.vista_peliculas`), `container_sub_2_peliculas`, `section`, `Peliculas`)
        container_peliculas.create_hijo()
        seccion_peliculas(usuario)
        //creamos la seccion de las peliculas mas vistas
        const aside=new Elemento(document.querySelector(`.vista_peliculas`), "las_mas_vistas", `aside`)
        aside.create_hijo()
        seccion_mas_vistas(usuario)
    }
    function seccion_ultimas_peliculas(usuario){
        crear_titulo(document.querySelector(`.ultimas_peliculas`), "title_pelicula", `Últimos Estrenos`)
        icono(document.querySelector(`.ultimas_peliculas .title_pelicula`), "icono_pelicula", `./assets/iconos/extreno.svg`)
        section(document.querySelector(`.ultimas_peliculas`), `container_peliculas_extreno`)
        peliculas_estreno(usuario)
    }
    function peliculas_estreno(usuario){
        const contenedor_estrenos=document.querySelector(`.container_peliculas_extreno`)
        lista_peliculas.Estrenos.forEach((pelicula)=>{
            plantilla_peliculas(contenedor_estrenos,`container_peliculas_extreno`, pelicula.id, pelicula.año, pelicula.imagen, pelicula.nombre, usuario)
        })
    }
    function seccion_peliculas(usuario){
        crear_titulo(document.querySelector(`.container_sub_2_peliculas`), `title_pelicula`, `Peliculas`)
        icono(document.querySelector(`.container_sub_2_peliculas .title_pelicula`), "icono_pelicula", `./assets/iconos/pelicula.svg`)
        section(document.querySelector(`.container_sub_2_peliculas`),`container_sub_3_peliculas` )
        total_peliculas(0, usuario)
        section(document.querySelector(`.container_sub_2_peliculas`),`container_paginacion` )
        paginas(lista_peliculas.Peliculas.length, "#Peliculas")

    }
    function seccion_mas_vistas(usuario){
        crear_titulo(document.querySelector(`.las_mas_vistas`), `title_pelicula`, `Películas más vistas`)
        icono(document.querySelector(`.las_mas_vistas .title_pelicula`), "icono_pelicula", `./assets/iconos/vistas.svg`)
        section(document.querySelector(`.las_mas_vistas`), `container_pelicula_extreno`)

        lista_peliculas.Vistas.forEach((pelicula)=>{
            plantilla_especial_peliculas(pelicula.id, pelicula.imagen, pelicula.nombre, pelicula.año, pelicula.duracion, pelicula.descripcion.slice(0, 70), usuario)
        })
    }
    //plantilla especial para la seccion de las peliculas mas vistas
    function plantilla_especial_peliculas(id,src, nombre, año_pelicula, duracion_pelicula, descripcion_pelicula, usuario ){
        const article=new Elemento(document.querySelector(`.las_mas_vistas .container_pelicula_extreno`), `pelicula_estreno`, `article`, id)
        article.create_hijo()
        const pelicula=document.querySelector(`.las_mas_vistas #${id}`)
        section(pelicula, `caraptula`)
        section(pelicula, `content`)
        const boton_pelicula=new Boton(pelicula.children[0], `icono_favorito`, `button`, `button`, ``, id)
        boton_pelicula.create()
        const lista=JSON.parse(localStorage.getItem(`${usuario}`))
        if(lista.Peliculas_favoritas.some(lista => lista == id)){
            document.querySelector(`.las_mas_vistas #${id} .icono_favorito`).classList.add(`activado`)
        }
        icono(document.querySelector(`.las_mas_vistas #${id} .icono_favorito`), "favorito_desactivado", "assets/iconos/estrella_dessactivada.svg")
        icono(document.querySelector(`.las_mas_vistas #${id} .icono_favorito`), "favorito_activado", "assets/iconos/estrella_activado.svg")
        const img_pelicula=new Img(pelicula.children[0], "img_estreno", `img`, src, `imagen_pelicula`)
        img_pelicula.create()
        element_h3(pelicula.children[1],`titulo_pelicula_viviews`, nombre)
        element_p(pelicula.children[1], `año_views`, año_pelicula)
        element_p(pelicula.children[1], `duracion_views`, duracion_pelicula)
        element_p(pelicula.children[1], `descripcion_views`, `${descripcion_pelicula}...`)
    }

}


function total_peliculas(pagina, usuario){
    const contenedor_peliculas=document.querySelector(`.container_sub_3_peliculas`)
    lista_peliculas.Peliculas[pagina].forEach((pelicula)=>{
        plantilla_peliculas(contenedor_peliculas,`container_sub_2_peliculas`, pelicula.id, pelicula.año, pelicula.imagen, pelicula.nombre, usuario)
    })
}
function paginas(cantidad, link){
    const total_paginas=cantidad
    const contenedor_paginas=document.querySelector(`.container_paginacion`)
    for(let i =1; i<=total_paginas; i++){
        const icono_pagina=new Text(contenedor_paginas, `icono_paginacion`, `a`, i, ``,link)
        icono_pagina.create_link()
    }
}
//plantilla para el diseño de las peliculas
function plantilla_peliculas(padre, contenedor, id, año_pelicula, src, nombre, usuario){
    const article=new Elemento(padre, `pelicula_estreno`, `article`, id)
    article.create_hijo()
    const pelicula=document.querySelector(`.${contenedor} #${id}`)
    section(pelicula, `caraptula`)
    element_p(pelicula.children[0], `año`, año_pelicula )
    const boton_pelicula=new Boton(pelicula.children[0], `icono_favorito`, `button`, `button`, ``, id)
    boton_pelicula.create()
    const lista=JSON.parse(localStorage.getItem(`${usuario}`))
    if(lista.Peliculas_favoritas.some(lista => lista == id)){
        document.querySelector(`.${contenedor} #${id} .icono_favorito`).classList.add(`activado`)
    }
    icono(document.querySelector(`.${contenedor} #${id} .icono_favorito`), "favorito_desactivado", "assets/iconos/estrella_dessactivada.svg")
    icono(document.querySelector(`.${contenedor} #${id} .icono_favorito`), "favorito_activado", "assets/iconos/estrella_activado.svg")
    const img_pelicula=new Img(pelicula.children[0], "img_estreno", `img`, src, `imagen_pelicula`)
    img_pelicula.create()
    element_h3(pelicula, "titulo_pelicula",nombre )
}
function element_h3(padre, clase, texto){
    const h3=new Text(padre, clase, `h4`, texto)
    h3.create()
}
export { inicio, total_peliculas, paginas, plantilla_peliculas,element_h3}