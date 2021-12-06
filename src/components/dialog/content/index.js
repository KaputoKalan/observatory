import React, { useRef, useEffect, useState } from 'react';
import { useFadeAnimChild } from '../../../hooks/useFadeAnim'
import styled from 'styled-components';
import Simple from './simple';
import useClickOutside from '../../../hooks/useClickOutside';
import Action from './action';
import { ReactComponent as DismissSVG } from './dismiss.svg';
import IconButton from '../../iconbutton';
import '../../theme/fadeAnim.css';
import Overlay from '../../overlay';
import Absolute from './absolute'

const Wrapper = styled.div`
${ ({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Content = (props) => {
    const { variant, stopRender, isShown, shouldCloseOnOverlayClick,
        onCloseComplete, showDismiss, } = props;

    const { close: closeDialog, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    const variantType = () => {

        const simple = <Simple
            {...props}
            grayFooter={variant === 'simple-gray'}
            closeDialog={closeDialog}
        />

        const action = <Action
            {...props}
            closeDialog={closeDialog}
            doubleAction={variant === 'double-action'}
        />

        switch (variant) {

            case 'simple-gray':
                return simple;
            case 'action':
                return action;
            case 'double-action':
                return action;
            default:
                return simple;

        }
    }

    const dialogRef = useRef()

    useClickOutside([dialogRef], () => {
        if (shouldCloseOnOverlayClick) {
            closeDialog();
        }
    }, variant !== 'absolute')


    return (
        variant === 'absolute' ?
            <Absolute
                {...props}
                onAnimationEnd={onAnimationEnd}
                fadeOut={fadeOut} />
            :
            <div className='fixed top-0 bottom-0 left-0 right-0 '>

                <Overlay
                    fadeOut={fadeOut} />

                <Wrapper
                    className={`z-40 absolute flex items-center justify-center w-full h-full`}
                    fadeOut={fadeOut}
                    onAnimationEnd={onAnimationEnd}>
                    <div className='py-4'>

                        <div
                            ref={dialogRef}
                            className={`shadow-md mx-2 rounded-lg bg-white max-w-lg transform shadow-xl`}
                        >
                            {showDismiss &&
                                <div className={` justify-end absolute w-full flex p-4`}>
                                    <IconButton
                                        tailwind='p-1 h-8 w-8 hover:bg-gray-100 text-gray-500'
                                        hasBackground={false}
                                        src={<DismissSVG />}
                                        onClick={closeDialog}
                                        color
                                        hover
                                        size
                                    />
                                </div>

                            }

                            {variantType()}

                        </div>
                    </div>
                </Wrapper>

            </div>

    );
};

export default Content;