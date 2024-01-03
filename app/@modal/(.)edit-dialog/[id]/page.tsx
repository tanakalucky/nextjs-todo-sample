'use client';

import Modal from '@/components/modal';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEditModal } from '@/lib/hooks';

export default function Page() {
  const { contents, handleChange, handleSubmit } = useEditModal();

  return (
    <Modal>
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
          <div className='flex justify-end'>
            <Button className='bg-black text-white' type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Modal>
  );
}
