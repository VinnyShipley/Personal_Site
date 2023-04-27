import Link from 'next/link';

export default function BlogLandingPage() {
	return (
		<>
			<main className='bg-gray-500 mt-45 py-10'>
				<div class='title'>
					<h1 className='bg-gray-400 text-4xl text-center py-10'>
						Vinny Shipley Personal Website
					</h1>
				</div>
				<h2 className='bg-gray-300 m-50 py-10'>
					<Link href='/blog'>To Blog Page</Link>
					<br></br>
					<Link href='/projects'>To Project Page</Link>
				</h2>
			</main>
		</>
	);
}
