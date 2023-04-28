import Link from 'next/link';

export default function BlogLandingPage() {
  return (
    <>
      <h1 className="text-4xl text-center text-bold bg-gray-300 m-50 py-10">Blog Landing Page</h1>
      <h2 className="bg-gray-200 m-50 py-10">
        <Link href="/">Back to home</Link>
      </h2>
      <p className='text-center'>Blog portion coming soon!</p>
    </>
  );
}