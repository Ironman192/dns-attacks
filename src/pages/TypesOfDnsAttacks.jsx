import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TypesOfDnsAttacks () {
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
        display: 'flex',              // Enables flexbox layout
        alignItems: 'center',        // Centers vertically    // Centers horizontally
        }}>
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>Types of DNS Attacks</h1>
      </div>
      <NavbarComponent />
      <div className="info-container" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        // background: '#f1f1f1',
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
              }}>Overview</a>
            </li>
          </ul>
        </div>
        <div className="info" style={{
          width: '75%',
          padding: '20px 40px 20px 20px',
          // background: '#f1f1f1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <h2 style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>Overview</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Now that we understand how DNS works and why it’s important, let’s explore what happens when things go wrong. DNS attacks are a common way 
              that hackers try to take control of the internet by targeting the confidentiality, integrity and availability (CIA Triad we discussed just then) 
              of online systems. These attacks can cause serious problems, like sending you to fake websites or taking entire websites offline.
              <br /><br /> 
              Let’s look at some of the most common types of DNS attacks, how they work, and their associated consequences.
              <br /><br /> 
              <p>In this course, we will look at three of the most common types of DNS attacks, which are:</p>
              <ul className='bullet-point-gap hijacking'>
                <li>
                  <Link to="/types-of-dns-attacks/dns-spoofing-arp">
                    DNS Spoofing
                  </Link>
                </li>
                <li>
                  <Link to="/types-of-dns-attacks/dns-hijacking">
                    DNS Hijacking
                  </Link>
                </li>
                <li>
                  <Link to="/types-of-dns-attacks/dns-tunneling">
                    DNS Tunneling
                  </Link>
                </li>
              </ul>
              <div className="note" style={{
                marginTop: '30px',
                marginBottom: '25px',
                padding: '10px',
                border: '1px solid',
                borderRadius: '0.5rem',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                backgroundColor: '#F1F1F1'
              }}>
                <b>NOTE:</b> In this section, it is important to note that DNS attacks are illegal, and thus we will not be going through how to actually 
                perform a DNS attack, but will just look at the theory behind it.
              </div>
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/cybersecurity-intro">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-spoofing-arp">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                  Continue ➩
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TypesOfDnsAttacks;