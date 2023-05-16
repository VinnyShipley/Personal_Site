import Link from 'next/link';
import SideBar from './sidebar';

export default function BlogLandingPage() {
	return (
		<>
			<SideBar />
			<h1 className='text-4xl text-center text-bold bg-primary m-50 py-10'>
				Blog Landing Page
			</h1>
			<h2 className='bg-secondary m-50 py-10 text-center'>
				Blog portion coming soon!
			</h2>
		</>
	);
}
