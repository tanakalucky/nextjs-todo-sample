'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SVGProps } from 'react';
import { deleteTodo } from '@/api/client';

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  const handleClick = async () => {
    await deleteTodo({ id }).then(() => {
      router.replace('/');
      router.refresh();
    });
  };

  return (
    <Button className='w-6 h-6 p-0 text-white bg-black' onClick={handleClick}>
      <TrashIcon className='w-4 h-4' />
    </Button>
  );
}

const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
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
};
