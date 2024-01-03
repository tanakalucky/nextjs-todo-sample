'use client';

import { MouseEvent, ReactNode } from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const routerBack = (e: MouseEvent | Event) => {
    /** @note デフォルトの挙動を無効化しないと意図した挙動にならない */
    e.preventDefault();
    router.back();
  };

  return (
    <Dialog defaultOpen>
      <DialogPortal>
        <DialogOverlay className='fixed inset-0 bg-black bg-opacity' />
        <DialogContent onEscapeKeyDown={(e) => routerBack(e)} onPointerDownOutside={(e) => routerBack(e)}>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
