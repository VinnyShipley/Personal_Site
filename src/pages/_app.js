import '@/styles/globals.css';
import SideBar from './sidebar';
import MenuButton from './menubutton';

export default function App({ Component, pageProps }) {
	class MenuButton extends Component {
		render() {
			return (
				<div>
					<div>
						<MenuButton onClick={menuButtonClickHandler()} />
					</div>
					<div>{menuShown && <SideBar />}</div>
				</div>
			);
		}
	}
}

const menuButtonClickHandler = () => {
	this.setState({});
};
