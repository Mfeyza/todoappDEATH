import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';
import TaskShow from './components/TaskShow';

function App() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [{
    title:"Developer olmak",id:1,line:false
  }];
  const [tasks, setTasks] = useState(savedTasks);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title,
        line:false,
      },
    ];
    setTasks(createdTasks);
  };
  const handleDoubleclick = (id) => {
   setTasks( tasks.map((item)=> item.id == id ? {...item , line:!tasks.line}: item))
   console.log("a");
  }


  const deleteTaskById = (id) => { if(id==1){
   return;
  }else{
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  }
   
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <p className='mfy'>@MFY</p>
        <p className='mt-5 display-6 ptitle'>Ölmeden Önce Yapılacaklar Listesi</p>
        
      <TaskCreate onCreate={createTask} />
     
     
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
        onToggle={handleDoubleclick}
        
      />
     
      </div>
    </div>
  );
}

export default App;
