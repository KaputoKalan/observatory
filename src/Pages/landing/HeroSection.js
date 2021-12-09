import React, { useState } from 'react';
import Text from '../../components/text';
import Button from '../../components/button';
import { heroObjOne, heroObjTwo } from './DataHero';
import { ReactComponent as SVG1 } from './images/standing-20.svg'
import { ReactComponent as SVG2 } from './images/standing-23.svg'
import { ReactComponent as SVG3 } from './images/standing-24.svg'
import { Link } from 'react-router-dom';




const HeroSection = (img, alt) => {

    const button = 'bg-orange-500'
    return (
        <div className='bg-white w-full px-4'>

            <div className='flex flex-col py-20 md:relative'>
                 <Text
                    type='heading-large'
                    textSize
                    tailwind=' text-center text-4xl sm:text-5xl leading-tight '>            
                    Help your Community Grow by  <br className='md:hidden' />
                    <span className='text-center text-orange-500 ' >Taking Action</span></Text>
                <Text textSize tailwind='text-center mt-4 md:mx-32'>Are you currently facing any Housing and Environmental Challenges in your community?</Text>

                <div className='flex flex-col md:flex-row justify-center md:my-8 w-full md:w-auto mt-16'>
                    <Link to='/form'>
                        <Button
                        tailwind={button}
                        >Get started</Button>
                    </Link>

                </div>
                <div className="flex flex-row svg">
                    <SVG1 />
                    <SVG2 />
                    <SVG3 />

                </div>

            </div>

        </div>
    );
};

export default HeroSection;