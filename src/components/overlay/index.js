import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
${ ({ fadeOut,theme }) => fadeOut ? theme.fadeOut50 : theme.fadeIn50};
`

const Overlay = ({ fadeOut, className,onClick,tailwind }) => {

    return (
        <Container className={`absolute z-30 w-screen h-screen bg-gray-500 opacity-50 ${tailwind} 
         ${className}`}
            fadeOut={fadeOut}
            onClick={onClick}
        />
    );
};

Overlay.propTypes = {
    fadeOut: PropTypes.bool,
    onClick: PropTypes.func
};

export default Overlay;