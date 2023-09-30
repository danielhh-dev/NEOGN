import Searchbar from "./SearchBar"
import Sidebar from "./Sidebar"

const TopBar = () => {
    return (
        <div className="w-full h-auto flex items-center ">
            <Sidebar/>
            <Searchbar/>
        </div>
    )
}

export default TopBar;