import React from 'react'
import { Work } from '../../components'
import './works.css'

//Images
import BookLending from '../../assets/projects/BookLending.png'
import ProfileApp from '../../assets/projects/Home.png'
import ExpenseTracker from '../../assets/projects/expense-tracker.png'
import Poster from '../../assets/projects/eranadan_thakkaram_2.jpg'

function Works() {
    return (
        <div className='works section-margin' id='works'>
            <h1 className='gradient-text'>Portfolio</h1>
            <h3>Check Out Some of My Projects.</h3>
            <div className='works-container'>
                <Work image={BookLending} title="Book Lending" subTitle="Web Development" text="Book Lender: Rent/Buy Book Online is a user-friendly platform for renting or purchasing books. It features easy book searches, rental options, and affordable monthly subscriptions. The design is intuitive, offering seamless navigation and access to free books and personalized deals, catering to a wide range of readers." link="https://www.figma.com/design/b9sFD77ZUiL5Mvh8eBtVns/Book-Lending?node-id=0-1&t=mPLHP7KMJkHQUlHQ-1" />

            </div>
        </div>
    )
}

export default Works
