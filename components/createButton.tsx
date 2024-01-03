'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CreateButton() {
  const router = useRouter();

  return (
    <Button className='bg-black text-white' onClick={() => router.push('/create-dialog', { scroll: false })}>
      Add New Task
    </Button>
  );
}
