import { useState } from 'react';
import TaskCreate from './TaskCreate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import img1 from "./pngegg.png"
import img2 from "./pngwing.com.png"

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="show d-flex flex-row justify-content-center align-items-center text-align-center text-center m-auto">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className='taskshow d-flex flex-row mt-5' >
       <div className='tasktitle'>
       <p className='titlep'>{task.title}</p>
       </div>
          
        
        
          <div className='fa'>
          <img src={img1} alt=""onClick={handleDeleteClick} className='img1' /> 
          <img src={img2} alt=""onClick={handleEditClick} className='img2' />
             
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
