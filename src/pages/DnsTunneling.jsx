import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/how-dns-tunneling-works.avif'
import image2 from '../Assets/what-is-dns-tunneling.avif'

function DnsTunneling () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Tunneling</h1>
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
              }}>DNS Tunneling</a>
            </li>
            <li className="side-menu-names">
              <a href="#detecting" style={{
                color: activeSection === 'detecting' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'detecting' ? 'bold' : 'normal',
              }}>Detecting DNS Tunneling</a>
            </li>
            <li className="side-menu-names">
              <a href="#preventing" style={{
                color: activeSection === 'preventing' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'preventing' ? 'bold' : 'normal',
              }}>Preventing DNS Tunneling</a>
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
          }}>DNS Tunneling</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              The third and last type of DNS attack we will look at is DNS tunneling. DNS tunneling is a type of cyberattack that allows hackers to exfiltrate 
              data or bypass network security restrictions by embedding data within DNS traffic (queries and responses). Since DNS is one of the fundamental 
              protocols of the Internet, DNS traffic is one of the most trusted traffic on the Internet, so organisations and many others will generally allow 
              it to pass through their firewall as it is necessary for work. However, because of this, organisations don’t really monitor their DNS traffic 
              for malicious activity, thus attackers exploit this DNS protocol via something called DNS tunneling.
            </p>
            <br /><br />
            <h4 style={{marginBottom: '15px'}}>How does DNS Tunneling work?</h4>
            <p>
              DNS tunneling attacks exploit the DNS protocol to tunnel malware and other data through a client-server model. To begin, the attacker registers 
              a domain, such as “example.com”. The domain’s name server points to the attacker’s server, where a tunneling malware program is installed. 
              Then the following process goes as follows:
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
                <h6 style={{marginBottom: '15px'}}>DNS Tunneling Attack</h6>
                <ol className="attacking-steps">
                  <li><b>Client infection:</b> Through social engineering attacks (just like we saw earlier in local hijacking), a device, such as a computer or 
                    smartphone, gets infected with malware that has DNS tunneling capabilities. An example of this is an employee accidentally clicks on a 
                    malicious link in an email, which installs the DNS tunneling malware on their computer.</li>
                  <li><b>Data Encoding:</b> The malware on the infected device takes the data that needs to be sent (like files, commands, or sensitive 
                    information from the victim’s device) and converts it into a format suitable for transmission via DNS. This often involves encoding the 
                    data into base64 or another encoding scheme to fit it into the DNS query. For example, If the malware wants to send the text “Hello,” it 
                    might encode this into a string of characters that can be safely included in a DNS request, such as SGVsbG8=.</li>
                  <li><b>DNS query manipulation:</b> The encoded data is embedded within the subdomains of a DNS query. The malware constructs a DNS request 
                    that appears normal but actually contains hidden information. The domain used often belongs to the attacker, allowing them to receive 
                    the data. For example, instead of just querying for a legitimate domain, the malware might send a request like: SGVsbG8=.example.com.</li>
                  <li><b>DNS Server:</b> The DNS server specified in the request (controlled by the attacker) receives the query. This server is set up to 
                    look for these encoded messages and extracts the data from the incoming DNS requests. It can also prepare responses that contain more 
                    hidden data or commands for the infected device. Such responses are generally commands that tell the malware already on the victim’s 
                    device to download another malicious file or execute some sort of dodgy command on the client’s device.</li>
                  <li><b>Communication:</b> As a clear connection is now established between the victim and the attacker through the DNS resolver, this 
                    tunnel can be further used to exfiltrate data or for other malicious purposes. There is basically a two-way communication channel, 
                    allowing ongoing data exchange between the client and attacker.</li>
                </ol>
              </div>
              <ImageComponent 
                src={image1}
                alt="DNS Tunneling Process"
                source="https://www.paloaltonetworks.com.au/content/dam/pan/en_US/images/cyberpedia/how-dns-tunneling-works.png?imwidth=1920"
              />
              <br />
              <p>
                Overall, by utilising a commonly trusted protocol, DNS, it enables attackers to create a covert communication channel that can bypass 
                traditional security measures, to carry out DNS tunneling and as a result exfiltrate data or control compromised devices without raising alarms.
              </p>
              <br />
              For example, an attacker can steal one's password via DNS Tunneling. The process is shown below.
              <ImageComponent 
                src={image2}
                alt="DNS Tunneling Process - Steal Password"
                source="https://www.akamai.com/site/en/images/article/2023/what-is-dns-tunneling.png"
              />
              <br />
              <h4 id="detecting" className="section" style={{marginBottom: '15px'}}>Detecting DNS Tunneling</h4>
              <p>
                As DNS tunneling is quite easy for attackers to carry out and doesn’t raise alarms, it is important for companies to be able to detect such attacks. Some indicators include:
              </p>
              <ul className="detecting-steps">
                <li><b>Unusual Domain Requests</b></li>
                  <p>
                    DNS tunneling malware encodes data within a requested domain name (like DATA_HERE.example.com). Inspection of the requested domain names within DNS requests may enable an organisation to differentiate legitimate traffic from attempted DNS tunneling.
                  </p>
                <li><b>Unusual Response Patterns</b></li>
                  <p>
                    Generally, legitimate DNS responses tend to be short; tunneling responses may be much longer or occur in high volumes. Further, most of the time suspicious response contain unusual characters compared to that of legitimate DNS responses.
                  </p>
                <li><b>High DNS Traffic Volume</b></li>
                <p>
                The domain name in a DNS request is limited to 253 characters. As a result, attackers often need to send a high volume of malicious DNS requests to exfiltrate data or maintain a highly interactive command-and-control channel. This surge in DNS traffic can signal the presence of DNS tunneling.
                </p>
                </ul>
                <br /><br />
                <h4 id="preventing" className="section" style={{marginBottom: '15px'}}>Preventing DNS Tunneling</h4>
                <p>
                  Of course being able to detect DNS tunneling attacks is good, but if one does, generally that means a tunneling attack has already occurred. 
                  This means there is at least one device in an organisation that would be affected which would be quite detrimental already. Thus, it is even 
                  more important to try and prevent such attacks in the first place. Some methods to do so include:
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
                <li><b>Implement DNS filtering</b> – Use DNS filtering tools to block queries to known malicious or suspicious domains, especially 
                those outside of legitimate top-level domains.</li>
                <li><b>Limit Access to public DNS servers</b> – Only allow internal DNS resolvers and prevent users from reaching external DNS servers directly, 
                forcing all DNS traffic through monitored internal DNS infrastructure.</li>
                <li><b>Monitor for Anomalous DNS Traffic</b> – Implement user and/or system behavior analytics that automatically spot anomalies, such as new domains 
                being accessed especially when the method of access and frequency are abnormal.</li>
              </ul>
            </div>
            <br /><br />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking-quiz">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-tunneling-quiz">
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

export default DnsTunneling;