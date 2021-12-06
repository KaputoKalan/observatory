import React,{useState} from 'react';
import IconButton from '../../../../components/iconbutton';
import Dialog from '../../../../components/dialog';
import { ReactComponent as MenuSVG } from '../..//images/menu.svg'
import { ReactComponent as CancelSVG } from '../../images/cancel.svg'
import Tab from '../../../../components/tab';
import Button from '../../../../components/button';
import { ReactComponent as LogoSVG } from '../../images/logo.svg'
import Icon from '../../../../components/icon';

const MobileAppBar = ({onTabClick,headerItems,selectedItemIndex,tailwind}) => {
    const [showDialog, setShowDialog] = useState(false)

    const logo =  <Icon
                    round={false}
                    src={<LogoSVG />} />

                    const menuIconButton = (src,onClick) =><IconButton
                    tailwind={`hover:text-gray-700 text-gray-600  hover:bg-gray-100`}
                    color
                    hover
                    round={false}
                    hasBackground={false}
                    onClick={onClick}
                    src={src} />
    return (
        <div className={`w-full ${tailwind}`}>
            <div className='w-full flex justify-between'>
               {logo}
               {menuIconButton(<MenuSVG />,() => setShowDialog(true))}
            </div>

            <Dialog
                isShown={showDialog}
                variant='absolute'>
                <div className='flex justify-between p-4'>
                    {logo}
                    {menuIconButton(<CancelSVG />,() => setShowDialog(false))}
                </div>
                {
                    headerItems.map((value, index) => (
                        <Tab
                            bg
                            hover
                            color
                            key={index}
                            tailwind={`my-1 ${index === selectedItemIndex ? ' text-gray-900 bg-gray-100'
                                : 'bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-800'}`}
                            textAlign='left'
                            isSelected={index === selectedItemIndex}
                            onClick={() => onTabClick(index)}
                        >{value}</Tab>
                    ))
                }

                <Button
                    variant='text'
                    size='large'
                    textSize
                    tailwind={`rounded-t-none text-base py-2 text-indigo-600 hover:text-indigo-700 
                    w-full bg-gray-100 hover:bg-gray-200`}>
                    Log in </Button>
            </Dialog>
        </div>
    );
};


export default MobileAppBar;