import React, { useState } from 'react'
import Navbar from './Navbar'
import IssueForm from './IssueForm'
import Sidebar from '../../Sidebar/Sidebar'
import Footer from '../../footer'

const AddIssue = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
            <IssueForm />
            <Footer 
            facebook=''
            twitter=''
            instagram=''
            />
        </>
    )
}

export default AddIssue
