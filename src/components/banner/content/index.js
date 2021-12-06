import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { ReactComponent as DismissSVG } from '../images/dismiss.svg'
import styled from 'styled-components'
import IconButton from 'components/iconbutton'
import { useFadeAnimChild } from 'hooks/useFadeAnim'
import Text from 'components/text'

const Container = styled.div`
${ ({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Content = ({ onButtonClick, buttonText, text, tailwind, className, onCloseComplete, isShown,
    stopRender, showDismiss }) => {

    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    return (
        <Container
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            className={` p-2 bg-indigo-700 flex bottom-0 left-0 right-0 justify-between rounded-md m-4
           items-center fixed ${tailwind} ${className}`}>
            <Text
                type='text-small'
                color
                tailwind='text-gray-100'
            >
                {text}
            </Text>

            <div className='flex'>
                <Button
                    color
                    rounded
                    tailwind='text-indigo-600 whitespace-none ml-4 rounded text-xs'
                    onClick={onButtonClick}
                    size='extra-small'
                    variant='outline'
                >{buttonText}
                </Button>

                {showDismiss &&

                    < IconButton
                        color
                        
                        size='small'
                        tailwind='text-gray-100 ml-4  '
                        onClick={() => close()}
                        src={<DismissSVG/>}
                    />
                }
            </div>
        </Container>
    );
};

export default Content;