import React from 'react';
import PropTypes from 'prop-types';
import profilePNG from './images/profile.png'

const Avatar = ({ variant, size, src, className, stacked ,onClick,alt,tailwind}) => {
    let sizeType;

    let image = (src ? src : profilePNG) 

    switch (size) {
        case 'small':
            sizeType = ' w-6 h-6';
            break;
        case 'large':
            sizeType = ' w-10 h-10';
            break;
        default:
            sizeType = ' w-8 h-8';
            break;
    }

    return (
        <img
        onClick={onClick}
            src={image}
            alt={alt}
            className={`bg-white ${(stacked ? ' -ml-2' : ' ml-0')} ${sizeType} border-2 border-white
            ${(variant === 'circle' ? ' rounded-full' : ' rounded')} ${tailwind}  ${className}`}
            />

    );
};

Avatar.defaultProps = {
    stacked: false,
    size: 'medium',
    variant: 'circle',
}
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['rounded', 'circle']),
    onClick: PropTypes.func,
    alt: PropTypes.string,
};

export default Avatar;