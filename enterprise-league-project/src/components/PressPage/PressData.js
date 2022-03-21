import { useState } from "react";
import "./PressData.css"
import { Button } from 'reactstrap'


const PressData = ({ image, title, locationDate, shortContent, longContent }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleClass = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='press-page-items__news__tab'>
            <div className='press-page-items__img' > <img src={image} /> </div>
            <h5 className='press-page-items__title'>{title}</h5>
            <p className='press-page-items__date'>{locationDate}</p>
            <p className='press-page-items__content__short'>{shortContent}</p>
            <br />
            {
                expanded &&
                <p className="press-page-items__content__long" dangerouslySetInnerHTML={{ __html: longContent }}></p>
            }
            <Button className="press-page-items__button" onClick={toggleClass}><p className="button-text">{expanded ? "Show Less" : "Show More"}</p></Button>
        </div >
    )
}


export default PressData