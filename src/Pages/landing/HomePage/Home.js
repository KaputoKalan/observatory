import React, { useState } from 'react'
import { imgObj } from '../DataHero'
import HeroSection from '../HeroSection'
import LowerSection from '../LowerSection'

import Navbar from '../Navbar'
import Footer from '../footer/'
import Sidebar from '../Sidebar/Sidebar'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>  
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
           <HeroSection /> 
           <LowerSection /> 
           <Footer
            twitter=''
            facebook=''
            instagram=''
           />
        </>
    )
}

export default Home
