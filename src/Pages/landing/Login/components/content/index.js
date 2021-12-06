import React from 'react';
import PropTypes from 'prop-types';
import FieldInput from '../../../../../components/fieldinput'
import CheckBox from '../../../../../components/checkbox'
import Button from '../../../../../components/button'
import Text from '../../../../../components/text'
import Icon from '../../../../../components/icon'
import { Link } from 'react-router-dom';

const Content = props => {
    const iconWrapperStyle = `cursor-pointer py-1 border border-gray-300 shadow-sm w-full 
    rounded-md mx-1 flex
    justify-center`

    return (
        <div>
            <FieldInput
                tailwind=''
                label='Email address'
                type='email'
            />

            <FieldInput
                tailwind='mt-8'

                label='Password'
                type='password'
            />
            <div className='flex justify-between items-center mt-4'>
                <CheckBox
                    label='Remember me'
                />

                <Button
                    color
                    hover
                    size='small'
                    tailwind='text-indigo-600 hover:text-indigo-500'
                    variant='text'>
                    Forgot your password?
                </Button>
            </div>

            <Link to='/admin'>
                <Button
                    tailwind='mt-4 w-full'
                >Sign in</Button> 
            </Link>

            <div className='flex justify-evenly items-center mt-4'>
                <div className='h-px bg-gray-300 w-full' />

                <div className='h-px bg-gray-300 w-full' />
            </div>



        </div>
    );
};

Content.propTypes = {

};

export default Content;