import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../text'
import Badge from '../../badge';
import Icon from '../../icon';

const NavItem = ({ className, children, isSelected, onClick, tailwind, icon, badge ,variant}) => {
    let selectedBg 
    let selectedColor
    let notSelectedBg 
    let notSelectedColor
    let hoverBg 
    let hoverColor 
    let iconColor
    let badgeColor

    if(variant === 'dark'){
        selectedBg = ' bg-gray-900'
        selectedColor = ' text-gray-100'
        notSelectedBg = ' bg-transparent'
        notSelectedColor = ' text-gray-200'
        hoverBg = ' hover:bg-gray-800'
        hoverColor = ' hover:text-gray-100'
        iconColor = isSelected ? ' text-gray-100' : ' text-gray-200'
        badgeColor = isSelected ? selectedColor + ' bg-gray-700 ' : notSelectedColor + selectedBg

    }else{
         selectedBg = ' bg-gray-300'
         selectedColor = ' text-gray-800'
         notSelectedBg = ' bg-transparent'
         notSelectedColor = ' text-gray-600'
         hoverBg = ' hover:bg-gray-200'
         hoverColor = ' hover:text-gray-700'
         iconColor = isSelected ? ' text-gray-700' : ' text-gray-600'
         badgeColor = isSelected ? selectedColor + ' bg-white ' : notSelectedColor + selectedBg
    }

    return (
        <div className={`w-full cursor-pointer px-3 flex py-2 my-1 rounded-md mx-2 
          transition duration-150 ${notSelectedBg} 
          ${isSelected ? selectedBg + selectedColor : notSelectedColor + hoverColor + hoverBg}
          ${tailwind} ${className} `}
            onClick={onClick}

        >
            {icon &&
                <div className='h-full flex items-center'>
                    <Icon
                        hasBackground={false}
                        size
                        color

                        tailwind={`w-6 h-6 mr-4
                 ${iconColor}`}
                        src={icon} />
                </div>
            }

            <Text
                color
                tailwind={`capitalize font-medium w-full`}> {children} </Text>

            {badge &&
            <div className='flex items-center'>
                <Badge
                    bg
                    color
                    tailwind={`font-medium transition duration-200 py-1
                ${badgeColor} `}
                >{badge}
                </Badge>
                </div>
            }
        </div>
    );
};

NavItem.defaultProps = {
    isSelected: false,
    variant: 'light'

}

NavItem.propTypes = {
    variant :PropTypes.oneOf(['light' , 'dark']),

    onClick: PropTypes.func,
    /** svg icon */
    icon: PropTypes.object,
    /** a badge component to add */
    badge: PropTypes.string,
};

export default NavItem;