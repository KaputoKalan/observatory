import React,{useState} from 'react';
import PropTypes from 'prop-types';
import DefaultCard from '../../card';
import { ReactComponent as DismissSVG } from '../images/dismiss.svg';
import IconButton from '../../iconbutton';
import '../../theme/fadeAnim.css';
import styled from 'styled-components'
import { useFadeAnimChild } from '../../../hooks/useFadeAnim'
import Simple from './simple'
import Condensed from './condensed'
import ActionBelow from './action-below'
import Avatar from './avatar'
import Split from './split'
import ButtonBelow from './button-below'


const Card = styled(DefaultCard)`
${ ({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`


const Content = (props) => {

    const [showDismiss, setShowDismiss] = useState(true)

    const { variant, onCloseComplete, stopRender, isShown } = props

    const { close, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    let variantView

    switch (variant) {
        case 'simple':
            variantView = <Simple
                {...props}
            />
            break
        case 'condensed':
            variantView = <Condensed
                {...props}
            />
            break
        case 'action-below':
            variantView = <ActionBelow
                {...props}
            />
            break
        case 'avatar':
            variantView = <Avatar
            setShowDismiss={setShowDismiss}
                {...props}
            />
            break
            case 'split':
                variantView = <Split
                setShowDismiss={setShowDismiss}
                    {...props}
                />
                break
                case 'button-below':
                    variantView = <ButtonBelow
                        {...props}
                    />
                    break
    }

    return (
        <Card
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            tailwind='fixed top-0 right-0 flex max-w-sm shadow-2xl m-4 border border-gray-300'
        >
            {variantView}

            <div className={`${variant === 'condensed' && 'flex items-center h-full'}`}>
                {showDismiss &&
                    <IconButton
                        tailwind={`p-1 h-8 w-8 hover:bg-gray-100 top-0 right-0 text-gray-500 m-2
                       hover:text-gray-600`}
                        hasBackground={false}
                        src={<DismissSVG />}
                        onClick={() => close()}
                        color
                        hover
                        size

                    />
                }
            </div>
        </Card>
    );
};

export default Content;