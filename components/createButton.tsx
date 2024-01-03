'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CreateButton() {
  const router = useRouter();

  return (
    /**
     * @todo 動的ルーティングを併用したインターセプトルーティングを用いると
     * 動的ルーティングを併用しないインターセプトルーティングが正常に動作しない
     * 暫定的に適当なidを指定して新規登録モーダルを表示する
     */
    <Button className='bg-black text-white' onClick={() => router.push('/create-dialog/0', { scroll: false })}>
      Add New Task
    </Button>
  );
}
