import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, tailwind, size, variant, onClick, iconLeft, iconRight, children, color,
    hover, bg, focus, padding, textSize, rounded }) => {
    let iconWrapper = ``
    let variantStyle;
    let sizeStyle;

    const extraSmallSize = ` ${!padding && 'py-1 px-4'}  ${!textSize && 'text-xs'}`
    const smallSize = ` ${!padding && 'py-2 px-4'}  ${!textSize && 'text-sm'}`
    const mediumSize = ` ${!padding && 'py-3 px-8'} ${!textSize && 'text-base'}`
    const largeSize = ` ${!padding && 'py-4 px-10'} ${!textSize && 'text-lg'}`

    const focusStyle = ` ${!focus && 'focus:outline-none focus:border-blue-300 focus:shadow-outline'}`
    const shadowStyle = `shadow-md`

    const primaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-white'} ${!bg && 'bg-indigo-700'} 
    ${!hover && 'hover:bg-indigo-600'}`

    const secondaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-indigo-700'}   ${!bg && 'bg-indigo-100'} 
    ${!hover && 'hover:bg-indigo-200 text-indigo-600'}`

    const darkVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-white'}  ${!bg && 'bg-gray-900'} 
    ${!hover && 'hover:text-gray-100 hover:bg-gray-700'}`

    const outlineVariant = `${shadowStyle} ${focusStyle} ${!bg && 'bg-white'} ${!color && 'text-gray-700'} border border-gray-400 
    ${!hover && 'hover:text-gray-600'}`

    const textVariant = ` ${!focus && 'focus:outline-none'} ${!bg && 'bg-transparent'}
     ${!color && 'text-gray-700'} ${!hover && 'hover:text-gray-900'}`

    let iconMargin = 0

    switch (size) {
        case 'extra-small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            sizeStyle = extraSmallSize
            iconMargin = 2
            break
        case 'small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            iconMargin = 2

            sizeStyle = smallSize
            break
        case 'large':
            iconWrapper =iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 3

            sizeStyle = largeSize
            break
        default:
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 3

            sizeStyle = mediumSize
            break

    }

    if (iconLeft) {
        iconWrapper = iconWrapper.concat(iconWrapper, ` mr-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(iconWrapper, ' mr-0')
    }
    if (iconRight) {
        iconWrapper = iconWrapper.concat(iconWrapper, ` ml-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(iconWrapper, ' ml-0')
    }


    switch (variant) {
        case 'secondary':
            variantStyle = secondaryVariant
            break
        case 'outline':
            variantStyle = outlineVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
        case 'text':
            variantStyle = textVariant
            break
        default:
            variantStyle = primaryVariant
            break
    }

    return (
        <button
            className={` normal-case text-center border-transparent 
            pointer justify-center transition duration-150 items-center flex  
              ${!rounded && 'rounded-md'} leading-6 font-medium 
             ${variantStyle} ${sizeStyle} ${tailwind} ${className}`}
            onClick={onClick}>

            {iconLeft &&
                <div className={iconWrapper}>
                    {iconLeft}
                </div>
            }

            {children}

            {iconRight &&
                <div className={iconWrapper}>
                    {iconRight}
                </div>
            }

        </button>
    );
};

const tailwindProps = {
    color: false,
    hover: false,
    bg: false,
    focus: false,
    textSize: false,
    padding: false,
    rounded: false,
}

Button.defaultProps = {
    ...tailwindProps,
    size: 'default',
    variant: 'primary',
};

Button.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['large', 'default', 'small', 'extra-small']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'dark', 'text']),
    iconLeft: PropTypes.object,
    iconRight: PropTypes.object,
};;

export default Button;