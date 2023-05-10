import React from 'react';
import '@/styles/globals.css';
import SideBar from './sidebar';
import MenuButton from './menubutton';

let showMenu = false;

const handleMenuClick = (e) => {
  e.preventDefault(e);
  console.log('hello')
}

class App extends React.Component {
	render() {
		return (
			<div>
				{ showMenu &&
					<div>
						<SideBar />
					</div>
				}
				<div>
					<MenuButton onClick={ handleMenuClick }/>
				</div>
			</div>
		);
	}
}

export default App;
