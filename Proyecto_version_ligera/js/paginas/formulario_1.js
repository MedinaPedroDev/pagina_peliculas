//importamos los elementos necesarios
import { Elemento, Img, Boton, Span, Label, Text, Input } from "../clases/data_class.js"
import crear_formulario_registro from "./formulario_2.js"
import {iniciar} from "../funciones/iniciar.js"
//funcion que crea el formulario para iniciar seccion
function crear_formulario_inicio() {
    //Primero creamos los contenedores pricipales que son el header, el main y el formulario
    contenedores_iniciales()
    //Luego creamos el contenido formulario que son el titulo, el section para los campos y el boton y el mensaje
    contenido_formulario()
    //creamos los campos para ingresar los datos
    create_section_campos()
    //creamos el boton para iniciar seccion
    create_section_boton()

    function contenedores_iniciales() {
        const body = document.querySelector(`body`)
        body.classList.add(`cuerpo_form`);
        section_principal(body, `container_principal`)
        const container_principal = document.querySelector(`.container_principal`)
        crear_header_formulario(container_principal)
        main(container_principal, `main_form`)
        crear_formulario(container_principal, `inicio`)
    }
    function contenido_formulario() {
        const formulario = document.querySelector(`.form_form`)
        crear_titulo(formulario, `title_for`, `Iniciar Sección`)
        section_formulario(formulario)
        crear_mensaje_error(formulario, 3, `Contraseña o Usuario Incorrecto`, `error_inicio`)
    }
    function create_section_campos() {
        const section_padre = document.querySelector(`.section_form`)
        crear_sub_section_formulario(section_padre)
        // crear_Campo_Usuario(section_padre)
        const Usuario = {
            padre: section_padre,
            hijo: 0,
            id_label: "Usuario",
            identificador: `Usuario_inicio`,
            direccion_icono: `assets/iconos/usuario.svg`,
            type: `text`,
            placeholder: `Usuario`

        }
        const Contraseña = {
            padre: section_padre,
            hijo: 1,
            id_label: "Contraseña",
            identificador: `Contraseña_inicio`,
            direccion_icono: `assets/iconos/contraseña.svg`,
            type: "password",
            placeholder: `Contraseña`

        }
        crear_campo(Usuario)
        crear_campo(Contraseña)
    }
    function create_section_boton() {
        const section_padre = document.querySelector(`.formulario_ultime`)
        crear_mensaje_link(section_padre, `Si no estas registrado. `, `Registrate`, `link_registro`)
        button(section_padre, `Iniciar`)
    }
    // para ir al formulario de registro
    const link_registro = document.querySelector(`#link_registro`)
    link_registro.addEventListener(`click`, () => {
        crear_formulario_registro()
    })
    iniciar()
}

function crear_header_formulario(element) {
    const header = new Elemento(element, `header_for`, `header`)
    header.create_inicio()
    const logo = new Img(element.children[0], `logo`, `img`, "./assets/iconos/logo.png", `logo`)
    logo.create()
}
function section_formulario(formulario) {
    section(formulario, `section_form`)
    section(formulario, `formulario_ultime`)
}
function crear_sub_section_formulario(section_padre) {
    section(section_padre, `section`)
    section(section_padre, `section`)
}
function crear_campo({ padre, hijo, id_label, identificador, direccion_icono, type, placeholder }) {
    const label_usuario = new Label(padre.children[`${hijo}`], `label`, `label`, identificador, id_label)
    label_usuario.create()
    const icono_usuario = new Img(document.querySelector(`#${id_label}`), `icono`, `img`, direccion_icono, `icono`)
    icono_usuario.create()
    const input_usuario = new Input(padre.children[`${hijo}`], `form`, `input`, identificador, identificador, type, placeholder)
    input_usuario.create()
}


//A partir de aqui son funciones que en su mayoria crean elementos generales como secciones o titulos y otras dunciones para uso esclusivo para los formularios
function eliminar(padre, eliminar){
    const container_eliminar=document.querySelector(`.${eliminar}`, )
    padre.removeChild(container_eliminar)
}

function main(element, clase) {
    const main = new Elemento(element, clase, `main`)
    main.create_hijo()
}
function crear_formulario(element, id) {
    const form = new Elemento(element.children[1], `form_form`, `form`, id)
    form.create_hijo()
}
function crear_titulo(padre, clase, mensaje) {
    const titulo = new Text(padre, clase, `h2`, mensaje)
    titulo.create()
}
function crear_mensaje_error(padre, hijo, texto, id) {
    const mensaje = new Text(padre, `mensaje_error`, `p`, texto, id)
    mensaje.create()
    const span = new Span(padre.children[hijo], `error`, `span`, `Error. `)
    span.create_inicio()
}
function crear_mensaje_link(padre, texto, texto_link, id_link) {
    const mensaje = new Text(padre, `mensaje`, `p`, texto)
    mensaje.create()
    const link = new Text(padre.children[0], `a`, `a`, texto_link, id_link)
    link.create()
}
function button(padre, text) {
    const boton = new Boton(padre, "button_form", `button`, `button`, text)
    boton.create()
}
function section(padre, clase) {
    const section = new Elemento(padre, clase, `section`)
    section.create_hijo()
}
function section_principal(padre, clase) {
    const section = new Elemento(padre, clase, `section`)
    section.create_inicio()
}
export {eliminar,crear_header_formulario, main, crear_formulario, crear_titulo, crear_mensaje_error, crear_mensaje_link, button, section, section_principal, crear_formulario_inicio }
