import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu, SidebarWrapper } from './SiderBarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper> 
                <SidebarMenu>
                    <SidebarLink to='/'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/issuelog'>
                        IssueLog
                    </SidebarLink>
                    <SidebarLink to='/contact'>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/admin-login'>Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )


}

export default Sidebar;