import {peliculas} from "../paginas/peliculas.js" 
import {eliminar} from "../paginas/formulario_1.js"
// funcion encaragda de crear la pagina de cdad pelicula al dar click en esta
export function ver_pelicula(usuario){
    // se recolectan todos loc botones de favoritos
    const iconos=[]
    const icono_activado=document.querySelectorAll(`.favorito_activado`) 
    const icono_desactivado=document.querySelectorAll(`.favorito_desactivado`) 
    icono_activado.forEach(icono =>{
        iconos.push(icono)
    }) 
    icono_desactivado.forEach(icono =>{
        iconos.push(icono)
    }) 
    const peliculas_seleccionada=document.querySelectorAll(`.pelicula_estreno`)
    peliculas_seleccionada.forEach(pelicula => {
        pelicula.addEventListener(`click`,(articulo)=>{
            // se verifica que el usuario no le de click a la pelicula no al boton
            const verificar = iconos.some(iconos=> articulo.target==iconos)
            if(verificar==false){
                const body=document.querySelector(`body`)
                eliminar(body, `container_principal`)
                peliculas(pelicula.id, usuario)
                location.href=`#Ver_Pelicula`
            }
        })
    });
// para ir a la ir a la pagina de la pelicula pero en la seccion de favoritos
    const peliculas_favorita=document.querySelectorAll(`.peliculas_lista`)
    peliculas_favorita.forEach(pelicula => {
        pelicula.addEventListener(`click`,(articulo)=>{
            const verificar = iconos.some(iconos=> articulo.target==iconos)
            if(verificar==false){
                const body=document.querySelector(`body`)
                eliminar(body, `container_principal`)
                peliculas(pelicula.id, usuario)
                location.href=`#Ver_Pelicula`
            }
        })
    });
}