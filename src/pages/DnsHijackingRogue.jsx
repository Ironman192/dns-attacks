import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/dns-hijacking.png';

function DnsHijackingRogue () {
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
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>Rogue Hijacking</h6>
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
              }}>Rogue Hijacking</a>
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
          }}>Rogue Hijacking</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Rogue hijacking is the last type of hijacking attack we will look at. This type of cyberattack is much more complicated than local or 
              router hijacking, because it requires targeting much more high security servers rather than small personal devices and routers. 
              Attackers will actually try to hijack the existing ISP’s name server to change selected entries; so not a local device like your laptop, 
              nor a router but the actual and legit DNS name server that provides users with the correct IP address of a website. This type of attack 
              is extremely harmful as many users who utilise this server to resolve their DNS query will be affected. But what makes it “really bad” 
              is that users are actually using the correct and legitimate DNS name server to resolve their requests, but its just cybercriminals have 
              changed the DNS records in order to redirect the user’s DNS requests to a malicious website. This is also makes it much harder for cyber 
              security engineers users to spot as on the surface level, everything would seem fine, but underneath is where all the tragic has occurred.
              <br /><br />
              What happens during a DNS rogue hijacking?
              <br /><br />
              As you know by now, rogue hijacking requires an attacker to hack into an ISP’s name server, which will have heavy and robust security 
              measures in place, thus making it very difficult to break in. As a result, in order to carry out such an attack, cybercriminals generally 
              resort to social engineering attacks, mainly through spear phishing.
              <br /><br />
              The general flow of how a DNS rogue hijacking would occur is as follows:
            </p>
            <div className="attacking-steps-box" style={{
                marginTop: '30px',
                marginBottom: '25px',
                padding: '15px',
                border: '1px solid',
                borderRadius: '0.5rem',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                backgroundColor: '#D5E3F0'
              }}>
                <h6 style={{marginBottom: '15px'}}>Rogue Hijacking Attack</h6>
                <ol className="attacking-steps">
                  <li>The attacker creates a dummy/fake site that looks and feels just like the site they are targeting.</li>
                  <li>The attacker uses a targeted social engineering attack, mainly spear phishing* to obtain login credentials to the Admin panel of the DNS name server for the target site.</li>
                  <li>This step is where the hijacking occurs. As the attacker will have admin rights, they now have the capacity to change the DNS records for the site they are targeting. They will change the associated IP address to the dummy site they created. </li>
                  <li>Unsuspecting users go to the URL of the compromised site and get redirected to the dummy site.</li>
                  <li>The users then attempt to log in on the dummy site, and their login credentials are harvested by the attacker.</li>
                </ol>
              </div>
            <br /><br />
            <br />
              <ImageComponent 
                src={image1}
                alt="DNS Hijacking Rogue"
                source="https://www.cloudflare.com/img/learning/dns/dns-security/dns-hijacking.png"
              />
              <br />
            <p>
              <i>*Spear Phishing</i>
              <br /><br />
              <p style={{marginBottom: '10px'}}>What is spear phishing?</p>
              While phishing broadly refers to attacks meant to trick a victim into sharing sensitive information, spear phishing is a highly targeted 
              phishing attack aimed at a specific individual, organization, or business. Spear phishing is particularly effective because attackers 
              gather specific information about the victim, often from online sources, to make the attack more convincing.
              <br /><br />
              <p style={{marginBottom: '10px'}}>What do spear phishing attacks look like?</p>
              A common spear phishing tactic involves the attacker pretending to be someone the victim knows and trusts, like a manager, colleague, 
              or service provider. By posing as a trusted contact, attackers can prompt quick responses or get victims to click on malicious links.
              <br /><br />
              <p style={{marginBottom: '10px'}}>Here is an example:</p>
              Jessica works in the finance department of a mid-sized company. One morning, she receives an urgent email from her manager, Mark, 
              who is currently at an out-of-town business conference. The email explains that Mark needs her to process a wire transfer to secure 
              a last-minute deal with a key client. The email is urgent, asking her to "complete the transfer today before the close of business," 
              and it includes bank details for the transfer. Given Mark’s authority and the urgent nature of the request, Jessica might feel 
              pressured to complete the transfer without a second thought.
              <br /><br />
              In this scenario, the attacker could be spoofing Mark’s email address, and they may have gleaned details about his business trip 
              from social media or company announcements. By combining the authority of Mark’s position, the time-sensitive nature of the message, 
              and the business context, the attacker can create a compelling spear phishing attempt that’s hard to ignore.
              <br /><br />
              A notable <a href="https://money.cnn.com/2016/02/29/technology/snapchat-phishing-scam/index.html" target="_blank" rel="noopener noreferrer">real-life example of this happened in 2016</a>, when an attacker posed as the CEO of Snapchat and was able to convince an employee 
              to hand over confidential payroll information.
              <br /><br />
              Similarly, this exact nature of attack can also be employed to gain login credentials to a DNS name server. 
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking-router">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking-extra">
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

export default DnsHijackingRogue;