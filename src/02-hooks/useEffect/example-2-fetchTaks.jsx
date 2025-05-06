import { useState, useEffect } from 'react';

function FetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>{t.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FetchTasks;
