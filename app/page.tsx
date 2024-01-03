import { Card } from '@/components/ui/card';
import { SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { Todo } from '@/lib/defenitions';
import CreateButton from '@/components/createButton';
import { getTodos } from '@/lib/api';

export default async function Page() {
  const todos: Todo[] = await getTodos();

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>Todo List</h1>
      <Card className='divide-y'>
        {todos.map((todo) => (
          <div className='flex items-center space-x-2 p-2' key={todo.id}>
            <span className='flex-grow px-2'>{todo.contents}</span>
            <Button className='w-6 h-6 p-0 text-white bg-black'>
              <PencilIcon className='w-4 h-4' />
            </Button>
            <Button className='w-6 h-6 p-0 text-white bg-black'>
              <TrashIcon className='w-4 h-4' />
            </Button>
          </div>
        ))}
      </Card>
      <div className='flex justify-end'>
        <CreateButton />
      </div>
    </>
  );
}

function PencilIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
      <path d='m15 5 4 4' />
    </svg>
  );
}

function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
  );
}
