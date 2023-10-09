import { useState } from "react";
import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import NEOGN from "../../utils/images/Logo/NEOGN.png";

const TopBar = () => {
  // con este estado cuando se expanda el search se oculta todo
  const [isSearchFocused, setIsSearchFocused] = useState(false);

//manejo el cambio de enfoque de la barra de búsqueda
  const handleSearchFocus = (focused) => {
    setIsSearchFocused(focused);
  };


  return (
    <div className="w-full h-auto flex items-center justify-between">
      {!isSearchFocused && <Sidebar />}
      {!isSearchFocused && (
        <img
          src={NEOGN}
          alt="NEOGN ICON"
          className="h-10 w-auto lg:hidden"
        />
      )}
      <div className="lg:flex items-center"></div>
      <Searchbar onFocusChange={handleSearchFocus} />
    </div>
  );
};

export default TopBar;
