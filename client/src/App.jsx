import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import AppBar from "./components/AppBar/AppBar";
import Home from "./views/Home";
import Cart from "./views/Cart"
import Search from "./views/Search";
import Wishlist from "./views/Wishlist";
import Account from "./views/Account";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [Desktop, setDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <TopBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/Account" element={<Account />} />
      </Routes>
      <div
          className={`fixed bottom-0 left-0 w-full z-[1000] ${
            Desktop ? "hidden" : ""
          }`}
        >
          <AppBar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </div>
    </div>
  );
};

export default App;
