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
                            <NavLinks to='/admin' >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/issuelog' >IssueLog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/addissue' >AddIssue</NavLinks>
                        </NavItem>
                    </NavMenu>
                   
                </NavbarContainer>
            </Nav>
        </>

    )
}

export default Navbar