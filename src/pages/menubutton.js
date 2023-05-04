import { TfiMenu } from "react-icons/tfi";;


const MenuButton = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col focus:bg-black text-amber-100">
    <MenuBarIcon icon={<TfiMenu size="28"/>}  text="Menu" />
  </div>
  );
};

const MenuBarIcon =({ icon, text  }) => (
  <div className="menu-button group">
    {icon}

    <span class="menu-icon group-hover:scale-100">
      {text}
    </span>

  </div>
  ) 

export default MenuButton;
