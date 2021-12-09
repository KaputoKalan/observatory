import styled  from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: #fff;
    box-shadow: 0 5px 10px #e1e5ee;
    height: 80px;
    display: flex;
    jusitfy-content: center;
    align-items: center
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;
    padding: 1.6rem;

    @media screen and (max-width: 1024px){
        transition: 0.8s all ease
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content space-between;
    height: 80px;
    width: 100%;
    padding: 0 2rem;
    max-width: 1100px;
    

`

export const NavLogo = styled(Link)`
    color: #red;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    margin-left: 24px;
    text-decoration: none;
    
`

export const MobileIcon =styled.div`
  display: none;
  
  @media screen and (max-width: 1024px){
      display: block;
      transform; translate(-100%, 60%)
      font-size: 1.8rem;
      cursor: pointer;
      color: #000;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align:  center;
 
  
  

  @media screen and (max-width: 1024px){
      display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
`
export const NavLinks =styled(Link)`
  color: #000;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
      border-bottom: 3px solid #F97316;
  }

`

export const NavBtn = styled.nav`
  diplay: flex;
  align-items: center;

  @media screen and (max-width: 1024px){
      display: none
  }
`

export const NavBtnLink =styled(Link)`
  border-radius: 5px;
  background: #F97316;
  white-space: nowrap;
  padding: 10px 22px;
  outline: none;
  font-size: 16px
  border: none;
  curser: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover{
      transition: all 0.2s ease-in-out;
      background:  rgb(79, 70, 229);
      color: #fff;
  }
`
