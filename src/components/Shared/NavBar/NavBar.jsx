import React from "react";
import Container from "../Container";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
             <Link to="/"> <img className="hidden md:block"
                width="100"
                height="100"
                src="https://i.ibb.co/Nr49RQX/logo.png"
                alt=""
              /></Link>
            <Search/>
            <MenuDropdown/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
