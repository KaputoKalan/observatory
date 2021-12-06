import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars} from 'react-icons/fa'






const Navbar = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Dollar
                    </NavLogo>
                    <MobileIcon onClick={toggle}> 
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/' >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/issuelog' >IssueLog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/form' >Form</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/admin-login'>Login</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>

    )
}

export default Navbar