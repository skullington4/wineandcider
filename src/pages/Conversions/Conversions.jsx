import { useState } from 'react';

export default function Conversions() {
    const [var1, setVar1] = useState(0);
    const [var2, setVar2] = useState(0);

    // Unified handler for variable changes
    const handleVarChange = (e, setVar) => {
        setVar(e.target.value);
    };

    // Calculations
    const addition = Number(var1) + Number(var2);
    const subtraction = var1 - var2;
    const multiplication = var1 * var2;
    const division = var2 !== 0 ? var1 / var2 : 'Infinity'; // Prevent division by zero

    return (
        <main>
            <h1>Conversions Page</h1>
            <div className='convPage'>
                <div className='convPageRow'>
                    <label htmlFor="var1">Var1</label>
                    <input type="number" onChange={(e) => handleVarChange(e, setVar1)} />
                </div>
                <div className='convPageRow'>
                    <label htmlFor="var2">Var2</label>
                    <input type="number" onChange={(e) => handleVarChange(e, setVar2)} />
                </div>
                <div className='convOutput'>
                    <label htmlFor="result1">Result1: </label>
                    <div>Addition: {addition}</div>
                </div>
                <div className='convOutput'>
                    <label htmlFor="result2">Result2: </label>
                    <div>Subtraction: {subtraction}</div>
                </div>
                <div className='convOutput'>
                    <label htmlFor="result3">Result3: </label>
                    <div>Multiplication: {multiplication}</div>
                </div>
                <div className='convOutput'>
                    <label htmlFor="result4">Result4: </label>
                    <div>Division: {division}</div>
                </div>
            </div>
        </main>
    );
}
