import React, { useState, useEffect } from 'react';
import plus from '../assets/plus-icon.svg';
import btnx from '../assets/x-icon.svg';

const Greet = ({ openGreet, onCloseGreet, data, setData }) => {
  const handleInputChange = (event) => {
    setData(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to handle form submission
  };

  if (!openGreet) return null;
  return (
    <div role="dialog" aria-labelledby="greetingMenu">
      <div className="info-wrapper">
        <div className="greet-card">
          <button className="cross-btn" onClick={onCloseGreet}>
            <img src={btnx} className="grey" width={15} alt="" />
          </button>
          <div className="greet-header">
            <h1>
              วันนี้คุณให้ความสำคัญกับการทำ<span>อะไร ?</span>
            </h1>
            <form onSubmit={handleSubmit} className="todo">
              <input
                placeholder="ข้อมูลสิ่งที่คุณอยากทำในวันนี้"
                value={data}
                onChange={handleInputChange}

                className="input"
                type="text"
              />
              <label htmlFor="task" className="label mt-1">
                ข้อมูลสิ่งที่คุณอยากทำในวันนี้
              </label>
              <button
                onClick={onCloseGreet}
                className="btn first-btn"
                aria-label="Add Task"
                type="submit"
              >
                <img className="plus-icon" src={plus} alt="add-todo" />
              </button>
            </form>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
