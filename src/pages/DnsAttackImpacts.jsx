import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function DnsAttackImpacts () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Attacks Impact</h1>
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
              }}>Impacts of DNS Attacks</a>
            </li>
            <li className="side-menu-names">
              <a href="#individual" style={{
                color: activeSection === 'individual' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'individual' ? 'bold' : 'normal',
              }}>Individual Impacts</a>
            </li>
            <li className="side-menu-names">
              <a href="#organisational" style={{
                color: activeSection === 'organisational' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'organisational' ? 'bold' : 'normal',
              }}>Organisational Impacts</a>
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
          }}>Impacts of DNS Attacks</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
              <p>
                We have looked at the three main DNS attacks, and whether it be spoofing, hijacking, or tunneling they can all have serious impacts on both 
                individuals and organisations.
              </p>
              <br />
              <h5 id="individual" className="section" style={{marginBottom: '15px'}}>Individual impacts include:</h5>
              <ul className="detecting-steps">
                <li><b>Privacy Compromise</b></li>
                  <p>
                  DNS attacks can expose individuals’ browsing habits and private information, leading to potential identity theft or unauthorised data collection.
                  </p>
                <li><b>Financial Loss</b></li>
                  <p>
                  Through DNS hijacking or spoofing, attackers can redirect individuals to fake websites that resemble legitimate banking, e-commerce, or other transactional sites. This can result in stolen login credentials, credit card numbers, or payment information.
                  </p>
                <li><b>Malware Infection</b></li>
                <p>
                  DNS hijacking can lead individuals to malicious websites that automatically download malware onto their devices, causing long-term vulnerabilities, stolen data, and device damage.
                </p>
                <li><b>Increased Phishing Risks</b></li>
                <p>
                Attackers can create convincing fake websites, making it easier to trick individuals into sharing sensitive information.
                </p>
                </ul>
                <br />
              <h5 id="organisational" className="section" style={{marginBottom: '15px'}}>Organisational impacts include:</h5>
              <ul className="detecting-steps">
                <li><b>Financial and Operational Losses</b></li>
                  <p>
                    Organisations can experience significant financial damage due to redirected traffic, lost sales, and even ransom demands in some cases.
                  </p>
                <li><b>Reputational Damage</b></li>
                  <p>
                  DNS attacks can damage an organization’s reputation if customers’ data or financial details are compromised. Trust is difficult to regain once a breach occurs.
                  </p>
                <li><b>Data breaches</b></li>
                <p>
                If DNS tunneling is used to extract data covertly, organizations face serious privacy breaches. This can lead to legal repercussions and compliance fines, especially under regulations like GDPR (General Data Protection Regulation).
                </p>
                <li><b>Disruption of Services</b></li>
                <p>
                DNS hijacking or tunneling can disrupt essential services, preventing employees, customers, or partners from accessing the organization’s website, emails, or online applications. This can halt productivity and business continuity.
                </p>
                <li><b>Intellectual Property</b></li>
                <p>
                DNS tunneling can be used to exfiltrate intellectual property, research, and proprietary information, weakening an organization’s competitive position.
                </p>
                </ul>
                To understand such impacts, we will have a look at a case study below, where a real DNS attack happened in 2008.
                <br /><br />
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Case Study:</b>  The 2008 Kaminksy DNS Spoofing Attack</Accordion.Header>
                    <Accordion.Body>
                      <h6>Overview of the Attack</h6>
                      <p>
                        In 2008, security researcher Dan Kaminsky discovered a major vulnerability in the Domain Name System (DNS) that allowed attackers 
                        to easily perform DNS cache poisoning, or DNS spoofing. This attack could redirect users to malicious websites, posing a 
                        significant risk to internet security worldwide.
                      </p>
                      <h6>How the Attack Worked</h6>
                      <p>
                        Kaminsky’s attack exploited the DNS resolution process by tricking DNS servers into accepting fake responses. By repeatedly 
                        querying a domain and sending falsified responses with guessed transaction IDs, attackers could “poison” the cache of a DNS 
                        resolver, associating legitimate domain names with malicious IP addresses.
                        <br /><br />
                        Once a cache was poisoned, all users relying on that DNS resolver would be redirected to a fake site. This method was 
                        highly effective because it allowed attackers to redirect traffic at scale.
                      </p>
                      <h6>Impact</h6>
                      <ul>
                        <li><b>Widespread Vulnerability</b>: This vulnerability impacted most DNS software, potentially affecting millions of users.</li>
                        <li><b>Loss of Trust</b>: Users visiting compromised sites could be exposed to phishing, malware, or data theft.</li>
                        <li><b>Global Concern</b>: The attack spurred an urgent response due to its scale and simplicity, posing risks to all types of internet services.</li>
                      </ul>
                      <h6>Response and Mitigation</h6>
                      <p>
                        Kaminsky worked with industry partners to patch DNS software by randomizing the source port for DNS queries, making cache poisoning 
                        much more difficult. This incident also accelerated the adoption of DNSSEC (DNS Security Extensions), which provides cryptographic 
                        signatures to verify DNS responses.
                      </p>
                      <h6>Lessons Learnt</h6>
                      <ul>
                        <li><b>DNS Vulnerabilities</b>: This attack highlighted critical weaknesses in DNS and underscored the need for security protocols like DNSSEC.</li>
                        <li><b>Importance of Software Updates</b>: Swift updates to DNS software were essential to limit the impact.</li>
                        <li><b>Industry Collaboration</b>: Kaminsky’s coordinated disclosure with tech giants showed the importance of collaboration in addressing widespread vulnerabilities.</li>
                      </ul>
                      <p>
                        The Kaminsky DNS cache poisoning attack served as a wake-up call for global DNS security, prompting improvements and inspiring 
                        ongoing efforts to protect this essential internet infrastructure.
                      </p>
                      Read more about it <a href="https://duo.com/blog/the-great-dns-vulnerability-of-2008-by-dan-kaminsky" target="_blank" rel="noopener noreferrer">here</a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <br /><br />
                As we can clearly, see the impacts can be absolutely damaging to an individual or organisation, thus it is highly important we understand
                the potential consequences of DNS attacks and implement appropriate security measures to protect against them.
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-tunneling-quiz">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/summary">
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

export default DnsAttackImpacts;