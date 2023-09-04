import SideBar from '../components/sidebar';

function MainLandingPage() {
	return (
		<>
			<main>
				<div>
					<div className='bg-basic py-9'>
						<h1 className='text-4xl text-center ml-16 pb-2.5 '>
							Welcome to the Personal Website for Vinny Shipley
						</h1>
					</div>
					<SideBar />
					<div id='home-about' className='space-y-14'>
						<h2 className='flex justify-center text-3xl  font-bold mt-14'>
							About
						</h2>
						<p className='flex justify-center pt-8 text-2xl'>
							Follow the journey of a bartender turned software engineer on the hunt for employment in the tech sphere
						</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default MainLandingPage;
