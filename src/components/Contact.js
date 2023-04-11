import React from 'react'
import Collapsible from './Collapsible';

export default function Contact() {

    function renderContent() {
      return (
        <div className='socials-container'>
          <p><a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/ArdaTurkvan" target="_blank" rel="noreferrer">GitHub</a></p>
          <p><a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      );
    };

    return (
      <div className='section section3 shadow'>
          <a className='anchor' id='section3'></a>
          <div className='section-header-wrap'>
            <div className='section-header'><h2>Get in touch! (put in resume)</h2></div>
          </div>
          {renderContent()}
      </div>
    );
}
