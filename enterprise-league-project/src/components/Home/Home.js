import { useState } from 'react'
import NewsPageTitles from '../NewsPage/NewsPageTitles'
import ActiveTabButtons from '../ActiveButtons/ActiveTabButtons'
import NewsPageItems from '../NewsPage/NewsPageItems'
import MediaBanner from '../MediaBanner/MediaBanner'
import ThePressPage from '../PressPage/ThePressPage'
import '../Home/Home.css'

const Home = () => {

    const [show, setShow] = useState(false);

    const handleChange = e => {
        if (e.target.name === 'ThePressPage') {
            setShow(true)
        } else if (e.target.name === 'NewsPageItems') {
            setShow(false)
        }
        console.log(e)
    }


    return (

        <div className="home">
            <NewsPageTitles title={show ? "Press" : "In the News"} />

            <ActiveTabButtons handleChange={handleChange} />

            {show ? <ThePressPage /> : <NewsPageItems />}

            <MediaBanner />
        </div>
    )
}

export default Home