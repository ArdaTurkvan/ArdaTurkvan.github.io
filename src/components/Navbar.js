import React from 'react'

export default function Navbar() {

  // this is not good practice but i just cant get it to work with the UseState hook right now
  var lastScrollTop = 0;
  const selfRef = React.useRef(null);
  
  React.useEffect(() => {
    window.removeEventListener('scroll', handleOnScroll);
    window.addEventListener('scroll', handleOnScroll);
  });

  function handleOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      selfRef.current.style.top = "-80px";
    }
    else {
      selfRef.current.style.top = "0px";
    }
    lastScrollTop = scrollTop;
  }

  return (
    <div ref={selfRef} className='navbar'>
        <a className='navbar-item section0 short-shadow' href="#home">Home</a>
        <a className='navbar-item section1 short-shadow' href="#section1">About Me</a>
        <a className='navbar-item section2 short-shadow' href="#section2">Projects</a>
        <a className='navbar-item section3 short-shadow' href="#section3">Get in touch!</a>
    </div>
  );
}
