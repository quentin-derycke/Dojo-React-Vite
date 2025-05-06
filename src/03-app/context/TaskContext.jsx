import { createContext, useContext } from 'react';
import { useLocalStorageReducer } from '@/hooks/useLocalStorageReducer';

const TaskContext = createContext();

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Tâche 1',
      status: 'todo',
      priority: 'info',
    },
  ],
  filterText: '',
  priority: '',
  status: ''
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case 'DELETE':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
      case 'SET_STATUS':
  return { ...state, status: action.payload };
    case 'SET_FILTER_TEXT':
      return { ...state, filterText: action.payload };
    case 'SET_PRIORITY':
      return { ...state, priority: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useLocalStorageReducer('kanban-tasks', taskReducer, initialState);

  const createTask = (task) => dispatch({ type: 'CREATE', payload: task });
  const updateTask = (task) => dispatch({ type: 'UPDATE', payload: task });
  const deleteTask = (id) => dispatch({ type: 'DELETE', payload: id });
  const setStatus = (value) => dispatch({ type: 'SET_STATUS', payload: value });
  const setFilterText = (text) => dispatch({ type: 'SET_FILTER_TEXT', payload: text });
  const setPriority = (value) => dispatch({ type: 'SET_PRIORITY', payload: value });

  const filteredTasks = (state.tasks || []).filter((task) => {
    const matchText = task.title.toLowerCase().includes(state.filterText.toLowerCase());
    const matchPriority = !state.priority || task.priority === state.priority;
    const matchStatus = !state.status || task.status === state.status;
    return matchText && matchPriority && matchStatus;
  });
  

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        filteredTasks,
        filterText: state.filterText,
        priority: state.priority,
        createTask,
        updateTask,
        deleteTask,
        setFilterText,
        setPriority,
        setStatus
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
