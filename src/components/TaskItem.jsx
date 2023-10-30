import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTask, editTask } from '../redux/reducers/taskSlice';

function TaskItem({ task, index }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleToggleComplete = () => {
    dispatch(toggleComplete(index));
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(index));
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSaveEdit = () => {
    dispatch(editTask({ index, text: editedTask }));
    setIsEditing(false);
  }

  const handleChange = (e) => {
    setEditedTask(e.target.value); // Handle Enter key press
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  }

  return (
    <li className={"list-group-item d-flex align-items-center"}>
      <div className="task-text w-100">
        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control"
              value={editedTask}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
            />
            <button className="btn mt-2 btn-success" style={{backgroundColor: "#18A540"}} onClick={handleSaveEdit}>
              Save
            </button>
          </div>
        ) : (
          <div className='d-flex justify-content-between w-100'>
            <div className='d-flex align-items-center w-75 justify-content-between'>
              <input
                type="checkbox"
                style={{width: "32px", height: "32px", Color: "#471AA0"}}
                checked={task.completed}
                onChange={handleToggleComplete}
              />
              <span className="task-text h3 m-0 w-100" style={task.completed?{textDecoration:'line-through',wordBreak: "break-all"}:{textDecoration:'none', wordBreak: "break-all"}}>
                {task.text}
              </span>
            </div>
            
            <div className='d-flex'>
              <button className="btn btn-primary" style={{alignSelf: 'center', backgroundColor: "#471AA0"}} onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-danger ml-2" style={{alignSelf: 'center', backgroundColor: "#CE1821"}} onClick={handleRemoveTask}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
