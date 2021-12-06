import React, { useState }from 'react';
import Card from '../../../../components/card';
import Button from '../../../../components/button'
import Text from '../../../../components/text';
import Container from '../../../../components/container'
import Navbar from './Navbar'
import Footer from '../../footer/'
import axios from "axios"
import Sidebar from '../../Sidebar/Sidebar';

const Form = () => {
    const cardStyle = 'border border-gray mt-4 lg:mt-0 lg:w-full lg:ml-8 lg:max-w-2xl'
    const cardWrapperStyle = ` lg:w-full  px-8`
    const horizontalLine = ` w-full h-px bg-gray-300 my-8`
    const titleStyle = `font-bold text-gray-800 mt-4 text-sm`
    const contentStyle = ` mt-2`

    const [issue, setIssue] = useState('')
    const [institution, setInstitution] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')

    const changeOnClick = (e) =>{
        e.preventDefault()

        const post = {
            issue,
            institution,
            location,
            date,
            status
        }

        setIssue('')
        setInstitution('')
        setLocation('')
        setDate('')
        setStatus('')

        axios.post('/addissue/add', post)
        .then(res => console.log(res.data))
        .catch(err => {console.log(err)})
    } 

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            
            <Container className='bg-gray-100 min-h-screen'>
                <Text color tailwind='mb-5 mt-10' type='heading'>Issue Log entry form</Text>
                <div className='lg:flex'>

                    <Card className={cardStyle}>
                        <form onSubmit={changeOnClick} encType="multipart/form-data">
                            <div className={cardWrapperStyle}>
                                <Text color textSize tailwind={titleStyle} >  Issue</Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 ' 
                                                value={issue}
                                                onChange={(e) => setIssue(e.target.value)}
                                                type='text' placeholder='Issue' />

                                <Text color textSize tailwind={titleStyle} >  District / Province</Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 '
                                                value={institution}
                                                onChange={(e) => setInstitution(e.target.value)}
                                                type='text'  />

                                <Text color textSize tailwind={titleStyle} >  Insitution </Text>
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

                                <Text color textSize tailwind={titleStyle} >  Date </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500'
                                                type='text'
                                                onChange={(e) => setDate(e.target.value)}
                                                value={date}
                                                placeholder='YYYY-MM-DD'/>

                                <Text color textSize tailwind={titleStyle} >  Status </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500'
                                                type='text'
                                                onChange={(e) => setStatus(e.target.value)}
                                                value={status}
                                                />
            
                               
                            </div>

                            <div className='w-full bg-gray-100 flex justify-end mt-8 px-8 py-4 rounded-b-lg'>
                                <Button size='small' >Submit</Button>
                            </div>
                        </form>    
                    </Card>
                </div>
                <div className={horizontalLine} />

            
        
            </Container>
            <Footer 
            twitter='https://twitter.com/CFHHZambia'
            facebook='https://www.facebook.com/CFHHZ'
            instagram=''
          
           />
        </>    
    );
};

export default Form;
