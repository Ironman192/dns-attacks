import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/CleanBrowsing-TPLink-III.png';

function DnsHijackingRouter () {
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
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>Router Hijacking</h6>
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
              }}>Router Hijacking</a>
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
          }}>Router Hijacking</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Router DNS hijacking is quite similar to that of local hijacking, however instead of trying to modify the DNS settings on one’s local device, 
              it is done so on their router instead. Attackers exploit vulnerabilities in a router’s firmware, configuration, or default settings 
              (like passwords) to alter the router’s DNS settings such that it points to a rogue DNS server controlled by the attacker. This type of attack 
              effectively hijacks the DNS settings for all devices connected to that router, making it highly effective for targeting multiple users on a 
              single network.

              What happens during a DNS router hijacking?

              To understand how router hijacking can even occur, we first need to quickly understand how a router handles a DNS request. Routers often act 
              as a central point for DNS queries on a local network. When devices connect to a router, they typically use the router’s DNS settings 
              (configured by the ISP or manually set by the user) to resolve domain names. The router then forwards these DNS queries to a designated 
              DNS server, which could be:
            </p>
            <ul className='bullet-point-gap'>
              <li>The ISP’s DNS server (default configuration for many routers)</li>
              <li>A third-party DNS service, like Google Public DNS or Cloudflare DNS</li>
            </ul>
            <p>
              Now, that we understand the role of the router in DNS queries, there are two main methods in the way router hijacking can occur.
            </p>
            <ul className='bullet-point-gap'>
              <li><b>Exploiting Default Passwords</b> – Most routers come with default login credentials (like admin/admin), which users and organisations 
                do not change (Forbes recently reported that 86% of users have never changed the factory set administrator password). So, attackers can 
                therefore exploit this by guessing or brute-forcing their way into the router’s admin panel (I mean, after all, it’s probably not that 
                difficult). And once the attackers are logged in, they alter the DNS settings such that they point to their own malicious server. 
                Further, as there are only so many different router brands, and very often companies use the same login credentials across all their 
                routers, then if attackers manage to target one, then many more routers will also be hijacked, leaving many more vulnerable. </li>
              <li><b>Firmware Vulnerabilities</b> – If people use old routers or poorly configured routers, then they may have unpatched firmware vulnerabilities 
                that attackers can exploit remotely. Thus, by sending crafted requests or exploiting these firmware flaws, attackers can gain administrative 
                access to the router, allowing them to change its DNS settings.</li>
            </ul>
            <br />
              Altering of DNS Settings (this is what hackers will do):
              <ImageComponent 
                src={image1}
                alt="Altering DNS Settings"
                source="https://cleanbrowsing.org/images/guides/tp-link/CleanBrowsing-TPLink-III.png"
              />
            <br />
            <p>
              As DNS settings will now be altered, all users who are connected to the router will now be affected whenever they try to access a website 
              and send off a DNS query. This gives hackers so much power as they have the capability to steal a large number of people’s personal 
              information as they will be tricked into using their fake website.
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking-local">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking-rogue">
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

export default DnsHijackingRouter;