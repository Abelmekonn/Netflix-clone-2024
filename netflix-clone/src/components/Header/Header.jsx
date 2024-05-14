import React, { useState, useEffect } from 'react';
import "./header.css";
import Logo from '../../assets/image/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            if (isTop !== scrolled) {
                setScrolled(isTop);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div className={`header-outer-container ${scrolled ? 'nav_black' : ''}`}>
            <div className='header-container'>
                <div className='header-left'>
                    <ul>
                        <li><img src={Logo} alt="" width={'100'} height={'100'} /></li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>Tv Show</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyLists</li>
                        <li>Browser my language</li>
                    </ul>
                </div>
                <div className='header-right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
