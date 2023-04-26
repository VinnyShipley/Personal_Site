import Link from 'next/link';

export default function BlogLandingPage() {
  return (
    <>
      <h1 className="text-4xl text-center text-bold">Vinny Shipley Personal Website</h1>
      <h2>
        <Link href="/blog">To Blog Page</Link>
        <br></br>
        <Link href="/projects">To Project Page</Link>
      </h2>
    </>
  );
}