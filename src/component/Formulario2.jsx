import { useState } from "react";

const Formulario2 = () => {
    const [nombre, setNombre] = useState(""); 
    const [error, setError] = useState(false); //el error es falso inicialmente

    const validarInput =(e) =>{

    e.preventDefault() //evitamos que llame a get el navegador con cada envío del formulario

    if(nombre ===""){
        setError(true) //si el campo está vacío el error es cierto, o sea, hay error.  y si es cierto o verdadero al inicio del fomrulario se programa qué hacer
        return //y se deja de ejecutar la lógica siguiente

    }

    setError(false) //Elimina mensaje de error, o lo deja como falso en su estado inicial, en caso que NO esté vacío
}


    return(
<>
<form onSubmit={validarInput}> 
    {/* si error es verdadero , es decir, está vacío, mostrar mensaje  */}
    {error ? <p> Debes ingresar un nombre</p> : null}  

<h3>{nombre}</h3>
<input name="Name" onChange={(e) => setNombre(e.target.value)}/> 

<button> Enviar</button>


</form>


</>


    )
}

export default Formulario2



// ---------------------------
// const validarInput =(e) =>{

//     e.preventDefault() //evitamos que llame a get el navegador con cada envío del formulario

//     if(nombre ===""){
//         alert ("debes agregar un nombre para enviar el formulario")
//     }
    
// }