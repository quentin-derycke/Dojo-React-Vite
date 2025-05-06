import { useTasks } from '@/context/TaskContext';
import { Board } from '@/components/kanban/Board';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Flex } from '@/components/ui/Flex';

export default function Home() {
    const { filteredTasks, filterText, priority, setFilterText, setPriority, status, setStatus } = useTasks();

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
            { value: 'error', label: 'Error' },
          ]}
        />
      </Flex>

      <Board tasks={filteredTasks} />
    </div>
  );
}
