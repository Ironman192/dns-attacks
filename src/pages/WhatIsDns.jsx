import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/what_is_dns.png'

const WhatIsDns = () => {
  const [activeSection, setActiveSection] = useState('intro');

  // Scroll handler to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = 'intro';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{
        background: 'radial-gradient(circle at 10% 20%, rgb(111, 111, 219) 0%, rgb(182, 109, 246) 72.4%)',
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        }}>
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>What is DNS?</h1>
      </div>
      <NavbarComponent />
      <div className="info-container" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        marginTop: '40px',
        marginLeft: '170px',
        marginRight: '150px',
        gap: '50px'
      }}>
        <div className="nav-side" style={{
          width: '25%',
          color: 'black',
          padding: '20px 10px 10px 20px',  
          alignSelf: 'flex-start',
          marginTop: '15px',
          position: 'sticky',
          top: '20px'
        }}>
          <div style={{
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              paddingBottom: '12px',
              borderBottom: '2px black solid'
            }}>
            Navigation
          </div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li className="side-menu-names">
              <a href="#intro" style={{
                color: activeSection === 'intro' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'intro' ? 'bold' : 'normal',
              }}>What is DNS?</a>
            </li>
          </ul>
        </div>
        <div className="info" style={{
          width: '75%',
          padding: '20px 40px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <h2 id="intro" className="section" style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>What is DNS?</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              DNS (Domain Name System) is one of the most significant components of the internet today, but it’s something most of us don’t really think about.
              <br /><br />
              Here’s an analogy to make it clearer: Imagine you’re trying to call a friend. You might know their name, but your phone needs their phone number 
              to make the call. If you don't know the number, you’ll look it up in your phone’s contact list (or if we’re living 20 years ago, we’ll look it up 
              in a phone book).
              <br /><br />
              Similarly, when you type in a website’s name, your computer doesn’t actually understand that name. It needs the website’s IP address to connect to 
              it. The DNS is like the phonebook—it looks up the IP address for the website you want to visit and connects you to it.
              <br /><br />
              Without DNS, we’d have to remember complicated patterns of numbers (IP addresses) just to visit a website, which would be very difficult! Could you 
              imagine, you just wanted to google something, and you’ll have to remember the number 142.250.72.206.
            </p>
            <br/>
            <ImageComponent 
              src={image1} 
              alt="Internet image" 
              source="https://cf-assets.www.cloudflare.com/slt3lc6tev37/5exJlPlwAT2kQCITQhrIi9/1f771294e218b64c0490e83968075766/what_is_dns.png"
            />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/understanding-dns/the-internet">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/understanding-dns/how-does-dns-work">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                  Continue ➩
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default WhatIsDns;