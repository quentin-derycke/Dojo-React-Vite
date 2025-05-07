import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Flex } from '@/components/ui/Flex';

export function TaskForm({ onSubmit, onClose, defaultStatus = 'todo', initialTask = {} }) {
    const [title, setTitle] = useState(initialTask.title || '');
    const [description, setDescription] = useState(initialTask.description || '');
    const [priority, setPriority] = useState(initialTask.priority || 'info');
    const [status, setStatus] = useState(initialTask.status || defaultStatus);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const task = {
            ...initialTask,
            id: initialTask.id ?? Date.now(),
            title,
            description,
            status,
            priority,
        };


        onSubmit(task);
        onClose?.();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titre" />
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
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
            <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                    { value: 'todo', label: 'À faire' },
                    { value: 'in-progress', label: 'En cours' },
                    { value: 'done', label: 'Terminé' },
                ]}
            />
            <Flex justify="end" gap="2">
                <Button type="submit" variant="primary">
                    {initialTask?.id ? 'Modifier' : 'Créer'}
                </Button>
            </Flex>
        </form>
    );
}
