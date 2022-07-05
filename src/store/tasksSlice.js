import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  complete: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more energy drinks'),
  createTask('Water the plants')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.complete = action.payload.complete;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
