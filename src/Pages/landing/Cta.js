import React from 'react';
import Text from '../../components/text';
import Container from '../../components/container';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

const Cta = () => {
    return (
        <Container >
            <Text color tailwind='mb-5 text-white' type='heading'>Get everything DONE and ready in under 10 minutes.</Text>
            <Text
                color
                tailwind='text-indigo-600 -mt-4'
                type='heading-large'>Super fast and simple onboarding process</Text>

            <div className='flex my-6'>
                <Link to='/form'>
                        <Button tailwind='m-2'>Get started</Button>
                </Link>

            </div>
        </Container>
    );
};

export default Cta;