import { Flex } from '@/components/ui/Flex';
import { TaskCard } from '@/components/tasks/TaskCard';


export function Column({ title, tasks = [] }) {

  const id = `modal-${title}`;

  return (
    <div className="w-80 shrink-0 bg-base-200 rounded-xl p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <Flex justify="between" align="center" className="mb-2">
        <h2 className="text-md font-bold uppercase">{title}</h2>
      </Flex>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
