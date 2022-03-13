import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
       
      </Nav>
    </>
  );
};
  
export default navbar;