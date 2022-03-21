import React from 'react'
import './NewsPageTitles.css'

const NewsPageTitles = ({ title }) => {
    return (

        <div className='the-news-page__titles'>
            <h1>Enterprise League
                <span id='span2'>{title}</span>
            </h1>
        </div>

    )
}

export default NewsPageTitles