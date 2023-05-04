import { GoOctoface } from "react-icons/go";
import { TbBrandBlogger } from "react-icons/tb";


const SideBar = () => {
	return (
  <div id="sidebar" className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-secondary text-amber-100 shadow-xl">
    <SideBarIcon icon={<GoOctoface size="28"/>}  text="My Github" />
    <SideBarIcon icon={<TbBrandBlogger size="28"/>} text="My Blog" />
  </div>
  );
};

const SideBarIcon =({ icon, text  }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>

  </div>
);

export default SideBar;
