import { GoOctoface } from 'react-icons/go';
import { TbBrandBlogger } from 'react-icons/tb';
import Link from 'next/link';
import { stringify } from 'postcss';
import { HiHome } from "react-icons/hi"; 

const SideBar = () => {
	return (
		<div
			id='sidebar'
			className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-secondary text-amber-100 shadow-xl'
		> 
      <SideBarIcon icon={<HiHome size="28" />} text='Homepage' href="/"/>
			<SideBarIcon icon={<GoOctoface size='28' />} text='My Projects' href="/projects"/>
			<SideBarIcon icon={<TbBrandBlogger size='28' />} text='My Blog' href="/blog"/>
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
