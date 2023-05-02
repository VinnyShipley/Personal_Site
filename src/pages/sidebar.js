import { GoOctoface } from "react-icons/go";
import { TbBrandBlogger } from "react-icons/tb";

const SideBar = () => {
	return (
  <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-amber-900 text-amber-100 shadow-lg">
    <SideBarIcon icon={<GoOctoface size="28" />} />
    <SideBarIcon icon={<TbBrandBlogger size="28" />} />
  </div>
  );
};

const SideBarIcon =({ icon }) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

export default SideBar;
