import { createContext, useContext } from 'react';
import { useLocalStorageReducer } from '@/hooks/useLocalStorageReducer';

const TaskContext = createContext();

const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((t) => (t.id === action.payload.id ? action.payload : t));
    case 'DELETE':
      return state.filter((t) => t.id !== action.payload);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useLocalStorageReducer('kanban-tasks', taskReducer, [
    {
      id: 1,
      title: 'Setup projet',
      status: 'todo',
      priority: 'primary',
    },
  ]);

  const createTask = (task) => dispatch({ type: 'CREATE', payload: task });
  const updateTask = (task) => dispatch({ type: 'UPDATE', payload: task });
  const deleteTask = (id) => dispatch({ type: 'DELETE', payload: id });

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
