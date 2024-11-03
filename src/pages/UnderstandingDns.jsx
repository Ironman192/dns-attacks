import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function UnderstandingDNS () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>Understanding DNS</h1>
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
              To get us started, we are going to look at understanding the inner works of DNS. It is important we undestand what this is before we move onto DNS attacks.
              <br /><br /> 
              <p>To do this, we will look at three main topics, which are:</p>
              <ul className='bullet-point-gap hijacking'>
              <li>
                <Link to="/understanding-dns/the-internet">
                  The Internet
                </Link>
              </li>
              <li>
                <Link to="/understanding-dns/what-is-dns">
                  What is DNS?
                </Link>
              </li>
              <li>
                <Link to="/understanding-dns/how-does-dns-work">
                  How does DNS work?
                </Link>
              </li>
            </ul>
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/understanding-dns/the-internet">
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

export default UnderstandingDNS;