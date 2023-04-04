import React, { useState } from 'react'

import plus from '../assets/plus-icon.svg'


const Greet = ({openGreet ,onCloseGreet}) => {
    if (!openGreet) return null
    return (
      <div role="dialog" aria-labelledby="greetingMenu" >
            <div className="info-wrapper">
               <div className="greet-card">
                    <div className="greet-header">
                            <h1>วันนี้คุณให้ความสำคัญกับการทำ<span>อะไร ?</span></h1>
                            <form action="" className="todo">
                            <input placeholder="ข้อมูลสิ่งที่คุณอยากทำในวันนี้" className="input" type="text" />
                            <label  htmlFor="task"  className="label mt-1">ข้อมูลสิ่งที่คุณอยากทำในวันนี้</label>
                            <button
                                className="btn first-btn"
                                aria-label="Add Task"
                                type="submit"
                                >
                                {/* <PlusIcon /> */}
                                <img className="plus-icon" src={plus} alt="add-todo" />
                            </button>
                            </form>
                        <p>test</p>
                    </div>
               </div>
            
            </div>
      </div>
    )
  }

export default Greet