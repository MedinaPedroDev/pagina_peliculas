import {crear_formulario_inicio, eliminar} from "../paginas/formulario_1.js"
// funcion para salir de la seccion
export function salir(){
    const link_salir=document.querySelectorAll(`#Salir`)
    link_salir.forEach(link=>{
        link.addEventListener(`click`, ()=>{
            const body=document.querySelector(`body`)
            eliminar(body, `container_principal`)
            crear_formulario_inicio()
        })
    })
}