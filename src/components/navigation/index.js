import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({children,tailwind,className}) => {
    return (
        <div className={`flex flex-col max-w-xs w-full ${tailwind} ${className}`}>
             
             {children}

        </div>
    );
};

Navigation.propTypes = {
    
    
};

export default Navigation;