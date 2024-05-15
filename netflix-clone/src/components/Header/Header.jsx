import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import classes from './header.module.css';
import Logo from '../../assets/image/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div className={classNames(classes.headerOuterContainer, { [classes.navBlack]: scrolled })}>
            <div className={classes.headerContainer}>
                <nav className={classes.headerLeft}>
                    <ul>
                        <li><img src={Logo} alt="Logo" width={100} height={100} /></li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse by Language</li>
                    </ul>
                </nav>
                <div className={classes.headerRight}>
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
