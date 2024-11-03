import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/dns_local_hijacking.jpeg'

function DnsHijackingLocal () {
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
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>Local Hijacking</h6>
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
              }}>Local Hijacking</a>
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
          }}>Local Hijacking</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Local DNS hijacking is a method where attackers install a piece of malware that compromises the DNS settings on a specific user’s device to 
              direct all DNS queries to their rogue DNS server they have set up. This server then resolves domain names to malicious IP addresses 
              (the dummy websites set up by the hacker) instead of the intended legitimate ones. This allows attackers to redirect the victim to phishing 
              sites, malware delivery sites, or even sites they control to intercept sensitive information. Let’s now dive into the technical details and 
              impact of local DNS hijacking.
              <br /><br />
              What happens during a DNS local hijacking?
              <br /><br />
              Before we begin, it is important to note that for any internet-connected device, so this could be your computer or laptop, you have 
              specific DNS settings configured that specify the DNS server that your device should use to help resolve domain names to IP addresses. 
              Generally, your device’s DNS settings point to either:
            </p>
            <ul className='bullet-point-gap'>
              <li>A local network DNS server, such as an organisation’s router</li>
              <li>A DNS server provided by your ISP (very common)</li>
              <li>A third-party DNS service, like Google Public DNS or Cloudflare DNS</li>
            </ul>
            <p>
              When DNS queries are sent from this device, the device forwards them to whichever DNS server is set in the configuration. However, in a 
              local hijacking, what happens is an attacker will alter these settings to point to a rogue DNS server.
              <br /><br />
              However, clearly local DNS hijacking requires an attacker to gain some level of access to the victim’s device in order to change their 
              DNS settings. Now of course, the easy way is to log into someone’d device and change it, but that is usually not plausible as hackers 
              generally don’t have a specific target in mind nor would they have your physical device on hand. So instead, they will resort to social 
              engineering attacks.
              <br /><br />
              These social engineering attacks involve tricking users into changing their own DNS settings. For example, attackers can use phishing 
              emails or fake tech support calls that might say something like “To improve your connection speed, change your DNS to X.X.X.X”, where 
              X.X.X.X will be their own rogue server. They may also trick users into downloading malware through phishing emails, compromised 
              websites or malicious ads. Once downloaded, the malware itself can alter the device's DNS settings (usually via privilege escalation 
              techniques, which we leave to discuss for another time) to point to the attacker’s malicious DNS server.
              <br /><br />
              Now that they locally hijacked your DNS server, then whenever a user attempts to visit a legitimate site, the rogue DNS server will 
              direct them to a fraudulent site resembling the real one.
            </p>
            <br />
              <ImageComponent 
                src={image1}
                alt="DNS Local Hijacking"
                source="https://www.wallarm.com/what/what-is-dns-hijacking-basic-methods-of-protection"
              />
              <br />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking-router">
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

export default DnsHijackingLocal;