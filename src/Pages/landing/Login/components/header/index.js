import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../../components/icon'
import Text from '../../../../../components/text'

const Header = ({tailwind}) => {
    return (
        <div className={`flex flex-col mt-10 ${tailwind}`}>
            <Text type='heading'>Sign in</Text>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;