import React from 'react'
import "../MediaBanner/MediaBanner.css"

const MediaBanner = () => {
    return (
        <section className='media-contact-banner'>
            <div className='media-banner'>
                <img className='media-banner-img' src='../../../assets/BannerImgs/media.svg' alt='Media Image' />
                <div className='media-text-banner'>
                    <h3 className='h3-text'>Media</h3>
                    <p className='text-body'>Download our logos and brand photography for media use.</p>
                </div>
            </div>
            <div className='contact-banner'>
                <img className='media-banner-img' src='../../../assets/BannerImgs/contact.svg' />
                <div className='media-text-banner'>
                    <h3 className='h3-text'>Contact</h3>
                    <p className='text-body'>For additional information contact us on info@enterpriseleague.com</p>
                </div>
            </div>
        </section>
    )
}

export default MediaBanner