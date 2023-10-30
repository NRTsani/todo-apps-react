import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, setFilter, toggleCompleted } from './redux/reducers/taskSlice';
import TaskInput from './components/FormToDo';
import TaskFilter from './components/FilterTask';
import TaskItem from './components/TaskItem';
import Navbar from "./components/Navbar";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskFilter = useSelector((state) => state.tasks.taskFilter);
  const dispatch = useDispatch();

  const addTaskHandler = (text) => {
    dispatch(addTask({ text }));
  };

  const setFilterHandler = (filter) => {
    dispatch(setFilter(filter));
  };

  const toggleCompletedHandler = () => {
    dispatch(toggleCompleted());
  };

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
      <Navbar />
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Find Your Zen in every Task!</h1>
      <TaskInput addTask={addTaskHandler} />
      <TaskFilter
        taskFilter={taskFilter}
        setFilter={setFilterHandler}
        toggleCompleted={toggleCompletedHandler}
      />
      <ul className="list-group" id="taskList">
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
    </div>
    </>
    
  );
}

export default App;
