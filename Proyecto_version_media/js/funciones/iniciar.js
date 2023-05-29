import { eliminar } from "../paginas/formulario_1.js"
import { inicio } from "../paginas/inicio.js"
//funion encargada de iniciar seccion
export function iniciar(){
    
    (()=>{
        if(localStorage.getItem(`IUJO`)){
        }else{
            const iujo={
                Usuario: `IUJO`,
                Nombre : `IUJO`,
                Correo :`iujo@gmail.com`,
                Password: `Iujo2022`,
                Peliculas_favoritas: [`pelicula_1`, `pelicula_15`, `pelicula_10`, `pelicula_19`,`pelicula_32`,`pelicula_30`,`pelicula_9`,`pelicula_25`,`pelicula_23`,`pelicula_29`]
            }
            localStorage.setItem(`IUJO`, JSON.stringify(iujo))
        }
    })()
    //recoleccion de datos
    const bootn_inicio=document.querySelector(`.button_form`)
    //funcion para comprobar que el usuario y la contraseña ingresada concuerden con alguno registado
    
    bootn_inicio.addEventListener(`click`, ()=>{
        const usuario=document.querySelector(`#Usuario_inicio`).value
        const contraseña=document.querySelector(`#Contraseña_inicio`).value
        if(localStorage.getItem(`${usuario}`)){
            const buscar_contraseña=JSON.parse(localStorage.getItem(`${usuario}`))
            if(buscar_contraseña.Password==contraseña){
                const body=document.querySelector(`.cuerpo_form`)
                eliminar(body, `container_principal`)
                inicio(usuario)
            }else{
                document.querySelector(`#error_inicio`).classList.add(`mensaje_error_activado`)
            }
        }else{
            document.querySelector(`#error_inicio`).classList.add(`mensaje_error_activado`)
        }       
    })

    
}


