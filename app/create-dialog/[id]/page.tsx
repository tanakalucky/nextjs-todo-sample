import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>
        Something went wrong.
        <br />
        Please return top page below.
      </div>
      <Link href='/' className='font-bold text-sky-600 underline decoration-sky-600'>
        Go to top page
      </Link>
    </>
  );
}
