import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = ({ type, placeholder, className, tailwind, padding, focus, variant, element,
    value, onChange }) => {

    const lightVariant = ` ${!focus && 'focus:border-blue-300 focus:shadow-outline bg-white'} 
    border border-gray-300 shadow-sm`

    const darkVariant = `bg-gray-700 text-gray-100 shadow-inner`

    let variantStyle

    switch (variant) {
        case 'light':
            variantStyle = lightVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
    }

    const style = `leading-6 text-sm ${!padding && 'px-3 py-1'}  rounded 
          outline-none transition duration-150 ${variantStyle} ${tailwind} ${className}`

    const valueProps = {
        value: value
    }
    if (typeof valueProps === 'undefined') { valueProps = null }
    return (
        element === 'text-area' ?
            <textarea
                className={style}
                type={type}
                {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChange(e.target.value)
                }
                }
                placeholder={placeholder} />
            :
            <input
            {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChange(e.target.value)
                }
                }
                className={style}
                type={type}
                placeholder={placeholder} />

    )
};

const tailwindProps = {
    padding: false,
    borderColor: false,
    focus: false,
}

TextInput.defaultProps = {
    ...tailwindProps,
    variant: 'light',
    element: 'input',
}

export const proptypes = {
    element: PropTypes.oneOf(['input', 'text-area']),
    variant: PropTypes.oneOf(['light', 'dark']),
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.string
};

TextInput.propTypes = proptypes;

export default TextInput;