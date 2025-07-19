import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
export const Services = () => {
  const [ExpandedIndex, SetExpandedIndex] = useState(null);
  const handleReadMore = (index) => {
    SetExpandedIndex(prevIndex => {
      if (prevIndex === index) {
        return null; // collapse the currently expanded item
      } else {
        return index; // expand the clicked one
      }
    });
  };

  return (
    <div id='service' className='service'>
      <div className="service-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          // console.log(index)
          const isExpanded = ExpandedIndex === index;
          return <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p className="service-desc">
              {isExpanded
                ? service.s_desc
                : service.s_desc.slice(0, 80) + (service.s_desc.length > 80 ? '...' : '')}</p>
            <div className="service-readmore" onClick={() => handleReadMore(index)}>
              <p>{isExpanded ? "Show Less" : "Read More"}</p>
              <img src={arrow_icon} alt="" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }} />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
