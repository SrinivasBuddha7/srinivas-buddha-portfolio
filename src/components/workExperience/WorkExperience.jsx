import React from 'react'
import './workexperience.css'

//Material Icons
import WorkIcon from '@mui/icons-material/Work';
import { TimelineBlock } from '..';

function WorkExperience() {
    return (
        <div className='workexperience'>
            <div className='workexperience-heading'>
                <h2>Work Experience</h2>
            </div>
            <div className='timeline-container'>

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Sr. UI/UX Designer' duration='August 2022 - Present' company='Vanguard, PA' text=" As a UI/UX Designer, I specialize in crafting user-centric interfaces for software solutions deployed in cloud environments such as AWS and Google Cloud. My responsibilities include collaborating with cross-functional teams to gather user requirements, conducting usability tests, and iterating on designs to enhance user experience. I focus on balancing aesthetics and functionality, ensuring that designs not only look good but also perform efficiently and securely." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='UI/UX Designer' duration='May 2018  - January 2022' company='Mphasis, Bangalore, IN' text="In my role at Mphasis, I designed engaging user interfaces for web applications, utilizing front-end technologies like React and Angular. I emphasized creating intuitive and accessible designs that enhance usability and user satisfaction. My approach involved close collaboration with developers and stakeholders to ensure that user needs were met while maintaining high performance and integration with back-end systems." />

                <TimelineBlock icon={<WorkIcon fontSize='large' />} title='Associate UI/UX Designer' duration='May 2017  - June 2018' company='OTSI, Hyderabad, IN' text="As an Associate UI/UX Designer at OTSI Global, I designed wireframes, prototypes, and scalable design systems using tools like Figma, Sketch, and Adobe XD. I focused on creating seamless user journeys, conducting usability testing, and collaborating with cross-functional teams to deliver high-fidelity, visually consistent designs." />

            </div>
        </div>
    )
}

export default WorkExperience
