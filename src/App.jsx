import React,{ useState } from 'react'

// custom hooks
import Modal from 'react-modal';
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import Navbar from './components/Navbar'
import Infoitem from './components/Infoitem'
import Greeting from './components/Greeting'

// img
import note from './assets/header-img.png'
import info from './assets/info-mark.svg'
import pen from './assets/edit-pen-icon.svg'


function App() {
  const [data, setData] = useState(null);
  const [openGreet, SetOpenGreet] = useState(true)
  const [openModal, SetOpenModal] = useState(false)
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
  
    if(confirm("คุณต้องการจะลบหรือไม่")){
      setTasks(prevState => prevState.filter(t => t.id !== id));
    }
   
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  function getData(val){
    setData(val.target.value)
    console.log(val.target.value)
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <>
    <Navbar />

    <section className="to-do-list">
      
    <div className="grid-to-do">
        <div className="container">
          <header>
            <div className="header-img">
              <img src={note} alt="todonote" />
            </div>
            <div className="header-info">
              <h1>TO-DO-<span>LIST</span></h1>
              <div className="header-title">
              <p>{data}</p>
             <button onClick={() =>  SetOpenGreet(true)}>
                <img src={pen} className="grey" width={15} alt="" />
             </button>
              </div>
            </div>
          </header>
          <div className="card">
            {isEditing && (
              <EditForm
                editedTask={editedTask}
                updateTask={updateTask}
                closeEditMode={closeEditMode} />
            )}
      
            <CustomForm addTask={addTask} />
            {tasks && (
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode} />
            )}
            <button  onClick={() => SetOpenModal(true)}>
              <img src={info} className="info grey" width={25} alt="" />
            </button>
            <Infoitem open={openModal} onClose={() => SetOpenModal(false)}/>
            <Greeting openGreet={openGreet} onCloseGreet={() => SetOpenGreet(false)} setData={setData} />
              
         
          </div>
          
        </div>
        
    </div>
    </section>
  
    </>
  )
}

export default App
