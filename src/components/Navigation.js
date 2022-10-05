import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Navigation () {
    const { theme, toggle, dark } = useContext( ThemeContext );
    return (
        <div className='nav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className='nav-container'>
                <div className='nav-menu'>
                    <ul className='menu-list'>
                        <li className='menu-list-item'>
                            <Link style={{ color: theme.color }} className='menu-list-item-link active' to='/'>Home</Link>
                        </li>
                        <li className='menu-list-item'>
                            <Link style={{ color: theme.color }} className='menu-list-item-link' to='#'>News</Link>
                        </li>
                        <li className='menu-list-item'>
                            <Link style={{ color: theme.color }} className='menu-list-item-link' to='#'>About</Link>
                        </li>
                        <li className='menu-list-item'>
                            <Link style={{ color: theme.color }} className='menu-list-item-link' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <a className='switch-mode'
                    href='#'
                    onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid='toggle-theme-btn'
                >
                    Switch to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
        </div>
    );
}
