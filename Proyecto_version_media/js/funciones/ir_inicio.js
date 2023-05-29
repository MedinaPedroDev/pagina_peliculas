import { inicio } from "../paginas/inicio.js"
import { eliminar } from "../paginas/formulario_1.js"
//funcion encargada de ir al inicio de la pagina ya sea mediante el logo o el link de inicio
export function ir_inicio(usuario){
    const logo=document.querySelector(`.logo_inicio`)
    const link_inicio=document.querySelectorAll(`#link_inicio`)
    logo.addEventListener(`click`, ()=>{
        const body=document.querySelector(`body`)
        eliminar(body, `container_principal`)
        inicio(usuario)
    })
    link_inicio.forEach(link=>{
        link.addEventListener(`click`, ()=>{
            const body=document.querySelector(`body`)
            eliminar(body, `container_principal`)
            inicio(usuario)
        })
    })
    
}