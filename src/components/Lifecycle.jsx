import React from 'react';

const LifeCycle = () => {

    const [text, setText ] = React.useState("");
    React.useEffect(() => {
        console.log("Componente montado");
        
    }
    , []);
    React.useEffect(() => {
        return () => {
            console.log("Componente desmontado");
        };
    }
    , []);
    React.useEffect(() => {
        console.log("Componente actualizado con texto:", text);
    }
    , [text]);

    return (
        <div>
            <input className="m-3 bg-blue-500 rounded-md text-white p-2" type='text' placeholder='Ingresa un texto' value={text} onChange={
                (e) => setText(e.target.value)
            }/>
        </div>
    )
}

export default LifeCycle;