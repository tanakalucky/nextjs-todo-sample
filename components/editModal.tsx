'use client';

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7LeVbTBqASu
 */
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChangeEvent, SyntheticEvent } from 'react';
import { editTodo, getTodos } from '@/lib/api';
import { useTodos } from '@/lib/hooks';
import { useEditTodoModalStore } from '@/store/editTodoModalStore';

export function EditTodoModal() {
  const isOpen = useEditTodoModalStore((state) => state.isOpen);
  const close = useEditTodoModalStore((state) => state.close);
  const id = useEditTodoModalStore((state) => state.id);
  const contents = useEditTodoModalStore((state) => state.contents);
  const setContents = useEditTodoModalStore((state) => state.setContents);
  const { setTodos } = useTodos();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      contents: { value: string };
    };

    editTodo(
      { id, contents: target.contents.value },
      () => {
        close();

        getTodos(
          (res) => setTodos(res),
          (error) => console.log('error occurred ', error),
        );
      },
      (error) => console.log('error occurred ', error),
    );
  };

  return (
    <>
      {isOpen && (
        <div className='ma fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-0'>
          <Card className='mx-auto my-4 p-4 w-[80vw] max-w-[500px] bg-white'>
            <CardHeader>
              <CardTitle className='text-2xl font-bold'>Edit Todo Item</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-2'>
                  <Label htmlFor='todo-title'>Todo</Label>
                  <Input
                    id='todo-title'
                    placeholder='Enter the todo'
                    name='contents'
                    value={contents}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex justify-end gap-2'>
                  <Button className='bg-black text-white' onClick={close}>
                    Close
                  </Button>
                  <Button className='bg-black text-white' type='submit'>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
