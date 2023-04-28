import Link from 'next/link';

export default function ProjectsLandingPage() {
  return (
    <>
      <h1 className="text-4xl text-center text-bold bg-gray-300 m-50 py-10">Projects Landing Page</h1>
      <h2 className="bg-gray-200 m-50 py-10">
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}