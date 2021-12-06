import React, { useState }from 'react';
import Card from '../../../components/card';
import Button from '../../../components/button';
import { ReactComponent as ImgSVG } from '../images/standing-7.svg'
import { ReactComponent as ImgSVG1 } from '../images/standing-19.svg'
import { ReactComponent as ImgSVG2 } from '../images/standing-20.svg'
import DefaultAlert from '../../../components/alert'
import styled from 'styled-components';
import DefaultButton from '../../../components/button'
import Text from '../../../components/text';
import Icon from '../../../components/icon';
import Container from '../../../components/container'
import Navbar from '../Navbar'
import Footer from '../footer/'
import axios from "axios"
import Sidebar from '../Sidebar/Sidebar';

const Alert = styled(DefaultAlert)`
margin: 24px;
`





const Form = () => {
    const cardStyle = 'border border-gray mt-4 lg:mt-0 lg:w-full lg:ml-8 lg:max-w-2xl'
    const cardWrapperStyle = ` lg:w-full  px-8`
    const horizontalLine = ` w-full h-px bg-gray-300 my-8`
    const titleStyle = `font-bold text-gray-800 mt-4 text-sm`
    const contentStyle = ` mt-2`
    const [show3, setShow3] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const changeOnClick = (e) =>{
        e.preventDefault()

        const post = {
            name,
            phone,
            location,
            description
        }

        setName('')
        setPhone('')
        setLocation('')
        setDescription('')

        axios.post('/post/add', post)
        .then(res => console.log(res.data))
        .catch(err => {console.log(err)})
    } 
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle} />
            <Container className='bg-gray-100 min-h-screen'>
                <Text color tailwind='mb-5 mt-10' type='heading'>Get everything DONE and ready in under 5 minutes.</Text>
                <div className='lg:flex'>

                    <Card className={cardStyle}>
                        <form onSubmit={changeOnClick} encType="multipart/form-data">
                            <div className={cardWrapperStyle}>
                                <Text color textSize tailwind={titleStyle} >  FullName </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 ' 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type='text' placeholder='Full name' />

                                <Text color textSize tailwind={titleStyle} >  Phone </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 '
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                type='text'  />

                                <Text color textSize tailwind={titleStyle} >  Location </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 '
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                type='text' />


                                <Text color textSize tailwind={titleStyle} >  Issue Description </Text>
                                <textarea className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500'
                                                onChange={(e) => setDescription(e.target.value)}
                                                value={description}
                                                placeholder='Your Community Issue'></textarea>
                                


                                <Text color textSize tailwind={titleStyle} >  Image </Text>
                                <div
                                    onClick={() => console.log('drag and drop image')}
                                    className={`cursor-pointer p-4 rounded ${contentStyle} flex flex-col items-center border border-dashed border-gray-400`}>
                                    <Icon
                                        size
                                        color
                                        tailwind='w-12 h-12 text-gray-500'
                                        hasBackground={false}
                                        // src={<ImgSVG />}
                                    />
                                    <input type='file'
                                        name='file'
                                        id='file'
                                        accept='.jpeg, .jpg, .png, webp, .svg'
                                        class='relative z-10 opacity-0 w-full h-full' />
                                    <Text type='small'><span className='text-indigo-600'>Click to Upload a file</span> PNG,JPG, Gif up to 10MB</Text>
                                </div>
                            </div>

                            <div className='w-full bg-gray-100 flex justify-end mt-8 px-8 py-4 rounded-b-lg'>
                                <Button size='small' 
                                    onClick={() => setShow3(!show3)}
                                >Submit</Button>
                            </div>
                        </form> 

                    </Card>
                    <div className='flex felx-row w-2/5'>
                        <ImgSVG />
                        <ImgSVG1 />
                        <ImgSVG2 />
                    </div>
                    
                </div>
                <Alert
                        isShown={show3}
                        onCloseComplete={() => setShow3(false)}
                        title='Sumbitted Successfully'
                        content={`Your Issue has been sent for review.`}
                        variant='success' />
                <div className={horizontalLine} />

            
        
            </Container>
            
            <Footer />
        </>    
    );
};

export default Form;
