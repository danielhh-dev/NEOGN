import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import ActiveHeartImage from "../../utils/images/AppbarIcons/Neogn.jpeg";
import { useState } from "react";

const TopBar = () => {
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInput = () => setInputVisible(!inputVisible)

    return (
        <div className="w-full flex flex-col">
            <div className="w-full h-auto flex items-center justify-between ">
                <Sidebar />
                <img src={ActiveHeartImage} alt="Active Heart" className="h-14 w-auto lg:hidden mr-4" />
                <div className="lg:flex items-center"></div>
                <Searchbar classNameContainer={inputVisible ? "sm:bg-zinc-100 justify-end sm:justify-between" : "justify-end"} toggleInput={toggleInput} classNameBtn={"block"} classNameInput={inputVisible ? "hidden sm:block w-full" : "hidden"}/>
            </div>
            <Searchbar className="block sm:hidden" classNameContainer={inputVisible && "bg-zinc-100 justify-end"} toggleInput={toggleInput} classNameBtn={"hidden"} classNameInput={inputVisible ? "block sm:hidden w-full" : "hidden"}/>
        </div>
    );
};

export default TopBar;
