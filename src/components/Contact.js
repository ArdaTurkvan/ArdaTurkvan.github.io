import React from 'react'
import Hover from './Hover';
import BodyBubble from './BodyBubble';

export default function Contact() {

    function renderContent() {
      return (
        <div className='content-container'>
          <BodyBubble child={
            <div className='socials-container'>
              <a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank" rel="noreferrer">
                <div className='social-item short-shadow'>
                  <div className='icon linkedin-icon social-icon'></div>
                  <p>LinkedIn</p>
                </div>
              </a>

              <a href="https://github.com/ArdaTurkvan" target="_blank" rel="noreferrer">
                <div className='social-item short-shadow'>
                  <div className='icon github-icon social-icon'></div>
                  <p>GitHub</p>
                </div>
              </a>

              <a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">
                <div className='social-item short-shadow'>
                  <div className='icon instagram-icon social-icon'></div>
                  <p>Instagram</p>
                </div>
              </a>
            </div>
          }></BodyBubble>

          {renderCredits()}

        </div>
      );
    };

    function renderCredits() {
      return (
        <div className="credits-wrap">
          <div className="credits short-shadow">
            <p>
              <a target="_blank" href="https://icons8.com/icon/32323/instagram">Instagram</a>, <a target="_blank" href="https://icons8.com/icon/13930/linkedin">LinkedIn</a>, <a target="_blank" href="https://icons8.com/icon/63777/github">GitHub</a>, <a target="_blank" href="https://icons8.com/icon/13352/monitor">Monitor</a>, <a target="_blank" href="https://icons8.com/icon/x2kiuccLQ98j/communication-skills">Communication Skills</a>, <a target="_blank" href="https://icons8.com/icon/16368/books">Books</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>
              <p>Homepage gif sourced from <a href="https://giphy.com/gifs/tsuritama-MaOlIJ2YPeCOc">giphy.com</a>.</p>
              <p>Arda Turkvan is not associated with the <em>Attack on Titan</em> property or <em>Hajime Isayama</em> in any way.</p>
              <p>All other art assets directly used for the creation of this website, unless otherwise stated, are by Arda Turkvan.</p>
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className='section section3 shadow'>
          <a className='anchor' id='section3'></a>
          <Hover>
            <div className='section-header-wrap shadow'>
              <div className='section-header'><h2>Get in touch!</h2></div>
            </div>
          </Hover>
          {renderContent()}
      </div>
    );
}
