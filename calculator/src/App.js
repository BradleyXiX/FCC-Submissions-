import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = (val) => {
    return ['+', '-', '*', '/'].includes(val);
  };

  const handleNumber = (val) => {
    if (evaluated) {
      setDisplay(val);
      setFormula(val);
      setEvaluated(false);
    } else {
      if (display === '0') {
        setDisplay(val);
        setFormula(val);
      } else {
        setDisplay(display + val);
        setFormula(formula + val);
      }
    }
  };

  const handleOperator = (val) => {
    if (evaluated) {
      setFormula(display + val);
      setDisplay(val);
      setEvaluated(false);
    } else {
      if (isOperator(formula.slice(-1)) && val !== '-') {
   
        if (isOperator(formula.slice(-2, -1)) && formula.slice(-1) === '-') {

          setFormula(formula.slice(0, -2) + val);
        } else {
          setFormula(formula.slice(0, -1) + val);
        }
      } else if (formula.slice(-1) === '-' && isOperator(formula.slice(-2, -1)) && val === '-') {
       
        return;
      } else {
        setFormula(formula + val);
      }
      setDisplay(val);
    }
  };

  const handleDecimal = () => {
    if (evaluated) {
      setDisplay('0.');
      setFormula('0.');
      setEvaluated(false);
    } else {
      if (!display.includes('.')) {
        setDisplay(display + '.');
       
        if (isOperator(formula.slice(-1))) {
          setFormula(formula + '0.');
        } else {
          setFormula(formula + '.');
        }
      }
    }
  };

  const handleEquals = () => {
    try {
      let expression = formula;
      
  
      if (isOperator(expression.slice(-1))) {
        expression = expression.slice(0, -1);
      }
      
     
      const result = parseFloat(eval(expression).toFixed(15));
      setDisplay(String(result));
      setFormula(expression + '=' + result);
      setEvaluated(true);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setFormula('');
    setEvaluated(false);
  };

  return (
    <div className="calculator">
      <div className="formula">{formula}</div>
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>AC</button>
        <button id="divide" onClick={() => handleOperator('/')}>/</button>
        <button id="multiply" onClick={() => handleOperator('*')}>×</button>
        <button id="seven" onClick={() => handleNumber('7')}>7</button>
        <button id="eight" onClick={() => handleNumber('8')}>8</button>
        <button id="nine" onClick={() => handleNumber('9')}>9</button>
        <button id="subtract" onClick={() => handleOperator('-')}>-</button>
        <button id="four" onClick={() => handleNumber('4')}>4</button>
        <button id="five" onClick={() => handleNumber('5')}>5</button>
        <button id="six" onClick={() => handleNumber('6')}>6</button>
        <button id="add" onClick={() => handleOperator('+')}>+</button>
        <button id="one" onClick={() => handleNumber('1')}>1</button>
        <button id="two" onClick={() => handleNumber('2')}>2</button>
        <button id="three" onClick={() => handleNumber('3')}>3</button>
        <button id="equals" onClick={handleEquals}>=</button>
        <button id="zero" onClick={() => handleNumber('0')}>0</button>
        <button id="decimal" onClick={handleDecimal}>.</button>
      </div>
    </div>
  );
}

export default Calculator;