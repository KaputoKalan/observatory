import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Card from '../../../components/card'
import Content from './components/content';
import Container from '../../../components/container';
import Navbar from '../Navbar'
import Footer from '../footer/'
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from 'react-router';



const Login = () => {

    const history = useHistory()
    const userInfo = localStorage.getItem("userInfo")
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")

        if(userInfo){
            history.push("/admin")
        }
    }, [history, userInfo])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
           
            <Container
            narrow 
            tailwind='flex flex-col items-center mb-10'>

                <Header 
                tailwind='items-center mb-8'/>

                <Card
                        tailwind='w-full p-8 max-w-lg border border-gray-300'

                >

                    <Content />
                </Card>
                
            </Container>
            <Footer 
                twitter=''
                facebook=''
                instagram=''
            />
        </>
    );
};

export default Login;
