import ProjectCard from '@/components/projectcard';
import SideBar from '../components/sidebar';

function MainLandingPage() {
	return (
		<>
			<main>
				<div>
					<div className='bg-basic py-9'>
						<h1 className='text-4xl text-center ml-16 pb-2.5'>
						Welcome to the Personal Website for Vinny Shipley
						</h1>
					</div>
					<SideBar />
					<h2 className='flex justify-center text-3xl pt-8'>About</h2>
					<p className='flex justify-center pt-8 text-2xl\'>Follow the journey of a bartender turned software engineer on the hunt for employment in the tech sphere</p>
				</div>
				<div id="project-card" className='mt-60'>
				</div>
			</main>
		</>
	);
}

export default MainLandingPage;
