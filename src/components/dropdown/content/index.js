import React,{useState, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useFadeAnimChild} from '../../../hooks/useFadeAnim'
import '../../theme/fadeAnim.css'
import useClickOutside from '../../../hooks/useClickOutside';


const Container = styled.div`
     ${ ({ fadeOut ,theme}) => fadeOut ?theme.fadeOutSize : theme.fadeInSize};
`;

const Content = ({stopRender,isShown,setIsShown, position,content }) => {
    const {close,fadeOut,onAnimationEnd} = useFadeAnimChild(isShown,stopRender,()=> setIsShown(false))
    const dialogRef = useRef()

    const menuItems = content.props.children.map((element) =>(
         React.cloneElement(element,{close: close})
    ))

    useClickOutside([dialogRef],()=> close())

    return(
         <Container
         className='z-index-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg'
         ref={dialogRef}
         fadeOut={fadeOut}
        onAnimationEnd={onAnimationEnd}
       >
       <div className="rounded-md bg-white shadow-xs">
        <div className='py-1'>
            {menuItems}
        </div>
        </div>
    </Container>
    );
}

Content.propTypes = {
    
};

export default Content;