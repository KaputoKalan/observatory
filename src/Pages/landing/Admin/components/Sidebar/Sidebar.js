import React from 'react'
import { useHistory } from 'react-router'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu, SidebarWrapper } from './SiderBarElements'

const Sidebar = ({ isOpen, toggle}) => {

    const history = useHistory()

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
                    <SidebarLink to='/addissue'>
                        AddIssue
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute  onClick={() => {
                            localStorage.removeItem('userInfo')
                            history.push('/')
                        }}>
                    Log Out
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )


}

export default Sidebar;