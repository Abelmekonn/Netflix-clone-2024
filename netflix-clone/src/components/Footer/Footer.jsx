import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'
function Footer() {
    return (
        <div className='footer-outer-container'>
            <div className='footer-inner-container'>
                <div className='footer-icons'>
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
                <div className='footer-data'>
                    <div>
                        <ul>
                            <li>Audio description</li>
                            <li>Investor Relations</li>
                            <li>Legal Relations</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookies preference</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Gift Card</li>
                            <li>Term of use</li>
                            <li>Corporate information</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Media center</li>
                            <li>Privacy</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <div className='service-code'>
                    <p>service code</p>
                </div>
                <div className='copyRight'>
                    &#169; 1994-2024 Netflix.inc
                </div>
            </div>
        </div>
    )
}

export default Footer
