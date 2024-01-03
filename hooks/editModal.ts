import { ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { useEditModalStore } from '@/store';
import { useParams, useRouter } from 'next/navigation';
import { editTodo, getTodo } from '@/api/client';

export const useEditModal = () => {
  const router = useRouter();
  const params: { id: string } = useParams();

  const id = params.id;
  if (isNaN(Number(id))) throw Error(`Failed to convert string to number value = ${id}`);
  const contents = useEditModalStore((state) => state.contents);
  const setContents = useEditModalStore((state) => state.setContents);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      contents: { value: string };
    };

    await editTodo({ id: Number(id), contents: target.contents.value }).then(() => {
      router.back();
      router.refresh();
    });
  };

  useEffect(() => {
    // clean up
    setContents('');

    getTodo(Number(id))
      .then((res) => {
        setContents(res.data.item.contents);
      })
      .catch((error) => console.log('error ', error));

    // eslint-why for render first time
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { contents, handleChange, handleSubmit };
};
