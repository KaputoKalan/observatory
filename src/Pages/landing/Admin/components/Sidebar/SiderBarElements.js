import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa' 

export const SidebarContainer =styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #1F2937 ;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '-100' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff
    
    `

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size 2rem;
    cursor: pointer;
    outline: none;

    `

export const SidebarWrapper = styled.div`
    color:fff;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    margin-bottom: 4rem;

    &:hover{
        color: #F97316;
        transition: 0.2s ease-in-out;

    }
`    

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
export const SidebarRoute = styled(Link)`
    border-radius: 5px;
    background: #F97316;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    outline:none;
    border: none;
    cursor: point;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
   

    &:hover{
        transitiom: all 0.2s ease-in-out;
        background: rgb(79, 70, 229);
        color: #fff;
    }
`

export const SidebarMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width:480px){
        
    }
`

