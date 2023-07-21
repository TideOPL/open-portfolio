import React from 'react';
import NavButton from './NavButton';

const Nav = () => {
    return (
        <div className='flex flex-row space-x-4'>
            <NavButton url='mailto:contactobinewman@gmail.com'>
                Contact
            </NavButton>
            <NavButton url='portfolio' primary shallow>
                Portfolio
            </NavButton>
        </div>
    )
}

export default Nav;