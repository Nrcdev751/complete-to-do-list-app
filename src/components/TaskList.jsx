import { useState } from 'react';
// component import
import TaskItem from './TaskItem';
import { ChevronUpIcon} from '@heroicons/react/24/outline';
import { ChevronDownIcon} from '@heroicons/react/24/outline';

// styles
import styles from './TaskList.module.css';

function sortTasksAsc(a, b) {
  return a.id - b.id;
}

function sortTasksDsc(a, b) {
  return b.id - a.id;
}

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode, propCount }) => {
  const [sortOrder, setSortOrder] = useState('dsc'); // initialize state for sorting order

  const sortedTasks = tasks.slice().sort(sortOrder === 'asc' ? sortTasksAsc : sortTasksDsc);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'dsc' : 'asc');
  }
  return (
   <>
    {propCount > 0 && (
      <span onClick={toggleSortOrder}>
        {sortOrder === 'asc' ?
          <div className="icon-right">   
          <ChevronUpIcon width={25}/>
          </div>
      
         :
        
         <div className="icon-right">
            <ChevronDownIcon width={25} />
         </div>
          }
      </span>
    )}
     
      <ul className={styles.tasks}>
        
      {sortedTasks.map(task => (
  
           <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
     
       
      ))}
          </ul>
   </>
  )
}
export default TaskList