import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/reducers/taskSlice';
import TaskItem from './TaskItem';

function TaskFilter() {
  const dispatch = useDispatch();
  const taskFilter = useSelector((state) => state.tasks.taskFilter);
  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === 'completed') {
      return task.completed;
    } else if (taskFilter === 'active') {
      return !task.completed;
    }
    return true; // 'all' filter
  });

  return (
    <>
      <div className="btn-group mb-4 d-flex">
        <button
          className={`btn ${taskFilter === 'all' ? 'btn-primary' : 'btn-light'}`}
          style={taskFilter === 'all' ?{alignSelf: 'center', backgroundColor: "#471AA0"}:{alignSelf: 'center', backgroundColor: ""} }
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={`btn ${taskFilter === 'completed' ? 'btn-primary' : 'btn-light'}`}
          style={taskFilter === 'completed' ?{alignSelf: 'center', backgroundColor: "#471AA0"}:{alignSelf: 'center', backgroundColor: ""} }
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed
        </button>
        <button
          className={`btn ${taskFilter === 'active' ? 'btn-primary' : 'btn-light'}`}
          style={taskFilter === 'active' ?{alignSelf: 'center', backgroundColor: "#471AA0"}:{alignSelf: 'center', backgroundColor: ""} }
          onClick={() => dispatch(setFilter('active'))}
        >
          Active
        </button>

      </div>
      <ul className="list-group" id="taskList">
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>

    </>
    
  );
}

export default TaskFilter;
