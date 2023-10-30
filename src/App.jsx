import React from 'react';
import TaskInput from './components/FormToDo';
import TaskFilter from './components/FilterTask';
import Navbar from "./components/Navbar";

function App() {


  return (
    <>
      <Navbar />
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Find Your Zen in every Task!</h1>
      <TaskInput />
      <TaskFilter />
    </div>
    </>
    
  );
}

export default App;
