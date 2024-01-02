import { CreateModal } from '@/components/createModal';
import { EditTodoModal } from '@/components/editModal';
import { Spinner } from '@/components/spinner';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='w-full max-w-lg mx-auto p-6 space-y-4'>{children}</div>
      <CreateModal />
      <EditTodoModal />
      <Spinner />
    </>
  );
}
