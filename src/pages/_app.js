import '@/styles/globals.css'
import SideBar from './sidebar'
import MainLandingPage from '.';
import MenuButton from './menubutton';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <MainLandingPage />
    <MenuButton />
    </div>
  );
}
