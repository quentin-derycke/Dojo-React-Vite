function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt('Enter a task');
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mb-4" onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-1">
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🔄 Ici, on utilise useState pour gérer un tableau de tâches.
// ⚠️ Important : on copie l’ancien tableau (...tasks) pour éviter de muter l’état.
