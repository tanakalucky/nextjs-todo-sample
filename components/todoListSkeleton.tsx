import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function TodoListSkeleton() {
  const todos = (() => {
    const todos: string[] = [];
    for (let i = 0; i < 5; i++) todos.push('dammy data');
    return todos;
  })();

  return (
    <Card className='divide-y'>
      {todos.map((todo, index) => (
        <div className='flex items-center space-x-2 p-2' key={index}>
          <Skeleton className='flex-grow px-2 h-[2rem]' />
        </div>
      ))}
    </Card>
  );
}
