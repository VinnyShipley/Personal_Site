import '@/styles/globals.css'
import SideBar from './sidebar'
import MainLandingPage from '.';

export default function App({ Component, pageProps }) {
  return (
    <div>
    <MainLandingPage />
    <SideBar />
    </div>
  );
}
