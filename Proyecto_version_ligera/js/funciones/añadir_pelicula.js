//funcion encargada de añadir  o quitar las peliculas selecionadas a la seccion de favoritos mediante el icono que se presenta en cada pelicula
export function añadir_pelicula(usuario, contenedor) {
    //se buscan todos los iconos de la pagina presente
    const boton = document.querySelectorAll(`.icono_favorito`)
    boton.forEach(boton => {
        boton.addEventListener(`click`, () => {
            //busca si hay otra pelicula igual en la misma pagina para agregar un estilo css
            const peli_seleccionada = document.querySelectorAll(`.${contenedor} #${boton.id}`)
            peli_seleccionada.forEach(peli => {
                peli.classList.toggle(`activado`)
            })
            //Busca la lista de favoritos del usuario
            const lista = JSON.parse(localStorage.getItem(`${usuario}`))
            // Verifica si extiste la pelicula seleccionada es su lista
            //si esta la elimina
            if (lista.Peliculas_favoritas.some(pelicula => pelicula == boton.id)) {
                const posicion = lista.Peliculas_favoritas.indexOf(boton.id)
                lista.Peliculas_favoritas.splice(posicion, 1)
                localStorage.setItem(`${usuario}`, JSON.stringify(lista))
            //si no esta la agrega
            } else {
                lista.Peliculas_favoritas.unshift(boton.id)
                localStorage.setItem(`${usuario}`, JSON.stringify(lista))
            }
        })
    })
}