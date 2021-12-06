import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text'
import Icon from '../../../icon'
import {ReactComponent as TickSVG} from '../../../notification/images/tick.svg'

const Condensed = ({ title, content,}) => {
    return (
        <div className='w-full flex'>
            <Icon
                hasBackground={false}
                color
                size
                tailwind=' text-green-600 mt-4 h-6 w-6 mx-2'
                src={<TickSVG />} />

            <div className='my-4'>
                <Text
                    type='text-small'
                    tailwind='text-gray-900 font-medium'
                    color>{title}</Text>

                <Text

                    type='text-small'
                >{content}</Text>
            </div>
        </div>
    );
};

Condensed.propTypes = {
    
};

export default Condensed;