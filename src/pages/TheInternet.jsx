import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/internet.webp'

const TheInternet = () => {
  const [activeSection, setActiveSection] = useState('internet');

  // Scroll handler to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = 'internet';
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>The Internet</h1>
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
              <a href="#internet" style={{
                color: activeSection === 'internet' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'internet' ? 'bold' : 'normal',
              }}>The Internet</a>
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
          <h2 id="internet" className="section" style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>The Internet</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Let’s begin with something you’ve probably done today: visit a website. Whether you’re checking your emails, looking up recipes 
              for your next dinner, or simply googling something, you’re interacting with a website, or to put it more broadly you’re interacting 
              with the internet. But have you ever wondered how typing www.google.com into your browser magically shows the Google homepage?
              Well, you can say a big thank you to something we call the internet and a system known as Domain Name System (DNS).
            </p>
            <p style={{fontStyle: 'italic'}}>
              What’s the internet you may ask?
            </p>
            <ImageComponent 
              src={image1} 
              alt="Internet image" 
              source="https://i0.wp.com/mbrjournal.com/wp-content/uploads/2022/08/MBR-Paper-18-Kumar_1771088840.png?fit=2560%2C1440&ssl=1"
            />
            <p>
              To put it simply, the internet is just a big network that connects billions of computers and other electronic devices (like your phone or iPad). 
              It is through the internet that people can share information and communicate from anywhere. So, whether it be the news, emails or recipes, they 
              are all on a website on the internet (actually to be more precise, they are stored on a server), and if you want to access it, you’ll type in the 
              website on your device and request that information from that server.
            </p>
            <p>
              But, with so much information on the internet, obviously we’ll have multiple servers to store all of it. So, you might be thinking now, we have 
              multiple servers and on each server, is a bunch of different websites (for example one server might have www.google.com) and when I type it into 
              my browser, “something” will go through all the servers looking for the words www.google.com and once it does, it loads all the information 
              associated with that website. Well, this is sort of correct. The website you want to access, and its information is indeed stored on servers, 
              but the process of finding it and how it is stored is a bit more complex than mentioned.
            </p>
            <p style={{fontStyle: 'italic'}}>
              So, how exactly does it work then? We will explore this a bit further later, but for now to cure your curiosity, a simplified breakdown is given 
              below.
            </p>
            <p>
              Here’s a simplified breakdown of what happens behind the scenes:
            </p>
            <ol>
              <li>You open your browser (like Google Chrome, or Safari for all you Apple fans) and type in a website address (like "www.google.com"). This address is what we call a domain name.</li>
              <li>One of the biggest dilemmas is that your computer/electronic device doesn’t actually understand "google.com." It only understands numbers, specifically something we call IP addresses (like 142.250.72.206, for Google).</li>
              <li>This is where the Domain Name System (DNS) comes in—it works like the internet’s phonebook. It takes that human-readable name (google.com) and finds the correct IP address, just like how a phonebook matches a name to a phone number.</li>
              <li>Once the IP address is found, your computer can communicate with the website’s server and display the page you're looking for.</li>
            </ol>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/understanding-dns">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/understanding-dns/what-is-dns">
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

export default TheInternet;