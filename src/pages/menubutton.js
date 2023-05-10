import { TfiMenu } from "react-icons/tfi";;
import React from "react";

// const MenuButton = () => {
//   return (
//     <div  className="fixed top-0 left-0 w-16 flex flex-col text-amber-100">
//     <MenuBarIcon icon={<TfiMenu size="28"/>}  text="Menu" />
//   </div>
//   );
// };

// const MenuBarIcon =({ icon, text  }) => (
//   <div id="menuButtonButton" className="menu-button group">
//     {icon}

//     <span className="menu-icon group-hover:scale-100">
//       {text}
//     </span>

//   </div>
//   ) 



class MenuButton extends React.Component {
  render() {
    return (
      <button className="menu-button">
        Menu
      </button>
    )
  }
}


export default MenuButton;
