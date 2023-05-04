import Link from 'next/link';

function MainLandingPage() {
	return (
		<>
			<main className='bg-secondary mt-45 py-10'>
				<div>
					<h1 className='bg-primary text-4xl text-center py-10'>
						Vinny Shipley Personal Website
					</h1>
				</div>
					<nav className='flex justify-center space-x-20 focus:bg-black'>

						<Link href='/blog'>To Blog Page</Link>

						<Link href='/projects'>To Projects Page</Link>

					</nav>
				

			</main>
		</>
	);
}

export default MainLandingPage;
