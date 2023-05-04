import '@/styles/globals.css'
import SideBar from './sidebar'
import MainLandingPage from '.';
import MenuButton from './menubutton';
import Header from './header'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Header />
    <div className='' id='sidebar'>
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
  let sidebar = document.getElementById("sidebar");
  console.log(sidebar)

  menu.style.scale = 0;
  sidebar.style.scale = 100;
  
}
