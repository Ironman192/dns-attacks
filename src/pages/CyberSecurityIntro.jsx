import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/cybersecurity.jpeg';
import image2 from '../Assets/cia-triad.svg';

function CybersecurityIntro () {
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
        alignItems: 'center'    
        }}>
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>Cybersecurity Intro</h1>
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
              }}>Introduction</a>
            </li>
            <li className="side-menu-names">
              <a href="#confidentiality" style={{
                color: activeSection === 'confidentiality' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'confidentiality' ? 'bold' : 'normal',
              }}>Confidentiality</a>
            </li>
            <li className="side-menu-names">
              <a href="#integrity" style={{
                color: activeSection === 'integrity' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'integrity' ? 'bold' : 'normal'
              }}>Integrity</a>
            </li>
            <li className="side-menu-names">
              <a href="#availability" style={{
                color: activeSection === 'availability' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'availability' ? 'bold' : 'normal',
              }}>Availability</a>
            </li>
            <li className="side-menu-names">
              <a href="#dns-attacks" style={{
                color: activeSection === 'dns-attacks' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'dns-attacks' ? 'bold' : 'normal'
              }}>DNS Attacks</a>
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
          }}>Introduction to Cybersecurity</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Now that we understand how DNS helps connect us to websites, let’s take one step back and talk about something very important, cybersecurity. 
              To protect ourselves online, it’s essential to understand a few basic cybersecurity concepts, especially as they relate to DNS.
              <br /><br />
              <ImageComponent 
                src={image1} 
                alt="Cybersecurity Concept" 
                source="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg"
              />
              <i>So, what is cybersecurity?</i>
              <br /><br />
              Cybersecurity is the art of protecting our devices, data, and the systems we use from hackers. Just like you lock your doors to keep your home safe, cybersecurity involves using different tools and strategies to keep our information secure on the internet.
              Similarly, when you type in a website’s name, your computer doesn’t actually understand that name. It needs the website’s IP address to connect to 
              it. The DNS is like the phonebook—it looks up the IP address for the website you want to visit and connects you to it.
              <br /><br />
              But what do we need to protect? Cybersecurity focuses on three main things (known as the CIA triad):
            </p>
            <ul>
              <li><b>Confidentiality (C)</b>: This involves ensuring information stays private and is only seen by the right people.</li>
              <li><b>Integrity (I)</b>: Making sure information isn’t changed or tampered with in any way.</li>
              <li><b>Availability (A)</b>: Ensuring the systems and data we rely on are always accessible when we need them.</li>
            </ul>
            <h5 id="confidentiality" className="section" style={{marginBottom: '20px'}}>Confidentiality</h5>
            <p>
              Confidentiality is about making sure that sensitive information, like your bank details or personal messages with your friends, stays private. 
              For example, if you send a text message, only you and the person you’re messaging should be able to read it.
              But what if someone manages to somehow “listen in” on your connection to a website? If a hacker can intercept that data, they might steal 
              your personal information. This is why encryption is an important tool in maintaining confidentiality.
            </p>
            <h5 id="integrity" className="section" style={{marginBottom: '20px'}}>Integrity</h5>
            <p>
              Integrity means that the data you receive or send hasn’t been tampered with. Imagine you’re sending a photo to a friend, but on the way, 
              someone changes the image to something else. Your friend would get the wrong photo, and you wouldn’t even know it was altered!
              This same concept applies to websites. Attackers can change information, such as redirecting you to a fake website. In DNS attacks 
              (which we’ll talk about soon), attackers might alter the information that the DNS provides, sending you to a harmful website instead 
              of the real one.
            </p>
            <h5 id="availability" className="section" style={{marginBottom: '20px'}}>Availability</h5>
            <p>
              Availability ensures that you can always access the systems and services you need, like websites or your school Moodle page. 
              Imagine if your bank’s website went offline just when you needed to transfer money or just as you need to submit your assignment, 
              your school’s Moodle goes down. That would be quite annoying.
              Hackers can try to disrupt availability by overwhelming a system, so that it crashes. In DNS attacks, hackers might try to take 
              down DNS servers, which would prevent you from accessing any websites.
            </p>
            <br/>
            <ImageComponent 
                src={image2} 
                alt="CIA Triad" 
                source="https://websitesecuritystore.com/wp-content/uploads/2021/08/cia-triad.svg"
              />
            <br /><br />
            <h4 id="dns-attacks" className="section" style={{marginBottom: '20px'}}>Why do attackers target DNS?</h4>
            <p>
              Now, you might be wondering, why would hackers care about DNS? Well, as we saw earlier, DNS is pivotal to how the internet works. 
              Thus, if an attacker can compromise or disrupt the DNS, they can actually exploit each of the fundamental principles of cybersecurity 
              as we outlined above.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/understanding-dns/quiz">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks">
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

export default CybersecurityIntro;