import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars} from 'react-icons/fa'
import companylogo from '../../images/logo.png'
import { useHistory } from 'react-router'





const Navbar = ({ toggle }) => {

    const history = useHistory()

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                         <img className='h-10 w-18' src={companylogo}/>
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
                    <NavBtn>
                        <NavBtnLink onClick={() => {
                            localStorage.removeItem('userInfo')
                            history.push('/')
                        }}>Logout</NavBtnLink>
                    </NavBtn>
                   
                </NavbarContainer>
            </Nav>
        </>

    )
}

export default Navbar