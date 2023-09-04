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
					<div id='home-about' className='space-y-14 pl-40'>
						<h2 className='flex justify-center text-3xl  font-bold mt-14'>
							About
						</h2>
						<p className='flex justify-center pt-8 text-2xl'>
							Based in the Pacific Northwest, Vinny Shipley is a bartender turned software engineer looking to break into the professional tech sphere.
						</p>
						<p className='flex justify-center text-2xl'>When not coding, he enjoys getting through the Dune book series and hanging out with his dog Finnegan.</p>
						<p className='flex justify-center text-2xl'>The kid has got moxy, so hire him why don&apos;t ya?</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default MainLandingPage;
