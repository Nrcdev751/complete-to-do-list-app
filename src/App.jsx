// library
import Swal from 'sweetalert2';

import React, { useState, useEffect } from 'react'



// custom hooks

import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import Navbar from './components/Navbar'
import Infoitem from './components/Infoitem'
import Greeting from './components/Greeting'
import Footer from './components/Footer';

// img
import note from './assets/header-img.png'
import info from './assets/info-mark.svg'
import pen from './assets/edit-pen-icon.svg'
import Profile from './components/Profile';



function App() {
  const [data, setData] = useState(null);
  const [openGreet, SetOpenGreet] = useState(false)
  const [openModal, SetOpenModal] = useState(false)
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const propCount = Object.keys(tasks).length;

  useEffect(() => {
    const timer = setTimeout(() => {
      SetOpenGreet(true);
    }, 1200); 
    
    return () => clearTimeout(timer);
    }, []);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    Swal.fire({
      title: 'คุณแน่ใจว่าจะลบรายการนี้?',
      text: "หากลบแล้วจะไม่สามารถย้อนกลับมาได้อีก !!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(prevState => prevState.filter(t => t.id !== id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          
        )
      }
    })

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
    SetOpenModal(false);
    SetOpenGreet(false);
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
        <div className="container" id="main">
          <header >
            <div className="header-img">
              <img src={note} className="ani-afk" alt="todonote" />
            </div>
            <div className="header-info ani-header">
              <h1>TO-DO-<span>LIST</span></h1>
              <div className="header-title ">
              <p>{data}</p>
             <button onClick={() =>  SetOpenGreet(true)}>
                <img src={pen} className="grey " width={15} alt="" />
             </button>
              </div>
            </div>
          </header>
          <div className="card ani-pop">
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
           <hr />

     
           <p className="mt-1">รายการทั้งสิ้น <span className="yellow">{propCount}</span> รายการ</p>
         
          </div>
            <Infoitem 
            open={openModal} 
            onClose={() => SetOpenModal(false)}
            closeEditMode={closeEditMode}
            SetOpenModal={SetOpenModal}
            />
            <Greeting openGreet={openGreet} onCloseGreet={() => SetOpenGreet(false)}
            closeEditMode={closeEditMode}
            setData={setData} />
              
          
        </div>
        
    </div>
    </section>
   
    <section className="profile">
    <Profile />
    </section>
     <section className="footer">
      <Footer />
    </section>
  
    </>
  )
}

export default App
