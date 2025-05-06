function TaskInput() {
  const [task, setTask] = useState('');

  const handleSubmit = () => {
    if (task.trim() !== '') {
      console.log('New Task:', task);
      setTask('');
    }
  };

  return (
    <div className="form-control">
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className="btn mt-2" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;
// 🧠 Ici, useState permet de lier un input HTML à l’état React.
// On appelle ça un input contrôlé.
