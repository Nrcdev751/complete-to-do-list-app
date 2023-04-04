import { useState } from 'react';

import plus from '../assets/plus-icon.svg'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input type="text" id="task" className="input" value={task} 
        onInput={(e) => setTask(e.target.value)} required autoFocus maxLength={60} placeholder="Enter Task"
        />
        <label  htmlFor="task"  className="label">เพิ่มรายการของท่าน</label>
      </div>
      <button
        className="btn first-btn"
        aria-label="Add Task"
        type="submit"
        >
        {/* <PlusIcon /> */}
        <img className="plus-icon" src={plus} alt="add-todo" />
      </button>
    </form>
  )
}
export default CustomForm