import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducers/taskSlice';

function TaskInput() {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch(addTask({ text: taskInput }));
      setTaskInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control me-4 mb-4"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyPress} // Handle Enter key press
      />
      <div className="input-group-append">
        <button className="btn btn-primary" 
        onClick={handleAddTask}
        style={{backgroundColor: "#471AA0"}}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
