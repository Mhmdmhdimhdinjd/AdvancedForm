import React, { useState } from "react";
import { Navbar, Nav, NavItem, Input, InputGroupText, InputGroup, NavbarText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { RxMoon } from "react-icons/rx";
import logo from '../../assets/image/برنج نی نی 2.jpg';
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { TbApps } from "react-icons/tb";
import { RiTranslate2 } from "react-icons/ri";
import { useTheme } from '../../context/themecontext'
import { CiMenuFries } from "react-icons/ci";

const Navbar__comp = () => {
  const { isDark, toggleTheme , toggleOffcanvas } = useTheme();

  const toggleDarkMode = () => {
    toggleTheme()
  };

  return (
      <Navbar className={`mt-2 shadow-sm rounded hidden-overflow ${isDark ? "bg-dark text-white" : "bg-white text-black"}`}>

        <Nav className="align-items-center">
          <NavItem className="position-relative mx-2">
            <img
              style={{
                width: "3rem",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={logo}
              alt=""
            />
            <span className="status-indicator"></span>
          </NavItem>
          <NavItem className="mx-2">
            <HiOutlineBell size={24} />
          </NavItem>
          <NavItem
            style={{ cursor: "pointer" }}
            className="mx-2"
            onClick={toggleDarkMode} // عملکرد تغییر حالت به دارک مود
          >
            <RxMoon size={24} />
          </NavItem>
          <NavItem className="mx-2">
            <TbApps size={24} />
          </NavItem>
          <NavItem className="mx-2">
            <RiTranslate2 size={24} />
          </NavItem>
          <NavItem className="d-block d-sm-none" onClick={toggleOffcanvas}>
          <CiMenuFries size={24} />
          </NavItem>
        </Nav>

        <NavbarText className="p-0">
          <InputGroup className="my-3">
            <Input
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                boxShadow: "none",
                direction: 'rtl',
              }}
              placeholder="جستجو کنید..."
            />
            <InputGroupText
              style={{
                backgroundColor: "transparent",
                border: 'none',
              }}
              className="nav__search__icon"
            >
              <HiOutlineSearch />
            </InputGroupText>
          </InputGroup>
        </NavbarText>

      </Navbar>
  );
};

export default Navbar__comp;
