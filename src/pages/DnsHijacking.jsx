import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function DnsHijacking () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Hijacking</h1>
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
              }}>DNS Hijacking</a>
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
          }}>DNS Hijacking</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              The second type of DNS attack we will look at is DNS hijacking.
              DNS hijacking, also known as DNS redirection attack, is a type of attack where hackers cause DNS queries sent from a victim’s browser to be 
              incorrectly resolved, hence redirecting them to a malicious website. 
              <br /><br />
              Afte reading that, you may be wondering, doesn’t that sound very similar to DNS spoofing? Well to be honest it sort of is (a lot of DNS 
              attacks overlap), however there is a main difference. While DNS spoofing attacks, like DNS cache poisoning (which we looked at earlier), 
              are focused on modifying the DNS records in the cache, DNS hijacking involves directly altering the DNS settings themselves, often by 
              installing malware (malicious software designed to harm of exploit devices) on the victim’s computers or laptops. This in turn allows a 
              hacker to take over routers and servers, intercept DNS signals or simply hack DNS communications. In short, DNS hijacking redirects DNS 
              queries to an attacker-controlled DNS server, affecting all DNS resolutions for the victim. DNS cache poisoning injects false records into 
              a DNS cache, causing only specific lookups to resolve to malicious IPs for a limited period.
              <br /><br />
              Now that we know what DNS hijacking is, how exactly does it work? There are 4 main methods an attacker can use to perform DNS hijacking: 
              local, router, rogue and man-in-the-middle. The man-in-the-middle is very similar to that of DNS cache poisoning, so we will leave that out 
              here. Thus, our main focus here will be on:
            </p>
            <ul className='bullet-point-gap hijacking'>
              <li>
                <Link to="/types-of-dns-attacks/dns-hijacking-local">
                  Local Hijacking
                </Link>
              </li>
              <li>
                <Link to="/types-of-dns-attacks/dns-hijacking-router">
                  Router Hijacking
                </Link>
              </li>
              <li>
                <Link to="/types-of-dns-attacks/dns-hijacking-rogue">
                  Rogue Hijacking
                </Link>
              </li>
            </ul>
            <p>
              Keep in mind, the first step in any hijacking will be for an attacker to create a dummy website/website that looks and feels just like the sites they are 
              going to target. Next, depending on the actual hijacking method, they also need to create their own rogue DNS server. This is only applicable 
              to local and router hijacking. Rogue hijacking utilises existing DNS servers.
              <br /><br />
              <i>Okay, hopefully you have that in mind now; now let's explore what local hijacking is.</i>
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-spoofing-quiz">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking-local">
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

export default DnsHijacking;