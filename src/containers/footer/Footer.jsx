import React from 'react'
import { SocialMedia } from '../../components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

// Material Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer section-padding'>
            <div className='contact-details '>
                <div className='contact-details-wrapper'>
                    <div className='email contact-details-child'>
                        <EmailIcon fontSize='large' sx={{ color: '#fff' }} />
                        <p>srinivasbuddha7@gmail.com</p>
                    </div>
                    <div className='phone contact-details-child'>
                        <CallIcon fontSize='large' sx={{ color: '#fff' }} />
                        <p>+1 (302)-709-1504</p>
                    </div>
                    <div className='contact-details-child'>
                        <a href='https://www.linkedin.com/in/srinivas-buddha-a56b43327/' target="_blank" >
                            <LinkedInIcon sx={{ color: '#fff' }} fontSize='large' />
                        </a>
                        <a href='https://www.linkedin.com/in/srinivas-buddha-a56b43327/' target="_blank" >
                            <p>Srinivas Buddha</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
