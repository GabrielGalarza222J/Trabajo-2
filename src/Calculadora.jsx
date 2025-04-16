import React, { useState } from 'react';

function Calculadora() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [operacion, setOperacion] = useState('');
    const [resultado, setResultado] = useState(0);
    const [memoria, setMemoria] = useState(0);

    const calcular = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado('Datos ingresados no son válidos, por favor ingrese números');
            return;
        }

        let res;

        switch (operacion) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 === 0 ? 'No es posible dividir por cero' : num1 / num2;
                break;
            default:
                res = 'Operación no válida';
                break;
        }

        setResultado(res);
        
    };

    const almacenarMemoria = () => {
        setMemoria(resultado);
    };

    const restaurarMemoria = (campo) => {
        if (memoria !== null) {
            if (campo === 'valor1') {
                setValor1(memoria);
            } else if (campo === 'valor2') {
                setValor2(memoria);
            }
        }
    };

    return (
        <div>
            <h1>Calculadora</h1>
            <div>
                <input
                    type="text"
                    value={valor1}
                    onChange={(e) => setValor1(e.target.value)}
                />
                <input
                    type="text"
                    value={valor2}
                    onChange={(e) => setValor2(e.target.value)}
                />
            </div>
            <div>
                <select
                    value={operacion}
                    onChange={(e) => setOperacion(e.target.value)}
                >
                    <option value="+">Suma</option>
                    <option value="-">Resta</option>
                    <option value="*">Multiplicación</option>
                    <option value="/">División</option>
                </select>
            </div>
            <button onClick={calcular} style={{ margin: '10px' }}>Calcular</button>

            <div>
                <h2>Resultado: {resultado !== null ? resultado : ''}</h2>
            </div>

            <div>
                <button onClick={almacenarMemoria} style={{ margin: '10px' }}>
                    Almacenar en memoria
                </button>
                <div>
                    <button onClick={() => restaurarMemoria('valor1')} style={{ margin: '10px' }}>
                        Restaurar memoria en Valor 1
                    </button>
                    <button onClick={() => restaurarMemoria('valor2')} style={{ margin: '10px' }}>
                        Restaurar memoria en Valor 2
                    </button>
                </div>
            </div>
        </div>
    );
    
}

export default Calculadora;
