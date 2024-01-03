import CreateButton from '@/components/createButton';
import { Suspense } from 'react';
import TodoList from '@/components/todoList';
import TodoListSkeleton from '@/components/todoListSkeleton';

export default function Page() {
  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Todo List</h1>
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoList />
      </Suspense>
      <div className='flex justify-end'>
        <CreateButton />
      </div>
    </>
  );
}
