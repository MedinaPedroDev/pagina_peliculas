import {Elemento, Img, Text, Input, Boton } from "../clases/data_class.js"
import { section} from "./formulario_1.js"
//el header
function header_principal(element){
    //creamos nuestro header
    const header=new Elemento(element, "header_inicio", `header`)
    header.create_hijo()
    //creamos el icono del menu
    const menu=new Img(element.children[0], `menu`, `img`, `./assets/iconos/menu.svg`, `menu`)
    menu.create()
    //creamos nuestro logo
    const logo=new Img(element.children[0], `logo_inicio`, `img`, `./assets/iconos/logo.png`, `logo`)
    logo.create()
    //creamos el nav
    nav(element)
}
function nav(padre){
    //creamos el nav
    const nav=new Elemento(padre.children[0], "container_nav", `nav`)
    nav.create_hijo()
    const navegador=document.querySelector(`.container_nav`)
    section(navegador, "container_links" )
    section(navegador, "container_serch")
    section(navegador, "container_perfil")
    //creamos el menu para desplazarnos
    seccion_links()
    //creamos la barra de navegacion
    barra_navegacion()
    //creamos el perfil
    perfil()
}
function seccion_links(){
    const container_links=document.querySelector(`.container_links`)
    element_ul(container_links, `menu_links`)
    const menu_links=document.querySelector(`.menu_links`)
    element_li(menu_links, `li`, `link_inicio`)
    element_li(menu_links, `menu_principal`)
    element_li(menu_links, `li`, `link_favorito`)
    element_a(menu_links.children[0], `link_active`, `Inicio`)
    element_a(menu_links.children[1], `link`, `Géneros`)
    element_a(menu_links.children[2], `link_active`, `Favoritos`)
    const links=document.querySelectorAll(`.link_active`)
    links.forEach((links)=>{links.classList.add(`link`)})
    icono(menu_links.children[0].children[0],`icono`,`assets/iconos/casa.svg`)
    icono(menu_links.children[1].children[0],`icono`,`assets/iconos/genero.svg`)
    icono(menu_links.children[2].children[0],`icono`,`assets/iconos/estrella.svg`)
    arrow(menu_links.children[1].children[0],`menu__arrow`, `assets/iconos/flecha.svg`)
    element_ul(menu_links.children[1], `sub_menu`, `links_categorias`)
    const id_links=[`Acción`, `Anime`, `Aventura`, `Ciencia_Fision`, `Comedia`, `DC`, `Drama`, `Fantasia`, `Marvel`, `Romance`, `Terror`]
    for(let i=0; i<=10; i++){
        element_li(menu_links.children[1].children[1], `li`, id_links[i] )
    }
    const nombre_link=[`Acción`, `Anime`, `Aventura`, `Ciencia Fisión`, `Comedia`, `DC`, `Drama`, `Fantasia`, `Marvel`, `Romance`, `Terror`]
    for(let i=0; i<=10; i++){
        element_a(menu_links.children[1].children[1].children[i], `a`, nombre_link[i])
    } 
}
function barra_navegacion(){
    const container_serch=document.querySelector(`.container_serch`)
    section(container_serch, `barra_busqueda`)
    const input=new Input(container_serch.children[0],`buscar`, `input`, `serch`, `serch`, `text`, `Buscar`)
    input.create()
    const boton=new Boton(container_serch.children[0], `boton_buscar`, `button`, `button`,``)
    boton.create()
    const icono_buscar=new Img(container_serch.children[0].children[1],`icono_buscar`, `img`,"assets/iconos/lupa.svg", `buscar`)
    icono_buscar.create()
}
function perfil(){
    const container_perfil=document.querySelector(`.container_perfil`)
    element_ul(container_perfil, `menu_links`)
    element_li(container_perfil.children[0], `menu_principal`)
    element_a(container_perfil.children[0].children[0], "link", "", `a_perfil`)
    const icono_perfil= new Img(document.querySelector(`#a_perfil`),"perfil", `img`,"assets/iconos/perfil.svg", `perfil`)
    icono_perfil.create()
    arrow(document.querySelector(`#a_perfil`), `arrow_perfil`, "assets/iconos/flecha.svg")
    document.querySelector(`.arrow_perfil`).classList.add(`menu__arrow`)
    element_ul(container_perfil.children[0].children[0], "sub_menu", "sub_menu_perfil")
    const ul_perfil=document.querySelector(`#sub_menu_perfil`)
    const nombre_perfil=[ `Favoritos`, `Salir`]
    const perfil_links=[ `link_favorito`, `Salir`]
    for (let i = 0; i<=1; i++){
        element_li(ul_perfil, `li`, perfil_links[i])
    }
    for (let i = 0; i<=1; i++){
        element_a(ul_perfil.children[i], `a`, nombre_perfil[i] )
    }
}
//el hero
function hero(container_principal){
    section(container_principal, `hero`)
    const hero=document.querySelector(`.hero`)
    const h1=new Text(hero, `h1`, `h1`, `Bienvenido a PelixFlix`)
    h1.create()
    element_p(hero, `p`, `PelixFlix el mejor sitio para ver online y gratis las ultimas peliculas con la mejor calidad posible.`)
    element_p(hero, `p`, `Descubre nuestro catalogo y disfruta de las ultimas peliculas publicadas `)
}
//el recuadro que aparece para buscar las peliculas
function buscador(padre){
    section(padre, "buscador")
    const close=new Img(document.querySelector(`.buscador`), "close_buscador", `img`, "assets/iconos/close.svg", `close`)
    close.create()
    section(document.querySelector(`.buscador`), "contenedor_buscador")
}
//el menu desplegable
function menu_desplegable(container_principal){
    const nav=new Elemento(container_principal, "menu_desplegable", `nav`)
    nav.create_hijo()
    const menu_desplegable =document.querySelector(`.menu_desplegable`)
    const menu=new Img(menu_desplegable, `menu`, `img`, `./assets/iconos/menu.svg`, `menu`)
    menu.create()
    element_ul(menu_desplegable, `menu_links_desplegable`)
    element_li(menu_desplegable.children[1], `menu_principal`)
    element_li(menu_desplegable.children[1], `menu_principal`)
    document.querySelectorAll(".menu_desplegable .menu_principal").forEach(link=>{
        link.classList.add(`menu__item`)
    })
    element_li(menu_desplegable.children[1], `menu__item`, `link_inicio`)
    element_li(menu_desplegable.children[1], `menu__item`, `link_favorito`)

    
    element_a(menu_desplegable.children[1].children[0], "link", "", `a_perfil`)
    const icono_perfil= new Img(document.querySelector(`.menu_desplegable #a_perfil`),"perfil", `img`,"assets/iconos/perfil.svg", `perfil`)
    icono_perfil.create()
    arrow(document.querySelector(`.menu_desplegable #a_perfil`), `arrow_perfil`, "assets/iconos/flecha.svg")
    document.querySelector(`.menu_desplegable .arrow_perfil`).classList.add(`menu__arrow`)
    element_ul(menu_desplegable.children[1].children[0], "sub_menu", "sub_menu_perfil")
    const ul_perfil=document.querySelector(`.menu_desplegable #sub_menu_perfil`)
    const nombre_perfil=[ `Favoritos`, `Salir`]
    const perfil_links=[ `link_favorito`, `Salir`]
    for (let i = 0; i<=1; i++){
        element_li(ul_perfil, `li`, perfil_links[i])
    }
    for (let i = 0; i<=1; i++){
        element_a(ul_perfil.children[i], `a`, nombre_perfil[i] )
    }

    element_a(menu_desplegable.children[1].children[1], `link`, `Géneros`)
    element_a(menu_desplegable.children[1].children[2], `link_active`, `Inicio`)
    element_a(menu_desplegable.children[1].children[3], `link_active`, `Favoritos`)
    const links=document.querySelectorAll(`.menu_desplegable .link_active`)
    links.forEach((links)=>{links.classList.add(`link`)})
    icono(menu_desplegable.children[1].children[1].children[0],`icono`,`assets/iconos/genero.svg`)
    icono(menu_desplegable.children[1].children[2].children[0],`icono`,`assets/iconos/casa.svg`)
    icono(menu_desplegable.children[1].children[3].children[0],`icono`,`assets/iconos/estrella.svg`)
    element_ul(menu_desplegable.children[1].children[1], `sub_menu`, `links_categorias`)
    arrow(menu_desplegable.children[1].children[1].children[0],`menu__arrow`, `assets/iconos/flecha.svg`)
    const id_links=[`Acción`, `Anime`, `Aventura`, `Ciencia_Fision`, `Comedia`, `DC`, `Drama`, `Fantasia`, `MARVEL`, `Romance`, `Terror`]
    for(let i=0; i<=10; i++){
        element_li(menu_desplegable.children[1].children[1].children[1], `li`, id_links[i] )
    }
    const nombre_link=[`Acción`, `Anime`, `Aventura`, `Ciencia Fisión`, `Comedia`, `DC`, `Drama`, `Fantasia`, `MARVEL`, `Romance`, `Terror`]
    for(let i=0; i<=10; i++){
        element_a(menu_desplegable.children[1].children[1].children[1].children[i], `a`, nombre_link[i])
    }
}
//el footer
function footer(padre){
    const footer=new Elemento(padre, `footer`, `footer`)
    footer.create_hijo()
    section(document.querySelector(`.footer`), "container_footer")
    const container_footer=document.querySelector(`.container_footer`)
    for(let i=0; i<=2; i++){
        section(container_footer,`section`)
    }
    element_h4(container_footer.children[0], `Nombres`)
    section(container_footer.children[0],"footer_container" )
    element_p(container_footer.children[0].children[1], `p`, `Pedro Medina`)
    element_p(container_footer.children[0].children[1], `p`, `Kevin Miranda`)
    element_p(container_footer.children[0].children[1], `p`, `Brandon Oropeza`)
    element_p(container_footer.children[0].children[1], `p`, `Emilys Hoyos`)
    element_h4(container_footer.children[1], `Instituto Universitario Jesus Obrero`)
    section(container_footer.children[1],"footer_container" )
    const logo_Iujo=new Img(container_footer.children[1].children[1], `img`, `img`, `assets/iconos/IUJO.png`,`Iujo` )
    logo_Iujo.create()
    element_h4(container_footer.children[2], `Profesor`)
    section(container_footer.children[2],"footer_container" )
    element_p(container_footer.children[2].children[1], `p`, `Gabriel Martínez`)
    element_p(container_footer.children[2].children[1], `p`, `Algoritmo y programación`)
    element_p(document.querySelector(`footer`), "copyray", `© Copyring 2022 | Pedro Medina | Kevin Miranda | Brandon Oropeza | Emilys Hoyos`)
}

function element_ul(padre, clase, id=""){
    const ul=new Elemento(padre, clase, `ul`, id)
    ul.create_hijo()
}
function element_li(padre, clase, id=""){
    const li=new Elemento(padre, clase, `li`, id)
    li.create_hijo()
}
function element_a(padre, clase, texto, id=``){
    const element_a=new Text(padre, clase, `a`, texto, id)
    element_a.create()
}
function icono(padre, clase, src){
    const icono=new Img(padre, clase, `img`, src, `icono`)
    icono.create_inicio()
}
function arrow(padre,clase, src){
    const icono=new Img(padre, clase, `img`, src, `arrow`)
    icono.create()
}
function element_p(padre, clase, texto){
    const element_p=new Text(padre, clase, `p`, texto )
    element_p.create()
}
function element_h4(padre, texto){
    const h4=new Text(padre, `h4`, `h4`, texto)
    h4.create()
}

export {header_principal, hero, buscador, menu_desplegable, footer, icono, element_ul, element_a,element_li, arrow, element_p}