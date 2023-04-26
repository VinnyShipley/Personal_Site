import Link from 'next/link';

export default function BlogLandingPage() {
  return (
    <>
      <h1 className="text-4xl text-center text-bold">Blog Landing Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}