import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";

const Navbars = () => {
  const [Active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const onSearch = () => {
    setActive(!Active);
  };

  const navShow = () => {
    setShow(!show);
  };
  return (
    <div className={`Navbars ${show ? "ulsh" : ""}`}>
        <div className="containerss">
           <Button onClick={navShow} className="menU" color="primary">
             <MenuIcon/>
            </Button>

         <ul>
            <li className="navlinks">
              Link1
            </li>
            
            <li className="navlinks">
              Link2
            </li>
            <li className="navlinks">
              Link3
            </li>
            <li className="navlinks">
              Link4
            </li>
            <li className="navlinks">
              Link5
            </li>
            <li className="navlinks">
              Link6
            </li>
           
         </ul>  

        <div className={`searchBox ${Active ? "inputb" : ""}`}>
          <i className="searchIcon" onClick={onSearch}>
            <SearchIcon />
          </i>
          <input type="text" placeholder="Search Google or type URL" />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
