import React from 'react'
import Collapsible from './Collapsible';
import Hover from './Hover';
import { Link } from 'react-router-dom';
import Resume from '../resume.pdf';

export default function Contact() {

    function renderContent() {
      return (
        <div className='socials-container'>
          <p><a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/ArdaTurkvan" target="_blank" rel="noreferrer">GitHub</a></p>
          <p><a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">Instagram</a></p>
          <p><a href={Resume} download target="_blank">Resume</a></p>
        </div>
      );
    };

    return (
      <div className='section section3 shadow'>
          <a className='anchor' id='section3'></a>
          <Hover>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>Get in touch! (put in resume)</h2></div>
            </div>
          </Hover>
          {renderContent()}
      </div>
    );
}
