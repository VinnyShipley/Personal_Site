import SideBar from "./sidebar";
import { TfiMenu } from "react-icons/tfi";;


const MenuButton = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col  text-amber-100">
    <SideBarIcon icon={<TfiMenu size="28"/>}  text="Menu" />
  </div>
  );
};

const SideBarIcon =({ icon, text  }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>

  </div>
  ) 

export default MenuButton;
