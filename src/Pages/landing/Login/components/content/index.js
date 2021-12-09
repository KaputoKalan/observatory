import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FieldInput from '../../../../../components/fieldinput'
import CheckBox from '../../../../../components/checkbox'
import Button from '../../../../../components/button'
import Text from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../../../../../components/alert';







const Content = ({props})=> {
    const iconWrapperStyle = `cursor-pointer py-1 border border-gray-300 shadow-sm w-full 
    rounded-md mx-1 flex
    justify-center`
    const cardStyle = 'border border-gray mt-4 lg:mt-0 lg:w-full lg:ml-8 lg:max-w-2xl'
    const cardWrapperStyle = ` lg:w-full  px-8`
    const horizontalLine = ` w-full h-px bg-gray-300 my-8`
    const titleStyle = `font-bold text-gray-800 mt-4 text-sm`
    const contentStyle = ` mt-2`

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("false")
    const [loading, setLoading] = useState("false")
    const [show3, setShow3] = useState(false)



    const submitHandler = async (e) => {
        e.preventDefault()
        try{
                const config = {
                    headers: {
                        "Content-type":"application/json"
                    }
                }

                setLoading(true)

                const { data } = await axios.post('/users/login', {
                    email,
                    password
                    },
                    config
                )
            
                console.log(data)
                localStorage.setItem('userInfo', JSON.stringify(data))
                setLoading(false)            
            }catch (error){
                setError(error.response.data.message)
            }
    }
    return (
        <div>
            
           <form onSubmit={submitHandler}>
                            <div className={cardWrapperStyle}>

                                <Text color textSize tailwind={titleStyle} >  Email </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 ' 
                                                value={email}
                                                onChange= {(e) => setEmail(e.target.value)}                                                
                                                type='email' placeholder='example@example.com' />

                                <Text color textSize tailwind={titleStyle} >  Password </Text>
                                <input className='w-full
                                                border border-gray-300
                                                px-3 py-2
                                                rounded-lg
                                                shadow-sm
                                                focus:outline-none
                                                focus:boder-indigo-500
                                                focus:ring-1
                                                focus:ring-indigo-500 '
                                                value={password}
                                                onChange= {(e) => setPassword(e.target.value)}
                                                type='password'  />
   
                            </div>

                            <div className='w-full  flex justify-center mt-8 px-8 py-4 rounded-b-lg'>
                                <button type='submit' className=''>Login</button>
                            </div>
                        </form> 

        </div>
    );
};

Content.propTypes = {

};

export default Content;