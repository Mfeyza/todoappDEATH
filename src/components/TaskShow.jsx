import { useState } from 'react';
import TaskCreate from './TaskCreate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import img1 from "./pngegg.png"
import img2 from "./pngwing.com.png"

function TaskShow({ task, onDelete, onUpdate,onToggle }) {
  const [showEdit, setShowEdit] = useState(false); //!  görevin düzenleme modunda mı yoksa normal görüntüleme modunda mı olduğunu takip ettim .
  const handleDeleteClick = () => {
    onDelete(task.id); //! prop fonksiyon
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit); //! düzenleme moduna geçmek veya düzenleme modundan çıkmak için , showEdit state'ini tersine çevirdim
  };
  const handleSubmit = (id, updatedTitle) => { //! güncel verileri al onUptade props fonksiyonula güncelle
    setShowEdit(false);
    onUpdate(id, updatedTitle);
  };
 //! showedit true ise taskcreate yi göster değilse düzenleme modunda değilsin
  console.log(task);
  return (
    <div className="show  d-flex flex-row justify-content-center align-items-center text-align-center text-center m-auto">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className='taskshow w-75 d-flex flex-row mt-5' >
       <div className='tasktitle'>
       <p  onClick={()=>onToggle(task.id)} className={task.line ? "text-decoration-line-through" : "titlep"} role="button" >{task.title}</p>
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
