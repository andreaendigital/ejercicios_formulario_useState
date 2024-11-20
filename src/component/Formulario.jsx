//validar edad minima , validar seleccion de genero, validar email que ambos tengan el formato correcto

import { useState } from "react";

const Formulario = () => {
    const [nombre, setNombre] = useState(""); 
    const [apellido, setApellido] = useState(""); 
    const [edad, setEdad] = useState(""); 
    const [email, setEmail] = useState(""); 

    const [error, setError] = useState(false); //el error es falso inicialmente

    const validarInput =(e) =>{

    e.preventDefault() //evitamos que llame a get el navegador con cada envío del formulario

    if(nombre ==="" || apellido ==="" || edad === "" || email === ""){
        setError(true) //si el campo está vacío el error es cierto, o sea, hay error.  y si es cierto o verdadero al inicio del fomrulario se programa qué hacer
        return //y se deja de ejecutar la lógica siguiente

    }

    setError(false) //Elimina mensaje de error, o lo deja como falso en su estado inicial, en caso que NO esté vacío
    setNombre("");
    setApellido("");
    setEdad("");
    setEmail("");

}


    return(
    <>
        <form onSubmit={validarInput}> 
        {/* si error es verdadero , es decir, está vacío, mostrar mensaje  */}
        {error ? <p> Todos los campos son obligatorios </p> : null}  

        {/* <h3>{nombre}</h3> */}
        <div>        
        <label>Nombre:</label>
        <input name="name" onChange={(e) => setNombre(e.target.value)} value={nombre} /> 
        </div>

        <div>        
        <label>Apellido:</label>
        <input name="apellido" onChange={(e) => setApellido(e.target.value)}/> 
        </div>

        <div>        
        <label>Edad:</label>
        <input name="edad" onChange={(e) => setEdad(e.target.value)}/> 
        </div>

        <div>        
        <label>Email:</label>
        <input name="email" onChange={(e) => setEmail(e.target.value)}/> 
        </div>

        
        <button> Enviar</button>


        </form> 


</>


    )
}

export default Formulario