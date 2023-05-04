import '@/styles/globals.css'
import SideBar from './sidebar'
import MainLandingPage from '.';
import MenuButton from './menubutton';
import Header from './header'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Header />
    <div className='scale-0' id='sidebar'>
    <SideBar />
    </div>
    <div id='menuButton' onClick={ menuButtonClickHandler}>
    <MenuButton />
    </div>
    </div>
  );
}

const menuButtonClickHandler = () => {
  let menu = document.getElementById('menuButtonButton');
  console.log(menu);
  menu.style.backgroundColor = 'red';
  
}
