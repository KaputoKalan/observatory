import React from 'react';
import './LowerSection.css';
import Button from '../../components/button';
import { ReactComponent as SVG4 } from './images/sitting-4.svg'
import { ReactComponent as SVG5 } from './images/sitting-5.svg'
import Cta from './Cta';
import AppBar from '../../components/appbar';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <Cta />
            </div>

            <div className='col'>
              <div className='flex flex-row'>
                <SVG4 />
                <SVG5 />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <AppBar variant='light' tailwind='flex flex-row justify-around my-8'>
        
          <h1>MOH</h1>
          <h1>MOL</h1>
          <h1>MOI</h1>
  
      </AppBar>
    </>
  );
}

export default HeroSection;
