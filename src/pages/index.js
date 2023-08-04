import HeaderImage from '@/components/headerimage';
import Header from '../components/header';
import SideBar from '../components/sidebar';

function MainLandingPage() {
	return (
		<>
			<main >
				<div>
					<div className='pl-44 object-fill'>
					<HeaderImage />
					</div>
					<Header />
					<SideBar />
				</div>
			</main>
		</>
	);
}

export default MainLandingPage;
