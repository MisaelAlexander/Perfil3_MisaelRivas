import { useEffect, useState } from "react";


export default function Dashboard(){
    const [name, setName] = useState('');
    

    return(
        <div>
            <h1>Mucbo gusto mi nombre es Misael Alexander Rivas López</h1>
            <h2>Codigo: 20210187</h2>
            <h3>Seccion: 1A</h3>
            <button>Ir a la pagina 2</button>
        </div>
    )
}