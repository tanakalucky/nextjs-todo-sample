'use client';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/D7QTgNyw5Wy
 */
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import useSWR from 'swr';
import { SVGProps } from 'react';
import { CreateModal } from '@/components/create-modal';
import axios from 'axios';

export function Todo() {
  async function fetcher(url: string): Promise<{ items: { id: number; contents: string }[] } | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data } = useSWR('/api/todo', fetcher, { refreshInterval: 0 });
  const todos = data?.items ?? [];

  const onDelete = async (id: number) => {
    await axios('http://0.0.0.0:8000/todo/delete', {
      method: 'delete',
      data: { id },
    });
  };

  return (
    <div className='w-full max-w-lg mx-auto p-6 space-y-4'>
      <h1 className='text-2xl font-bold text-center'>Todo List</h1>
      <Card className='divide-y'>
        {todos.map((todo) => (
          <div className='flex items-center space-x-2 p-2' key={todo.id}>
            <span className='flex-grow px-2'>{todo.contents}</span>
            <Button className='w-6 h-6 p-0 text-white bg-black'>
              <PencilIcon className='w-4 h-4' />
            </Button>
            <Button className='w-6 h-6 p-0 text-white bg-black' onClick={() => onDelete(todo.id)}>
              <TrashIcon className='w-4 h-4' />
            </Button>
          </div>
        ))}
      </Card>
      <CreateModal />
    </div>
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
