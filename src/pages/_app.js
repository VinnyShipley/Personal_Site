import React from 'react';
import '@/styles/globals.css';
import SideBar from './sidebar';
import MainLandingPage from '.';






class App extends React.Component {
	render() {
		return (
			<div>
					<div>
						<MainLandingPage />
						<SideBar />
					</div>

			
			</div>
		);
	}
}

export default App;
