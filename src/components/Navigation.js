import React from 'react';

export default function Navigation () {
    return (
        <div>
            <div className='nav-menu'>
                <nav>
                    <ul className='nav-menu-list'>
                        <li className='nav-menu-item'>
                            <a className='nav-menu-link active' href='#home'>Home</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a className='nav-menu-link' href='#news'>News</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a className='nav-menu-link' href='#about'>About</a>
                        </li>
                        <li className='nav-menu-item'>
                            <a className='nav-menu-link' href='#contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
