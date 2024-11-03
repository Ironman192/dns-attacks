import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/pngtree-happy-emoji-emoticon-showing-double-thumbs-up-like-png-image_4708251.png'

function Summary () {
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
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '14px'
        }}>
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>Summary</h1>
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
              }}>Summary</a>
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
          <h2 id="intro" className="section" style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>Summary</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
              <p>
              In this course, we explored the essential concepts behind DNS (Domain Name System), a foundational technology that helps users navigate the 
              internet. We learned how DNS works, why it’s important, and how attackers can exploit it. Let’s summarize the key points we covered in each 
              section.
              </p>
              <br />
              <ul className="detecting-steps">
                <li><b>Introduction to the Internet and DNS</b></li>
                  <p>
                  We began by understanding the basic structure of the internet and how DNS acts as the internet’s address book, translating 
                  website names into IP addresses. This process allows computers to locate and connect to websites in a way that’s simple and user-friendly.
                  </p>
                <li><b>Understanding How DNS Works</b></li>
                  <p>
                  This section explained how DNS servers work together to find the IP address for a website. Using a library analogy, we saw that a DNS 
                  lookup is like searching for the author of a book in a library, moving from local references to more specific locations until the desired information 
                  is found. Each step in this lookup process is important for keeping internet browsing fast and reliable.
                  </p>
                <li><b>Why DNS is Exploited</b></li>
                <p>
                  We saw that cybersecurity is the art of protecting pur devices and data from attackers and there are three pillars that govern this: Confidentiality, Integrity and Availability.
                  However, as DNS is so important to how the Internet works, and everyone constantly uses it, then it inherently makes it an obvious target
                  for hackers. They will find any way they can to exploit this protocol.
                </p>
                <li><b>Types of DNS Attacks</b></li>
                <p>
                  In this section, we delved into the many ways hackers can exploit DNS. The three main types of DNS attacks we looked at were:
                  <ul>
                    <li>Spoofing</li>
                    <li>Hijacking</li>
                    <li>Tunneling</li>
                  </ul>
                </p>
                <li><b>Prevention Methods</b></li>
                <p>
                  We also looked at technologies and practices that help protect us against DNS attacks, given the adverse consequences DNS attacks can have on
                  individuals and organisations. Some of these technologies and practices include:
                  <br/><br/>
                  <ul>
                    <li>DNSSEC: Adds digital signatures to DNS responses, ensuring data integrity.</li>
                    <li>Regular Monitoring: Keeps an eye on DNS traffic for suspicious activity</li>
                    <li>Use secure DNS services: Use reputable DNS services like Google Public DNS and Cloudflare</li>
                  </ul>
                </p>
                </ul>
                <br />
                Overall, this course provided a foundational understanding of DNS and DNS security, giving you the knowledge to recognise and appreciate the 
                importance of DNS protections in maintaining a safe and functional internet.
                <br/><br/>
                <ImageComponent 
                src={image1}
                alt="Happy!!!"
              />
              <br />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/dns-attacks-impacts">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary;