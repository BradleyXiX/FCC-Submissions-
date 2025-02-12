import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
      setWaitingForOperand(false);
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    // If two operators are entered consecutively, we only consider the last one
    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const calculate = (a, b, op) => {
    switch(op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : Infinity; // Prevent division by zero
      default: return b;
    }
  };

  const equals = () => {
    if (firstOperand !== null && operator) {
      const result = calculate(firstOperand, parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="App">
      <div id="display">{displayValue}</div>
      <div className="buttons">
        <button id="zero" onClick={() => inputDigit(0)}>0</button>
        <button id="one" onClick={() => inputDigit(1)}>1</button>
        <button id="two" onClick={() => inputDigit(2)}>2</button>
        <button id="three" onClick={() => inputDigit(3)}>3</button>
        <button id="four" onClick={() => inputDigit(4)}>4</button>
        <button id="five" onClick={() => inputDigit(5)}>5</button>
        <button id="six" onClick={() => inputDigit(6)}>6</button>
        <button id="seven" onClick={() => inputDigit(7)}>7</button>
        <button id="eight" onClick={() => inputDigit(8)}>8</button>
        <button id="nine" onClick={() => inputDigit(9)}>9</button>
        <button id="add" onClick={() => performOperation('+')}>+</button>
        <button id="subtract" onClick={() => performOperation('-')}>-</button>
        <button id="multiply" onClick={() => performOperation('*')}>×</button>
        <button id="divide" onClick={() => performOperation('/')}>÷</button>
        <button id="equals" onClick={equals}>=</button>
        <button id="decimal" onClick={inputDecimal}>.</button>
        <button id="clear" onClick={clear}>AC</button>
      </div>
    </div>
  );
}

export default App;