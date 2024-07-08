import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

export default function Details() {
  const { state } = useLocation();
  const { title, category, i_frame, video_link, video_link2 } = state;
  console.log(state)
  

  return (
    <div className="details-container">
      <h1 className="details-title">{title}</h1>
      <div className="iframe-wrapper">
        <iframe 
          className="details-iframe" 
          src={video_link} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="iframe-wrapper">
        <iframe 
          className="details-iframe" 
          src={i_frame} 
          title="Content iframe"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="details-category">{category}</h3>
      <div className="iframe-wrapper">
        <iframe 
          className="details-iframe" 
          src={video_link2} 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
