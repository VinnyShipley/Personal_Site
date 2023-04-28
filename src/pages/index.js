import Link from 'next/link';

export default function MainLandingPage() {
	return (
		<>
			<main className='bg-gray-500 mt-45 py-10'>
				<div class='title'>
					<h1 className='bg-gray-400 text-4xl text-center py-10'>
						Vinny Shipley Personal Website
					</h1>
				</div>
					<nav class='flex justify-center space-x-20 '>

						<Link href='/blog'>To Blog Page</Link>

						<Link href='/projects'>To Project Page</Link>

					</nav>

			</main>
		</>
	);
}
