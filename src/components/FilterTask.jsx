import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, toggleCompleted } from '../redux/reducers/taskSlice';

function TaskFilter({ taskFilter }) {
  const dispatch = useDispatch();

  return (
    <div className="btn-group mb-2 d-flex">
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
  );
}

export default TaskFilter;
