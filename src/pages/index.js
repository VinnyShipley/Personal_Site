import HeaderImage from '@/components/headerimage';
import SideBar from '../components/sidebar';

function MainLandingPage() {
	return (
		<>
			<main>
				<div>
					<HeaderImage />

					<div className='bg-accent py-9'>
						<h1 className='bg-basic text-4xl text-center ml-16 pb-2.5'>
							Vinny Shipley Personal Website
						</h1>
					</div>

					<SideBar />
				</div>
			</main>
		</>
	);
}

export default MainLandingPage;
