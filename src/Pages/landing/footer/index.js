import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../../components/iconbutton'
import { ReactComponent as TwitterSVG } from './images/twitter.svg'
import { ReactComponent as FacebookSVG } from './images/facebook.svg'
import { ReactComponent as YoutubeSVG } from './images/youtube.svg'
import { ReactComponent as InstagramSVG } from './images/instagram.svg'

import Text from '../../../components/text'

const Footer = ({ text, facebook, instagram, twitter, youtube }) => {
    const iconsStyle = 'mx-2 text-gray-600'
    return (
        <div className={`w-full flex-col-reverse justify-center items-center p-8 bg-gray-900 
        flex md:justify-between md:flex-row`}>
             <Text>
                {text}
            </Text>

            <div className='flex mb-8 md:mb-0'>
                {typeof twitter !== 'undefined' &&
                    <IconButton
                    onClick={()=>console.log(`TODO VISIT link`)}
                    color
                        tailwind={iconsStyle}
                        hasBackground={false}
                        src={<TwitterSVG />}
                    />
                }
                {typeof facebook !== 'undefined' &&
                    <IconButton
                    color
                    onClick={()=>console.log(`TODO VISIT link`)}
                        tailwind={iconsStyle}
                        hasBackground={false}
                        src={<FacebookSVG />}
                    />
                }
                {typeof youtube !== 'undefined' &&
                    <IconButton
                    color
                    onClick={()=>console.log(`TODO VISIT link`)}
                        tailwind={iconsStyle}
                        hasBackground={false}
                        src={<YoutubeSVG />}
                    />
                }
                {typeof instagram !== 'undefined' &&
                    <IconButton
                    color
                    onClick={()=>console.log(`TODO VISIT link`)}
                        tailwind={iconsStyle}
                        hasBackground={false}
                        src={<InstagramSVG />}
                    />
                }
            </div>


        </div>
    );
};

Footer.defaultProps = {
    text: '© 2021 CFHHZ, Inc. All rights reserved.',
    

}
Footer.propTypes = {
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
};

export default Footer;