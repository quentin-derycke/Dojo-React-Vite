import { useState, useEffect } from 'react';

function usePersistedTasks() {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches au montage
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder les tâches à chaque changement
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return [tasks, setTasks];
}

export default usePersistedTasks;
