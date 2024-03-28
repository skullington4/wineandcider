import { useState } from 'react';

export default function Conversions({}) {

    const [conversion, setConversion] = useState({});
    const [result, setResult] = useState(0);
    const [var1, setVar1] = useState(0);
    const [var2, setVar2] = useState(0);
    const [var3, setVar3] = useState(0);
    const [var4, setVar4] = useState(0);

    function handleConversion(e) {
        e.preventDefault();
        setVar3(Number(var1) + Number(var2));
        console.log('handleConversion');
    }

    function handleVar1Change(e) {
        setVar1(e.target.value);
        handleConversion(e);
    }

    function handleVar2Change(e) {
        setVar2(e.target.value);
        handleConversion(e);
    }

    function handleVar3Change(e) {
        setVar3(e.target.value);
    }

    function handleVar4Change(e) {
        setVar4(e.target.value);
    }

    function handleResultChange(e) {
        setResult(e.target.value);
    }

    function handleConversionChange(e) {
        setConversion(e.target.value);
    }



  return (
    <main>
        <h1>Conversions Page</h1>
        <div className='convPage'>
            <div className='convPageRow'>
                <label htmlFor="var1">Var1</label>
                <input type="number" onChange={handleVar1Change} />
            </div>
            <div className='convPageRow'>
                <label htmlFor="var2">Var2</label>
                <input type="number" onChange={handleVar2Change} />
            </div>
            <div className='convPageRow'>
                <label htmlFor="var3">Var3</label>
                <input type="number" onChange={handleVar3Change} />
            </div>
            <div className='convPageRow'>
                <label htmlFor="var4">Var4</label>
                <input type="number" onChange={handleVar4Change} />
            </div>
            <div className='convOutput'>
                <label htmlFor="result1">Result1: </label>
                <div>Addition: {var3}</div>
            </div>
            <div className='convOutput'>
                <label htmlFor="result2">Result2: </label>
                <div>Subtraction: {var1 - var2}</div>
            </div>
            <div className='convOutput'>
                <label htmlFor="result3">Result3: </label>
                <div>Multiplication: {var1 * var2}</div>
            </div>
            <div className='convOutput'>
                <label htmlFor="result4">Result4: </label>
                <div>Division: {var1 / var2}</div>
            </div>


            <div className='convOutput'>
                <button onClick={handleConversion}>Convert</button>
            </div>
        </div>
    </main>
  );
}