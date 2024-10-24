import React, { useState } from 'react';
import './Calculator.module.scss'; // Import the SCSS file directly

const Calculator: React.FC = () => {
  const [result, setResult] = useState('');

  const clearResult = () => setResult('');
  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('Error');
    }
  };
  const appendValue = (value: string) => setResult((prev) => prev + value);

  const handleClick = (value: string) => {
    if (value === 'C') {
      clearResult();
    } else if (value === '=') {
      calculateResult();
    } else {
      appendValue(value);
    }
  };

  const buttons = [
    'C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '=', '1', '2', '3', '0', '.',
  ];

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly className="result" />
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={
              btn === 'C'
                ? 'clear'
                : isNaN(Number(btn))
                ? 'operator'
                : 'number'
            }
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;