import { useState } from 'react';
import { Board } from '@/components/kanban/Board';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Flex } from '@/components/ui/Flex';

export default function Home() {
  const [filterText, setFilterText] = useState('');
  const [priority, setPriority] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Setup projet', status: 'todo', priority: 'primary' },
    { id: 2, title: 'Développer layout', status: 'in-progress', priority: 'warning' },
    { id: 3, title: 'Finaliser tâches', status: 'done', priority: 'success' },
  ]);

  // Création d'une tâche via prompt (à remplacer par un modal ensuite)
  const handleCreate = (status) => {
    const title = prompt('Titre de la tâche ?');
    if (!title) return;
    const newTask = {
      id: Date.now(),
      title,
      status,
      priority: 'info',
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Filtrage des tâches
  const filteredTasks = tasks.filter((task) => {
    const matchesText = task.title.toLowerCase().includes(filterText.toLowerCase());
    const matchesPriority = !priority || task.priority === priority;
    return matchesText && matchesPriority;
  });

  return (
    <div className="space-y-4">
      <Flex gap="4">
        <Input
          placeholder="Rechercher une tâche..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={[
            { value: '', label: 'Toutes priorités' },
            { value: 'info', label: 'Info' },
            { value: 'warning', label: 'Warning' },
            { value: 'success', label: 'Success' },
          ]}
        />
      </Flex>

      <Board tasks={filteredTasks} onCreate={handleCreate} />
    </div>
  );
}
