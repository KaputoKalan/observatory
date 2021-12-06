import React from 'react';
import PropTypes from 'prop-types';


const Text = ({ type, className, children, tailwind, color, font, textSize }) => {

    const headingSmall = ` ${!textSize && 'text-xl'} font-bold tracking-tight ${!color && 'text-gray-900'} 
     `

    const heading = `${!color && 'text-gray-900'} tracking-tight font-extrabold ${!textSize && 'text-3xl'} 
    `

    const headingMedium = `${!color && 'text-gray-900'}  font-extrabold tracking-tight
    ${!textSize && 'text-4xl'} `

    const headingLarge = ` ${!color && 'text-gray-900'} tracking-tight font-black ${!textSize && 'text-5xl'} 
    `

    const textExtraSmall = ` ${!textSize && 'text-xs'}  ${!color && 'text-gray-600'} `
    const textSmall = ` ${!textSize && 'text-sm'}   ${!color && 'text-gray-600'} `
    const text = ` ${!color && 'text-gray-600'}  ${!textSize && 'text-base'} `
    const textLarge = ` ${!color && 'text-gray-600'} ${!textSize && 'text-lg'}`


    let textStyle;

    switch (type) {
        case 'heading-small':
            textStyle = headingSmall
            break
        case 'heading':
            textStyle = heading
            break
        case 'heading-medium':
            textStyle = headingMedium
            break
        case 'heading-large':
            textStyle = headingLarge
            break
        case 'text-extra-small':
            textStyle = textExtraSmall
            break
        case 'text-small':
            textStyle = textSmall
            break
        case 'text-large':
            textStyle = textLarge
            break


        default:
            textStyle = text
            break
    }

    return (

        type === 'text' ?
            <p className={` ${!font && 'font-sans'} ${textStyle} ${tailwind} ${className}`}>{children}</p>
            :
            <h3 className={`${textStyle} ${tailwind} ${className}`}>{children}</h3>

    );
};

const tailwindProps = {
    color: false,
    font: false,
    textSize: false,
}
Text.defaultProps = {
    ...tailwindProps,
    type: 'text'
}
Text.propTypes = {
    type: PropTypes.oneOf(['text-extra-small', 'text-small', 'text', 'text-large',
        'heading-small', 'heading', 'heading-medium', 'heading-large'])
};

export default Text;