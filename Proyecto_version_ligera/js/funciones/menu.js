//funcion encaragda de todo el funcionamiento del menu desplegable
export function menu(){
    const menu = document.querySelectorAll(`.menu`)
    const menu_desplegable = document.querySelector(`.menu_desplegable`)
    const listElement = document.querySelectorAll(`.menu_desplegable .menu_principal`)
    //para que aparezca el menu
    menu.forEach(menu=>{
        menu.addEventListener(`click`,()=>{
            menu_desplegable.classList.toggle(`menu_desplegado`)
            if(document.querySelector(`.lista_usuario`)){
                const lista_usuario=document.querySelector(`.lista_usuario`)
                lista_usuario.classList.toggle(`eliminar`)
            }
        })
    })
    //para que se despleguen los sub menu al dar click
    listElement.forEach(menu=>{
        menu.addEventListener(`click`, ()=>{
            const sub_menu = menu.children[1]
            menu.classList.toggle(`menu_active`)
            let height=0
            if(sub_menu.clientHeight===0){
                height=sub_menu.scrollHeight;
            }
            sub_menu.style.height=`${height}px`
        })
    })
    //para que se el menu sierre los sub menu
    function DeleteStyle(){
        listElement.forEach(element=>{
            if(element.children[1].getAttribute(`style`)){
                element.children[1].removeAttribute(`style`);
                element.classList.remove(`menu_active`)
            }
        })
    }
    //para que se el desaparezca el menu
    window.addEventListener(`resize`, ()=>{
        if(window.innerWidth>900){
            DeleteStyle()
            if(menu_desplegable.classList.contains(`menu_desplegado`)){
                menu_desplegable.classList.remove(`menu_desplegado`)
                const lista_usuario=document.querySelector(`.lista_usuario`)
                lista_usuario.classList.remove(`eliminar`)
            }
        }
    });
}