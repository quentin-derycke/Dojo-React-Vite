import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Flex } from '@/components/ui/Flex';

export function TaskForm({ onSubmit, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('info');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const task = {
      id: Date.now(),
      title,
      description,
      status: 'todo',
      priority,
    };

    onSubmit(task);
    onClose(); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Description (optionnel)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        options={[
          { value: 'info', label: 'Info' },
          { value: 'warning', label: 'Warning' },
          { value: 'success', label: 'Success' },
          { value: 'error', label: 'Error' },
        ]}
      />
      <Flex justify="end" gap="2">
        <Button type="submit" variant="primary">
          Créer
        </Button>
      </Flex>
    </form>
  );
}
