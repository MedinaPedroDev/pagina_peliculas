import {eliminar, crear_header_formulario,main, crear_formulario, crear_titulo, crear_mensaje_error, crear_mensaje_link, button, section, section_principal, crear_formulario_inicio} from "./formulario_1.js"
import { Img,  Label, Text, Input} from "../clases/data_class.js"
import {registro} from "../funciones/registro.js"
//funcion que crear un Usuario para iniciar seccion
export default function crear_formulario_registro(){
    //Primero creamos los contenedores pricipales que son el header, el main y el formulario
    contenedores_iniciales()
    //Luego creamos el contenido formulario que son el titulo, el section para los campos y el boton y el mensaje
    contenido_formulario()
    //creamos los campos para ingresar los datos
    crear_campos()
    //creamos el boton para iniciar seccion
    create_section_boton()

    function contenedores_iniciales(){
        const body=document.querySelector(`body`)
        eliminar(body, `container_principal`)
        section_principal(body, `container_principal`)
        const container_inicial=document.querySelector(`.container_principal`)
        crear_header_formulario(container_inicial)
        main(container_inicial, `main_form`)
        crear_formulario(container_inicial, "registro")
    }

    function contenido_formulario(){
        const formulario=document.querySelector(`.form_form`)
        crear_titulo(formulario, `title_for`, `Registro`)
        section(formulario, "section_form")
        section(formulario, "formulario_ultime")
        crear_mensaje_error(formulario, 3, `Por favor completar todos los campos Correctamente`, "error_registro")
    }
    
    function crear_campos(){
        const section_padre=document.querySelector(`.section_form`)
        section(section_padre, "section")
        section(section_padre, "section")
        section(section_padre, "section")
        section(section_padre, "section")
        section(section_padre, "section")
        const Nombre ={
            padre:section_padre, 
            hijo:0, 
            id_label:"Nombre",
            identificador:`Nombre`,
            direccion_icono:`assets/iconos/nombre.svg`,
            type:`text`,
            placeholder:`Nombre`,
            texto:`Nombre no valido`,
            id_input:`Nombre_input`
        }
        const Usuario ={
            padre:section_padre, 
            hijo:1, 
            id_label:"Usuario",
            identificador:`Usuario`,
            direccion_icono:`assets/iconos/usuario.svg`,
            type:`text`,
            placeholder:`Usuario`,
            texto:`Usuario no valido por favor cambiarlo`,
            id_input:`Usuario_input`
        }
        const Correo ={
            padre:section_padre, 
            hijo:2, 
            id_label:"Correo",
            identificador:`Correo`,
            direccion_icono:`assets/iconos/arroba.svg`,
            type:`text`,
            placeholder:`Correo`,
            texto:`Correo no valido`,
            id_input:`Correo_input`
        }
        const Password ={
            padre:section_padre, 
            hijo:3, 
            id_label:"Password",
            identificador:`Password`,
            direccion_icono:`assets/iconos/contraseña_2.svg`,
            type:`password`,
            placeholder:`Contraseña`,
            texto:`Contraseña incorrecta`,
            id_input:`Password_input`
        }
        const Password_2 ={
            padre:section_padre, 
            hijo:4, 
            id_label:"Password_2",
            identificador:`Password_2`,
            direccion_icono:`assets/iconos/contraseña_2.svg`,
            type:`password`,
            placeholder:`Repetir Contraseña`,
            texto:`Contraseña incorrecta verificar`,
            id_input:`Password_2_input`
        }
        crear_campo_registro(Nombre)
        crear_campo_registro(Usuario)
        crear_campo_registro(Correo)
        crear_campo_registro(Password)
        crear_campo_registro(Password_2)
    }
    function create_section_boton(){
        const section_ultimate=document.querySelector(`.formulario_ultime`)
        crear_mensaje_link(section_ultimate, `Si ya te registrastes. `, `Inicia Sección`, `link_seccion`)
        button(section_ultimate, `Registrar`)
    }
    //para que se active la funcion para registrar
    registro()
    //para regresar al formulario de iniciar seccion
    const link_inicio = document.querySelector(`#link_seccion`)
    link_inicio.addEventListener(`click`, ()=>{
        const body=document.querySelector(`body`)
        eliminar(body, `container_principal`)
        crear_formulario_inicio()
        
    })
}
function crear_campo_registro({padre, hijo, identificador, id_label,id_input, direccion_icono, type, placeholder, texto}){
    const label=new Label(padre.children[`${hijo}`], `label`, `label`, identificador, id_label)
    label.create()
    const icono_usuario=new Img(document.querySelector(`#${id_label}`), `icono`, `img`, direccion_icono, `icono`)
    icono_usuario.create()
    section(padre.children[`${hijo}`], identificador)
    const input=new Input(document.querySelector(`.${identificador}`), `form`, `input`, identificador, id_input, type, placeholder)                                                  
    input.create()
    const mensaje=new Text(document.querySelector(`.${identificador}`), "invalido", `p`, texto)
    mensaje.create()
}
