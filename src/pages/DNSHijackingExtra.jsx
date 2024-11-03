import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function DnsHijackingExtra () {
  const [activeSection, setActiveSection] = useState('consequences');

  // Scroll handler to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = 'consequences';
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
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>Consequences/Prevention</h6>
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
              <a href="#consequences" style={{
                color: activeSection === 'consequences' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'consequences' ? 'bold' : 'normal',
              }}>Consequences of DNS Hijacking</a>
            </li>
            <li className="side-menu-names">
              <a href="#detecting" style={{
                color: activeSection === 'detecting' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'detecting' ? 'bold' : 'normal',
              }}>Detecting DNS Hijacking</a>
            </li>
            <li className="side-menu-names">
              <a href="#preventing" style={{
                color: activeSection === 'preventing' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'preventing' ? 'bold' : 'normal',
              }}>Preventing DNS Hijacking</a>
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
          <h2 id="consequences" className="section" style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>Consequences of DNS hijacking</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Once DNS hijacking has occurred, attackers can then carry out various types of attacks:
            </p>
            <ul className='bullet-point-gap'>
              <li><b>Phishing Attacks:</b> When a user attempts to visit a legitimate site, such as example.com, the hijacked DNS server directs them to a fraudulent 
                site resembling the legitimate one. The user, believing they are on the real website, may enter sensitive data like passwords, credit card 
                information, which attackers then capture.</li>
              <li><b>Malware Delivery:</b> Attackers also have the ability to redirect users to sites that deliver additional malware. For example, a user trying 
                to access a popular software download site might be redirected to a malicious site that distributes trojanised or infected software. This 
                will catastrophic for organisations as there is a large potential the entire network of computers can be infected especially if the 
                hijacking was a router or rogue one.Router Hijacking</li>
              <li><b>Data tracking:</b> Attackers may redirect users to proxy sites that log browsing data, allowing them to track the user’s activity and gain 
                insight into habits, preferences, and sensitive information.Rogue Hijacking</li>
            </ul>
            <p>
              In light of this, it is therefore pivotal we as indiviudals ort organisations have detection and prevention methods in place to ensure this does not occur.
            </p>
            <br></br>
            <h2 id="detecting" className="section" style={{marginBottom: '15px'}}>Detecting DNS hijacking</h2>
            <p>
              Detecting DNS hijacking is crucial since it often reveals itself subtly, with slower browsing or unexpected pop-up ads as possible indicators. 
              While these symptoms alone don’t confirm DNS hijacking, here are practical ways to verify whether your DNS has been compromised:
            </p>
            <ul className="detecting-steps">
              <li><b>Perform a Ping Command Test</b></li>
                <p>
                  Using a "ping" command can help identify if your DNS server is incorrectly resolving non-existent domains.
                  <br />
                  On Mac: Open Terminal and enter: ping dummy123456.com
                  <br />
                  If it says “cannot resolve,” your DNS is likely uncompromised.
                  <br />
                  On Windows: Open Command Prompt and type: ping dummy123456.com
                  <br />
                  Similarly, if you see “cannot resolve,” your DNS is functioning normally.
                  <br />
                  If an IP address does resolve, this suggests your DNS might be hijacked, as legitimate DNS servers should not return an IP for this non-existent domain.
                  <br />
                </p>
              <li><b>Check Router DNS Settings or Use a Router Checker</b></li>
                <p>
                Many router checker services online can confirm if your DNS requests are routed through a legitimate DNS server.
                <br />
                Router Checker Service: Services like F-Secure’s Router Checker or Quad9 check if your router is using trusted DNS servers.
                <br />
                Manual Check: Alternatively, log into your router’s admin page and verify the DNS settings. Look for any unusual DNS addresses that differ from those of your ISP or preferred DNS provider.
                </p>
              <li><b>Use a Service like WhoIsMyDNS.com</b></li>
              <p>
              WhoIsMyDNS.com can reveal the DNS servers you’re connected to and the company managing them. Usually, this should be your ISP or a public DNS 
              provider like Google or Cloudflare. If the server’s ownership appears unfamiliar, your DNS settings may have been changed maliciously.
              </p>
              <li><b>Monitor Browsing for Slowdowns or Unexpected Pop-ups</b></li>
              <p>
              If you frequently encounter slow loading times on familiar websites or receive excessive pop-up ads, particularly those with fake infection warnings, it could indicate DNS tampering.
              </p>
              <li><b>Consider Using an Alternative DNS Service</b></li>
              <p>
              If DNS hijacking has occurred before or you suspect compromised DNS servers, consider using a trusted public DNS service, like Google Public DNS (8.8.8.8 and 8.8.4.4) or Cloudflare (1.1.1.1). These services offer additional security features and are less prone to manipulation.
              </p>
            </ul>
            <br /><br />
            <h2 id="preventing" className="section" style={{marginBottom: '20px'}}>How to Prevent DNS Hijacking</h2>
            <p>
              Although all three of these hijacking methods we looked at are different in their attack nature, they all have very similar prevention methods.
            </p>
            <div className="prevention-box" style={{
                  marginTop: '30px',
                  marginBottom: '25px',
                  padding: '15px',
                  border: '1px solid',
                  borderRadius: '0.5rem',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  backgroundColor: '#FFC4DF'
                }}>
              <h6 style={{marginBottom: '15px'}}>Prevention Techniques</h6>
              <ul className="prevention-steps">
                <li><b>Be wary of soical engineering</b> – As you may know, social engineering attacks are a common first point of attack for hackers 
                to perform hijacking. So, it is important to never click on suspicious or unfamiliar links whether it be from an email, text message, social 
                media or phone call. This will prevent malware from being installed on your own personal device or accidentally revealing important admin 
                credentials to hackers, which in turn can prevent a DNS hijacking from occurring.</li>
                <li><b>Use reputable antivirus software</b> – You should install reputable antivirus software on your device (like McAfee Antivirus, Norton and Bitdefender) and 
                scan your computer for malware and update your software when prompted. Your system’s security software will help you to uncover and remove any 
                resulting infections from a DNS hijack, especially if you’ve been infected by Trojan malware during a local hijack.</li>
                <li><b>Use secure DNS services</b> – Use reputable DNS services like Google Public DNS (8.8.8.8) or Cloudflare (1.1.1.1). These services offer robust 
                security features and frequent monitoring for malicious activities. So, if you’re unsure if your own DNS service is safe, you can change it to 
                point to Google’s or Cloudflare’s from your own device or router.</li>
                <li><b>Strengthen router security</b> - As we saw in router hijacking, a very common cause is weak usernames and passwords that hackers can easily 
                crack. So, always change the default admin password (and username) to a strong, unique one. On top of this, you should keep router firmware 
                updated to patch vulnerabilities that attackers might exploit.</li>
                <li><b>Use DNS registry lock</b> - If you are an organisation or individual who has a website (or domain name) and therefore an IP address, when you purchased your domain, 
                  you would have done so through a DNS registrar. Now, some DNS registrars offer a security feature called client lock (also known as change 
                  lock), which prevents changes to your DNS records without approval from a specific named individual or organisation. This makes it much
                  harder for attackers, since if they want to change your domain’s IP address by hijacking, they would need to seek further authentication 
                  to do so (it is sort of like MFA).</li>
              </ul>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking-rogue">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking-quiz">
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

export default DnsHijackingExtra;