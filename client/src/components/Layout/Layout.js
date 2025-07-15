import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import Menus from "../Menus/Menus";
import "./Layout.css";
// In order to use the icons
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const Layout = () => {
  // <> and </> are called as fragments
  const [toggle, setToggle] = useState(true);
  //   change toogle
  const handleToogle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toogle-icons">
            <p onClick={handleToogle}>
              {/* The icon is like aself html tag and it takes the paramater called size */}
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
