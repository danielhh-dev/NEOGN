import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AuxBar = ({ theme }) => {
  const location = useLocation();
  const currentPath = location.pathname;


  
    return (  
      <div className={`font-general-sans w-full h-[80px] justify-around items-center inline-flex ${theme === "dark" ? 'dark:bg-neutral-950 border-t border-white border-opacity-20' : 'bg-white border-t border-black border-opacity-20'}`}>
      <div className="w-full h-[80px] border-t border-black border-opacity-20 justify-around items-center inline-flex">
          <Link to={currentPath === "/" ? "/" : "/"}>
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Home line"
              src={
                theme === "dark" && currentPath === "/"
                  ? "https://i.postimg.cc/prtyL6FP/active-home-svgrepo-com.png"
                  : theme === "dark"
                  ? "https://i.postimg.cc/yNBf01CR/Dark-home-svgrepo-com.png"
                  : theme !== "dark" && currentPath === "/"
                  ? "https://i.postimg.cc/prtyL6FP/active-home-svgrepo-com.png"
                  : "https://i.postimg.cc/J4xtRK4W/home-svgrepo-com.png"
              }
              className="w-6 h-6"
            />
            <div
              className={` text-xs font-medium ${
                theme === "dark" && currentPath === "/"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-300"
                  : theme !== "dark" && currentPath === "/"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Home
            </div>
          </div>
        </Link>
        <Link to="/Cart">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="MyCart"
              src={
                theme === "dark" && currentPath === "/Cart"
                  ? "https://i.postimg.cc/1Xq6bnN4/active-basket-alt-3-svgrepo-com.png"
                  : theme === "dark"
                  ? "https://i.postimg.cc/XNGwrhD3/Dark-basket-alt-3-svgrepo-com.png"
                  : theme !== "dark" && currentPath === "/Cart"
                  ? "https://i.postimg.cc/1Xq6bnN4/active-basket-alt-3-svgrepo-com.png"
                  : "https://i.postimg.cc/59h8L3Zz/basket-alt-3-svgrepo-com.png"
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Cart"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Cart"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Cart
            </div>
          </div>
        </Link>
        <Link to="/Search">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Search"
              src={
                theme === "dark" && currentPath === "/Search"
                  ? "https://i.postimg.cc/2SmvX5j8/active-search-alt-svgrepo-com.png"
                  : theme === "dark"
                  ? "https://i.postimg.cc/tCFW56jM/Dark-search-alt-svgrepo-com.png"
                  : theme !== "dark" && currentPath === "/Search"
                  ? "https://i.postimg.cc/2SmvX5j8/active-search-alt-svgrepo-com.png"
                  : "https://i.postimg.cc/wjVJKd35/search-alt-svgrepo-com.png"
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Search"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Search"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Search
            </div>
          </div>
        </Link>
        <Link to="/Wishlist">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              alt="Saved"
              src={
                theme === "dark" && currentPath === "/Wishlist"
                  ? "https://i.postimg.cc/vTLTgtrf/active-heart-svgrepo-com.png"
                  : theme === "dark"
                  ? "https://i.postimg.cc/Dy9pyQCB/Dark-heart-svgrepo-com.png"
                  : theme !== "dark" && currentPath === "/Wishlist"
                  ? "https://i.postimg.cc/vTLTgtrf/active-heart-svgrepo-com.png"
                  : "https://i.postimg.cc/4xFd9d9L/heart-svgrepo-com.png"
              }
              className="w-6 h-6"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Wishlist"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Wishlist"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Saved
            </div>
          </div>
        </Link>
       
        <Link to="/Account">
          <div className="flex-col justify-start items-center inline-flex">
            <img
              src={
                theme === "dark" && currentPath === "/Account"
                  ? "https://i.postimg.cc/c1Qrb0pC/active-profile-svgrepo-com.png"
                  : theme === "dark"
                  ? "https://i.postimg.cc/rmwQYfmF/Dark-profile-svgrepo-com.png"
                  : theme !== "dark" && currentPath === "/Account"
                  ? "https://i.postimg.cc/c1Qrb0pC/active-profile-svgrepo-com.png"
                  : "https://i.postimg.cc/Wb5pB3XN/profile-svgrepo-com.png"
              }
              className="w-6 h-6"
              alt="Account"
            />
            <div
              className={`text-xs font-medium ${
                theme === "dark" && currentPath === "/Account"
                  ? "text-red-500"
                  : theme === "dark"
                  ? "text-gray-400"
                  : theme !== "dark" && currentPath === "/Account"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              Account
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AuxBar;
