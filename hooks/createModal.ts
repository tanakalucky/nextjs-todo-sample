import { createTodo } from '@/api/client';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

export const useCreateModal = () => {
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      contents: { value: string };
    };

    await createTodo({ contents: target.contents.value }).then(() => {
      router.back();
      router.refresh();
    });
  };

  return { handleSubmit };
};
