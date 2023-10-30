import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      { text: 'Example task 1', completed: false },
      { text: 'Example task 2', completed: true },
      // Add more tasks with completed property
    ],
    taskFilter: 'all',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ text: action.payload.text, completed: false });
    },
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
    editTask: (state, action) => {
      state.tasks[action.payload.index].text = action.payload.text;
    },
    toggleComplete: (state, action) => {
      const index = action.payload;
      if (index => 0 && index < state.tasks.length) {
        state.tasks[index].completed = !state.tasks[index].completed; // Toggle completed
      }
    },
    setFilter: (state, action) => {
      state.taskFilter = action.payload;
    },

  },
});

export const { addTask, removeTask, editTask, toggleComplete, setFilter, toggleCompleted } = taskSlice.actions;
export default taskSlice.reducer;
