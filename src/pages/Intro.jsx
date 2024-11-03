import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';

import image1 from '../Assets/dns-security.jpg'

const Intro = () => {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Attacks: Intro</h1>
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
          }}>DNS Attacks Introduction to Course</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              The 21st century. A world that is truly interconnected, to the extent that without doubt we take for granted how 
              seamlessly we access websites, send emails, or stream content – all with a simple mouse click. But lurking beneath 
              the surface of this everyday convenience is a key piece of internet infrastructure: the Domain Name System (DNS). 
              You may or may not have heard of this, but essentially, it’s like the internet's phonebook (hopefully you aren’t too 
              young to not know what a phonebook is), translating human-friendly domain names into the IP addresses that computers 
              use to connect with one another.
            </p>
            <p>
              However, as foundational as DNS is to the smooth functioning of the internet, it’s also a prime target for attackers. 
              DNS attacks can disrupt businesses, steal sensitive data, and mislead users (like me and you) in ways that often go unnoticed 
              until it's too late. Whether it's through, just to name a few, DNS hijacking, cache poisoning, or denial of service 
              (don’t worry, we will learn what all of these are later) these attacks exploit vulnerabilities in one of the internet’s most 
              trusted systems.
            </p>
            <p>
              But to fully understand how and why these attacks work, we first need to take a step back and grasp the essentials of the internet 
              itself - how it operates, how data travels, and how DNS fits into the larger picture. Only then can we start talking about DNS attacks.
            </p>
            <p>
              In this course, we’ll guide you from the ground up, starting with the fundamentals of the internet and DNS, before diving deep 
              into the various types of DNS attacks and how they’re executed. By the end, you’ll be equipped to recognise and defend against these 
              hidden threats. Let’s begin this journey into the unseen world of DNS security!
            </p>
            <br/>
            <ImageComponent src={image1} alt="DNS concept" source="https://www.stealthlabs.com/wp-content/uploads/2020/06/dns-security.jpg"/>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/understanding-dns">
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

export default Intro;