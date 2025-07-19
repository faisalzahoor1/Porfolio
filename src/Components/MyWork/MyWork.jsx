import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
export const MyWork = () => {
    const [isScrollAble, setScrollAble] = useState(false)

    const handleScrolling = () => {
        setScrollAble(prev => !prev)
    }
    return (
        <div id='mywork' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className={`mywork-container ${isScrollAble? 'scroll-enabled':''}`  } >
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt='imgs' />
                })}
            </div>
            <div className="mywork-button" onClick={()=>handleScrolling()}>
                    <p>{isScrollAble?'Show less': 'Show more'}</p>
                    <img src={arrow_icon} alt="" />
                </div>


        </div>
    )
}
