import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, onClick, className, tailwind, rounded, onAnimationEnd,shadow }) => {
    return (
        <div
            onAnimationEnd={onAnimationEnd}
            className={`border border-gray-200 bg-white ${!shadow && 'shadow-md'} ${!rounded && 'rounded-lg'} ${tailwind} ${className}`}
            onClick={onClick}>
            {children}
        </div>
    );
};

const tailwindProps = {
    shadow: false,
    rounded: false,
}

Card.defaultProps = {
    ...tailwindProps,
}
Card.propTypes = {
    onClick: PropTypes.func
};

export default Card;