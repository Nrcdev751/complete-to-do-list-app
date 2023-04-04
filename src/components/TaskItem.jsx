import { useState } from 'react';

// img
import bin from '../assets/recycle-bin-icon.svg'
import pen from '../assets/edit-pen-icon.svg'

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={30} height={30}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn btn-none grey' 
          aria-label={`Update ${task.name} Task `}
          onClick={() => enterEditMode(task)}
        >
            <img className="grey" src={pen} alt="edit-todo" />
        </button>

        <button
          className={`btn btn-none grey ${styles.delete} `}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
               <img className="grey" src={bin} alt="del-todo" />
        </button>

      </div>
    </li>
  )
}
export default TaskItem