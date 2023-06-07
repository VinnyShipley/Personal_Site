import { GoOctoface } from 'react-icons/go';
import { TbBrandBlogger } from 'react-icons/tb';
import Link from 'next/link';
import { HiHome } from "react-icons/hi"; 
import { RiLinkedinBoxFill } from "react-icons/ri";

const SideBar = () => {
	return (
		<div
			id='sidebar'
			className='fixed top-0 left-0 h-screen w-32 flex flex-col bg-secondary text-amber-100 shadow-xl'
		> 
      <SideBarIcon icon={<HiHome size="56" />} text='Homepage' href="/"/>
			<SideBarIcon icon={<GoOctoface size='56' />} text='My Projects' href="/projects"/>
			<SideBarIcon icon={<TbBrandBlogger size='56' />} text='My Blog' href="/blog"/>
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
