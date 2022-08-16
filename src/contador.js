const { useEffect } = require("react");

const Contador = () => { 
    const [cuenta, setCuenta] = useState(100);

    const aumentar = () => {
        setCuenta(cuenta +1);
    };

    const disminuir = () => {
    
    };

    const reset = () => {

    };

    useEffect(() =>{
        console.log('Elcontador va en ${cuenta}');
    }, []);

    return (
        <div>
            <center>
                <h1>{cuenta}</h1>
                <button onClick={aumentar}>Aumentar</button>
                <button>Disminuir</button>
                <button>Reset</button>
            </center>
        </div>
    );
};

export default Contador;
