import TaskShow from './TaskShow';

function TaskList({ tasks, onDelete, onUpdate,onToggle }) { //! tasks-görevlerdizisi , silme fonksiyonu, güncelleme fonksiyonu
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
