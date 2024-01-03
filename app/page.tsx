import { Card } from '@/components/ui/card';
import { Todo } from '@/lib/defenitions';
import CreateButton from '@/components/createButton';
import { getTodos } from '@/lib/api';
import DeleteButton from '@/components/deleteButton';
import EditButton from '@/components/editButton';

export default async function Page() {
  const todos: Todo[] = await getTodos();

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Todo List</h1>
      <Card className='divide-y'>
        {todos.map((todo) => (
          <div className='flex items-center space-x-2 p-2' key={todo.id}>
            <span className='flex-grow px-2'>{todo.contents}</span>
            <EditButton id={todo.id} />
            <DeleteButton id={todo.id} />
          </div>
        ))}
      </Card>
      <div className='flex justify-end'>
        <CreateButton />
      </div>
    </>
  );
}
