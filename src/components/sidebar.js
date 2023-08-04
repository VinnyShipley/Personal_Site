import { GoOctoface } from 'react-icons/go';
import { TbBrandBlogger } from 'react-icons/tb';
import Link from 'next/link';
import { HiHome, HiCode } from "react-icons/hi"; 
import { RiLinkedinBoxFill } from "react-icons/ri";


const SideBar = () => {
	return (
		<div
			id='sidebar'
			className='fixed top-0 left-0 h-screen w-32 flex flex-col bg-secondary_hover text-amber-100 shadow-xl'
		> 
      <SideBarIcon icon={<HiHome size="56" />} text='Homepage' href="/"/>

			<SideBarIcon icon={ <HiCode size='56'/>} text='My Portfolio' href="/projects"/>

			<SideBarIcon icon={<TbBrandBlogger size='56' />} text='The Blog' href="/blog"/>

			<SideBarIcon icon={<GoOctoface size='56' />} text='My Github' href="https://github.com/VinnyShipley"/>

			<SideBarIcon icon={ <RiLinkedinBoxFill size='56'/>} text='My Linkedin' href="https://www.linkedin.com/in/vinny-shipley/" />
		</div>
	);
};

const SideBarIcon = ({ icon, text, href }) => (
	<Link href= {`${href}`}
  className='sidebar-icon group'>
		{icon}

		<span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
	</Link>
);


export default SideBar;
