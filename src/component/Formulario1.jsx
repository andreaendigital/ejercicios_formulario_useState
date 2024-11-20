import { useState } from "react";

const Formulario1 = () => {
    const [nombre, setNombre] = useState(""); 

    return(
<>
<form>
{/* <input name="Name" onChange={(e) => console.log(e)}/> */}

{/* Muestra el valor en la consola que está tipeandose en el formulario : */}
{/* <input name="Name" onChange={(e) => console.log(e.target.value)}/>  */}

{/* la variable nombre del useState muestra el cambio que recibe el setNombre que captura el e.target.value */}
{nombre}
<input name="Name" onChange={(e) => setNombre(e.target.value)}/> 

<button> Enviar</button>


</form>


</>


    )
}

export default Formulario1