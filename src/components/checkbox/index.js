import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = ({ placeholder, className, tailwind, label ,focus}) => {


    return (
        <div className='flex items-center'>
           
            <input
                className={`${!focus && 'focus:border-blue-300 focus:shadow-outline bg-white'}
                form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out
                rounded outline-none ${tailwind} ${className}`}
                type='checkbox'
                placeholder={placeholder} />

                 <label className="ml-2 block text-sm leading-5 text-gray-900">
                {label}
            </label>
        </div>
    )
};

const tailwindProps = {
focus:false,
}

TextInput.defaultProps = {
    ...tailwindProps,
}

export const proptypes = {
    label: PropTypes.string,
};

TextInput.propTypes = proptypes;

export default TextInput;