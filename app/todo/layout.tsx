import { CreateModal } from '@/components/createModal';
import { EditTodoModal } from '@/components/editModal';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full max-w-lg mx-auto p-6 space-y-4'>
      {children}
      <CreateModal />
      <EditTodoModal />
    </div>
  );
}
