import {eliminar} from "../paginas/formulario_1.js"
import {categorias} from "../paginas/categorias.js"
//funcion encargada de crear la pagina de categorias
export function ir_categoria(usuario){
    const links_categorias=document.querySelectorAll(`#links_categorias li`)
    links_categorias.forEach(a =>{
        a.addEventListener(`click`, ()=>{
            const body=document.querySelector(`body`)
            eliminar(body, `container_principal`)
            categorias(a.id, a.innerText, usuario)
        })
    }) 
        
}