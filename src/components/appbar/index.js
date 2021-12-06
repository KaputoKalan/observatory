import React from 'react';
import PropTypes from 'prop-types';

const AppBar = ({variant,tailwind,className,children}) => {
    let variantStyle;

    const variantLight ='bg-white border-b border-gray-300'
    const variantDark = 'bg-gray-800'

    switch(variant){
        case 'light':
            variantStyle = variantLight;
            break
            default:
                variantStyle = variantDark;
                break
    }

return (
        <div className={`flex items-center h-16 w-full ${variantStyle} ${tailwind} ${className}`}
        >
            {children}
        </div>
    );
};

AppBar.defaultProps ={
variant: 'dark',
}

AppBar.propTypes = {
    variant: PropTypes.oneOf(['dark','light']),
};

export default AppBar;