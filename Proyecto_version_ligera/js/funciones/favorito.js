import { eliminar } from "../paginas/formulario_1.js"
import { favoritos} from "../paginas/favoritos.js"
//funcion encargada de crear la pagina de favoritos
export function favorito(usuario){
    const link_favorito=document.querySelectorAll(`#link_favorito`)
    link_favorito.forEach(link=>{
        link.addEventListener(`click`, ()=>{
            const body=document.querySelector(`body`)
            eliminar(body, `container_principal`)
            favoritos(usuario)
        })
    })
}