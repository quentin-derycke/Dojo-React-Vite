import { Flex } from '@/components/ui/Flex';
import { Column } from './Column';

export function Board({ tasks, onCreate }) {
  const statuses = ['todo', 'in-progress', 'done'];

  // Regroupe les tâches par statut
  const groupedTasks = statuses.reduce((acc, status) => {
    acc[status] = tasks.filter((t) => t.status === status);
    return acc;
  }, {});

  return (
    <Flex gap="4" className="overflow-x-auto">
      {statuses.map((status) => (
        <Column
          key={status}
          title={status}
          tasks={groupedTasks[status]}
          onCreate={() => onCreate(status)}
        />
      ))}
    </Flex>
  );
}
