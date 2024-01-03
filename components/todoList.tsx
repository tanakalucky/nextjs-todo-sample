import { getTodos } from '@/api/server';
import { Todo } from '@/api/types';
import { Card } from '@/components/ui/card';
import EditButton from '@/components/editButton';
import DeleteButton from '@/components/deleteButton';

export default async function TodoList() {
  const todos: Todo[] = await getTodos();

  return (
    <Card className='divide-y'>
      {todos.map((todo) => (
        <div className='flex items-center space-x-2 p-2' key={todo.id}>
          <span className='flex-grow px-2'>{todo.contents}</span>
          <EditButton id={todo.id} />
          <DeleteButton id={todo.id} />
        </div>
      ))}
    </Card>
  );
}
