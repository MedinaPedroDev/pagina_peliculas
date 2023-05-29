import {crear_formulario_inicio, eliminar} from "../paginas/formulario_1.js"
//recoleccion de datos
export function registro(){
    const boton = document.querySelector(`.button_form`)
    const inputs = document.querySelectorAll(`#registro input`); 
    const formulario = document.querySelector(`#registro`)
    /*Expresiones  Regex*/
    const expresiones={                   
        Nombre : /^[a-zA-ZÁ-ÿ\s]+$/,
        Correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        Password: /^.{4,20}$/, 
        Usuario: /^[a-zA-Z0-9\_\-]{4,14}$/
    }
    /*Objeto para comprobar que los campos esten aprobados*/
    const campos = {
    	Nombre : false,
        Correo : false,
        Password: false, 
        Usuario: false
    }
    //Activacion para la comprobacion del campo al escribir o despues de terminar
    inputs.forEach((input)=>{           
        input.addEventListener('keyup', ()=>{paso_valores(input.name, input.value)});
        input.addEventListener(`blur`, ()=>{paso_valores(input.name, input.value)});
    });
    //Funcion autoinvocada para crear un campo para guardar correos si no existe
    (()=>{
        if(localStorage.getItem(`correos`)){
        }else{
            const correos=[`iujo@gmail.com`]
            localStorage.setItem(`correos`, JSON.stringify(correos))
        }
    })()
    //Verficar que campo hay que comprobar
    function paso_valores(name, valor){   
         
        switch(name){
            case `Nombre`:
                validacion(valor, expresiones.Nombre, "Nombre", `Nombre`);
            break;
            case `Correo`:
                validacion(valor, expresiones.Correo, "Correo", `Correo`);
                validacion_Correo()
            break;
            case `Usuario`:
                validacion(valor, expresiones.Usuario, "Usuario", `Usuario`);
                validacion_Usuario()
            break;
            case `Password`:
                validacion(valor, expresiones.Password, "Password", `Password`);
                validar_Password();
            break;
            case `Password_2`:
                validar_Password()
            break;
        }
    }
    /*Funcion de validacion para verificar si los datos estan correctos o incorrectos Segun la Expresion Regex*/ 
    function validacion(valor, Expresion, Id, Campo ){   
        /*Comprobacion de que los campos no esten sin valor o vacios*/
        if(valor==``){              
            document.querySelector(`#${Id}`).value=``;
            document.querySelector(`.${Id}`).classList.remove(`invalido_activado`);
        }
        else{
            /*Comprobacion de que los valores sean correctos o incorrectos*/
            if(Expresion.test(valor)){       
            document.querySelector(`.${Id}`).classList.remove(`invalido_activado`);
            campos[Campo]=true
            }
            else{
            document.querySelector(`.${Id}`).classList.add(`invalido_activado`);
            campos[Campo]=false
            }
        }
    }
    //Funcion para validar que anbos Password sean iguales
    function validar_Password(){
        const Password = document.getElementById('Password_input');
    	const Password_2 = document.getElementById('Password_2_input');
        if(Password.value !== Password_2.value){
            document.querySelector(`.Password_2`).classList.add(`invalido_activado`);
            document.querySelector(`.Password`).classList.add(`invalido_activado`);
            campos.Password = false;
        }else{
            document.querySelector(`.Password_2`).classList.remove(`invalido_activado`);
            document.querySelector(`.Password`).classList.remove(`invalido_activado`);
            campos.Password = true;
        }
    }
    //Funcion para validar que el Usuario sea unico y no se haya registrado previamente
    function validacion_Usuario(){
        const usuario = document.getElementById(`Usuario_input`).value;
        if(localStorage.getItem(`${usuario}`)){
            document.querySelector(`.Usuario`).classList.add(`invalido_activado`);
            campos.Usuario = false;
        }else{
            document.querySelector(`.Usuario`).classList.remove(`invalido_activado`);
            campos.Usuario = true;
        }
    }
    //Funcion para validar que el Correo sea unico y no se haya registrado previamente
    function validacion_Correo(){
        const correo = document.getElementById(`Correo_input`).value;
        const correos_registrados =JSON.parse(localStorage.getItem(`correos`))
        const verificar=correos_registrados.includes(`${correo}`)
        if(verificar==true){
            document.querySelector(`.Correo`).classList.add(`invalido_activado`);
            campos.Correo = false;
        }else{
            document.querySelector(`.Correo`).classList.remove(`invalido_activado`);
            campos.Correo = true;
        }
    }
    //Funcion para registrar siempre y cuando todos los campos sean validos
    boton.addEventListener('click', ()=> {
        if(campos.Nombre && campos.Correo && campos.Password && campos.Usuario ){
            const perfil={
                Usuario: document.querySelector(`#Usuario_input`).value,
                Nombre : document.querySelector(`#Nombre_input`).value,
                Correo : document.querySelector(`#Correo_input`).value,
                Password: document.querySelector(`#Password_input`).value,
                Peliculas_favoritas: []
            }
            crear_usuario(perfil)
            archivar_correo(perfil)
            document.querySelector(`#error_registro`).classList.remove(`mensaje_error_activado`)
            formulario.reset()
            reset()
            //cambiar posteriormente
            const body=document.querySelector(`body`)
            eliminar(body, `container_principal`)
            crear_formulario_inicio()
        }else{
            document.querySelector(`#error_registro`).classList.add(`mensaje_error_activado`)
        }
    })
    //Funcion para resetear los campos si ya estan validos
    function reset(){
        campos.Nombre = false;
        campos.Correo = false;
        campos.Password= false;
        campos.Usuario= false;
    }
    //Funcion para crear el usuario y registrarlo en el LocalStorage
    function crear_usuario(perfil){
        localStorage.setItem(`${perfil.Usuario}`, JSON.stringify(perfil))
    }
    //Funcion para archivar el correo en el LocalStorage
    function archivar_correo(perfil){
        const correos=JSON.parse(localStorage.getItem(`correos`))
        correos.push(perfil.Correo)
        localStorage.setItem(`correos`, JSON.stringify(correos))
    }
}
