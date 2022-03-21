import React from 'react'
import "./NewsPageItems.css"


const news_items =
    [
        {
            image: < img src="../../../assets/NewsPageImgs/startupinfo.png" alt='img' id='img' />,
            title: 'Enterprise League, Building the Fastest Growing Business Platform for Companies',
            content: 'That’s why it is important to optimize the way we gather and analyze user feedback. When creating our feedback forms, we focus on addressing common concerns and misunderstandings that we have heard about from our support channels. We often opt for the personal approach with our users and are in regular contact with them through social media and email.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/business-insider-logo.png" alt='img' id='img' />,
            title: 'Best online business communities',
            content: 'Enterprise League is a platform that connects SMEs, enabling them to find business partnerships and collaborations. The Al-powered online platform allows users to screen potential partnerships quickly, and organize existing ones. The aim is to help your business become more visible, and grow faster, something Enterprise League knows all about - its fast-growing business itself.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/classicinformatics.png" alt='img' id='img' />,
            title: 'Best Business Apps',
            content: 'Irina Georgieva, Co-Founder & CEO of Enterprise League tells that ‘Enterprise League’ is the fastest growing business platform for startups and SMEs, having acquired circa 100K users in 2020 alone. Powered by a smart search algorithm, companies get recommended business opportunities tailored to their preferences. Companies use the platform to take back control over their finances and operations, reduce business dependencies like relying on middlemen, limited clients, weak supply chain, and more.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/startup.png" alt='img' id='img' />,
            title: 'Top 101 small and medium businesses and startups',
            content: 'At Enterprise League, we are passionate about helping people improve the way they do business. We are on a mission to help millions of entrepreneurs expand their business horizon and increase their company’s success.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/uknews.png" alt='img' id='img' />,
            title: 'Business platform Enterprise League sees unprecedented user growth',
            content: 'Enterprise League is extremely proud to share such results particularly since it is facilitating the way companies collaborate during these difficult times we are facing. We are constantly collecting first-hand feedback from our users with the sole purpose of creating and providing more value to companies within the UK.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/umi.png" alt='img' id='img' />,
            title: 'Startup Stories: Enterprise League',
            content: 'Enterprise League (EL) is a B2B platform for SMEs. Through EL’s platform, small businesses can advertise what their value offerings are for free and search for other firms they can do business with. Moreover, companies can specify exactly what they need at the moment through “bid” posts which are also searchable through our extensive search filters (location, industry, sector, number of employees, and specific keywords).',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/upgrade.png" alt='img' id='img' />,
            title: '5 Cost effective ways to scale up your business',
            content: 'Many entrepreneurs around the world are under constant pressure to scale up their businesses. They repeatedly receive different bits of advice from both investors and advisors. One side wants to scale your business fast, whilst the other advises you to do go through the process patiently and carefully. To make things easier for you when choosing the best business scaling strategy, we will go through every detail you need to know, starting with the basics.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/upjourney.png" alt='img' id='img' />,
            title: 'How to Stop Feeling Overwhelmed at Work (121 Powerful Tips)',
            content: 'At some point, you must realize that you need to change something if you want to keep your health and sanity, and still succeed with your business. I understood that, adapted to the situation and found a solution to this common problem that many entrepreneurs face.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/prmoment.png" alt='img' id='img' />,
            title: 'Reasons to be Cheerful about Brexit',
            content: 'We are expecting to fare even better as there will be an increasing need to connect EU and UK SMEs to work together. As we are breaking walls between countries, we are witnessing a lot of connections between companies from the same industry, meaning SMEs are open to collaborate with their fellow industry members, to expand knowledge and create new opportunities. This will undoubtedly trigger a surge in innovation and we can expect to see growth for SMEs.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/globalapptesting.png" alt='img' id='img' />,
            title: 'Time Management Techniques from CTOs',
            content: 'As a CTO the most important things for me are the productivity & efficiency of my team. Considering the fast-paced & information-saturated world we live in, it is crucial for us to be clear about the priorities for the team and how that reflects our goals.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/cydomedia.png" alt='img' id='img' />,
            title: '3 Entrepreneurs provide advice on leading teams with remote employees',
            content: 'At Enterprise League, people are our most valuable resources. Their contribution helps us keep the business platform running and growing despite the pandemic crisis we are currently facing.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/tech-round-logo.png" alt='img' id='img' />,
            title: 'Interview with Irina Georgieva, Co-founder and CEO of Enterprise League',
            content: 'We can expect to see Enterprise League to play a significant part in helping businesses out of the crisis caused by the pandemic. Many companies will turn to the platform in search for business deals and collaborations to fill out the gaps left by their clients and business partners.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/harmonizelyblog.png" alt='img' id='img' />,
            title: '10+ insightful tips for new managers',
            content: 'In order to unleash your employees’ full potential, you must give them responsibilities. Allocate each employee processes which they own and manage independently. Your role will be to provide them with guidance and be available for consultations. Therefore giving them a sense of ownership and responsibility will enable them to grow in their role quicker and more successfully. It will challenge their time management and organizational skills but with time and perseverance, they will acquire skills that won’t come from micromanagement.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/usco.png" alt='img' id='img' />,
            title: 'Ways to cut overhead costs',
            content: 'Review your marketing mix [and] compare how much you are spending and gaining from each channel. If, for example, you are investing a lot in PR … but you don’t see a significant increase in your website traffic, it is very likely that you are targeting the wrong marketing channel.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/mycorporation.png" alt='img' id='img' />,
            title: 'Work from home outfit',
            content: 'A simple day dress is my to-go WFH outfit. It is easy to wear, and often very comfortable for long hours spent sitting on a desk. The main reasoning behind this type of outfit is to wear something that isn’t tight and makes you feel uncomfortable, that you cannot wait to take off after work.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/welivetobuild.png" alt='img' id='img' />,
            title: 'CEO Interview - Irina Georgieva',
            content: 'The original idea was to bring more business opportunities to small companies around the world by giving them direct access to potential business collaborations and eliminate the need to rely on the middleman. This is still at the core of what we do.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/carolroth.png" alt='img' id='img' />,
            title: 'Positive Mindset Tips for Small Business',
            content: 'Focus on the things/aspects of your work that you can control. Be rational, put your energy towards identifying ways you can adapt your business e.g., increase your online presence, join seminars, do online networking, etc. Key is to think of ways to adapt your practices to fit the current situation we are facing.',
        },
        {
            image: < img src="../../../assets/NewsPageImgs/workclub.png" alt='img' id='img' />,
            title: 'Future of Works Interview - Irina Georgieva',
            content: 'Our goal has been to be very agile in terms of our employee performance and their processes. Thus we introduced monthly employee performance reviews to help us identify bottlenecks in a timely manner and work on eliminating these.'
        },
        {
            image: < img src="../../../assets/NewsPageImgs/beyourown.png" alt='img' id='img' />,
            title: 'Business Education for female entrepreneurs',
            content: 'The number of female entrepreneurs has been on the rise in recent years and now more than ever women are aspiring to achieve financial freedom. However, it is a fact that many are discouraged by the huge gap of knowledge they are faced with. Not knowing where to start and what steps they need to take, keeps women stuck in their 9-5 jobs.',
        },
    ]




const NewsPageItems = () => {


    return (
        <div className='news-page-items__main'>
            {news_items.map(newsItemFunction => {
                return (
                    <div className='news-page-items__news-tab'>
                        <div className='image'>
                            <div className='news-page-items_img'>{newsItemFunction.image}</div>
                        </div>
                        <h5 className='news-page-items__title'>{newsItemFunction.title}</h5>
                        <p className='news-page-items__content'>{newsItemFunction.content}
                            <br />
                            <br />
                            Irina Georgieva CEO and co-founder of Enterprise League
                        </p>
                    </div>
                )
            })};
        </div>
    )
}

export default NewsPageItems