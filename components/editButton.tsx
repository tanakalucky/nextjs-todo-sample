'use client';

import { SVGProps } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type EditButtonProps = {
  id: number;
};

export default function EditButton({ id }: EditButtonProps) {
  const router = useRouter();

  const handleClick = () => router.push(`/edit-dialog/${id}`, { scroll: false });

  return (
    <Button className='w-6 h-6 p-0 text-white bg-black' onClick={handleClick}>
      <PencilIcon className='w-4 h-4' />
    </Button>
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
