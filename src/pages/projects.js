import Link from 'next/link';

export default function ProjectsLandingPage() {
  return (
    <>
      <h1 className="text-4xl text-center text-bold">Project Landing Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}