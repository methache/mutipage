import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // ฟังก์ชันจัดการฟอร์แมตตัวเลขให้มีเครื่องหมายลูกน้ำ
  const formatNumberWithComma = (num) => {
    if (!num) return '';
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  // ฟังก์ชันลบลูกน้ำก่อนคำนวณ
  const removeComma = (num) => {
    return num.replace(/,/g, '');
  };

  // ฟังก์ชันสำหรับจัดการเมื่อคลิกปุ่ม
  const handleClick = (value) => {
    setInput((prev) => {
      const rawValue = removeComma(prev) + value; // ลบลูกน้ำก่อนเพิ่มค่าใหม่
      return formatNumberWithComma(rawValue); // แปลงเป็นฟอร์แมตที่มีลูกน้ำ
    });
  };

  // ฟังก์ชันเคลียร์ค่า
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // ฟังก์ชันคำนวณ
  const calculateResult = () => {
    try {
      const rawInput = removeComma(input); // ลบลูกน้ำก่อนการคำนวณ
      const evalResult = eval(rawInput); // ใช้ eval สำหรับคำนวณ
      setResult(formatNumberWithComma(evalResult.toString())); // แสดงผลลัพธ์พร้อมลูกน้ำ
    } catch (error) {
      setResult('Error');
    }
  };

  // ฟังก์ชันจับการกดปุ่มคีย์บอร์ด
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (!isNaN(key) || key === '.') {
        handleClick(key); // กดตัวเลขหรือจุด
      } else if (['+', '-', '*', '/'].includes(key)) {
        handleClick(key); // กดเครื่องหมายคำนวณ
      } else if (key === 'Enter') {
        calculateResult(); // กด Enter เพื่อคำนวณ
      } else if (key === 'Backspace') {
        setInput((prev) => formatNumberWithComma(removeComma(prev).slice(0, -1))); // ลบตัวอักษร
      } else if (key === 'Escape') {
        clearInput(); // กด Escape เพื่อเคลียร์ค่า
      }
    };

    // ฟังก์ชันเพิ่ม event listener เมื่อ component mount
    window.addEventListener('keydown', handleKeyDown);

    // ฟังก์ชันลบ event listener เมื่อ component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <div className='calculator-container'>
      <h1>Calculator</h1>
      <div className='calculator-display'>
        <input
          type='text'
          value={input}
          disabled
          aria-label="Calculator input"
        />
        <h2>{result}</h2>
      </div>
      <div className='calculator-buttons'>
        {/* ตัวเลข */}
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('/')}>/</button>

        {/* ปุ่มคำนวณ */}
        <button className='equal-button' onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
