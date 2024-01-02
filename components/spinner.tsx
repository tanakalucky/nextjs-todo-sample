'use client';

import { useSpinnerStore } from '@/store/spinnerStore';

export const Spinner = () => {
  const isShow = useSpinnerStore((state) => state.isShow);

  return (
    <>
      {isShow && (
        <div className='ma fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 z-0'>
          <div className='animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent' />
        </div>
      )}
    </>
  );
};
