import { useState } from 'react';
import img2 from "./pngwing.com.png"


function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Boş bir değer giremezsiniz.');
      return;
    }
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle('');
    setTaskDesc('');
  };

  return (
    <div>
      {' '}
      {taskformUpdate ? (
        <div className="taskupdate">
          
          <form className="taskform">
           
            <input
              value={title}
              onChange={handleChange}
              className="taskinput"
            />
           
           <img src={img2} alt=""onClick={handleSubmit} className='img2' />
           
          </form>
        </div>
      ) : (
        <div className="addcreate">
        
          <form className="taskform2">
           
            <input
              value={title}
              onChange={handleChange}
              className="taskaddinput"
              maxLength={40}
            />
           
            <button className="addbtn" onClick={handleSubmit}>
              Ekle☠️
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
