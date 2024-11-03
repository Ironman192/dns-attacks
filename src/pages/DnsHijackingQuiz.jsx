import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Quiz from 'react-quiz-component';
import { DnsHijackingQuizQuestions } from '../Quizzes/DnsHijackingQuiz';
import Accordion from 'react-bootstrap/Accordion';

function DnsHijackingQuiz () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Hijacking - QUIZ</h1>
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
              }}>DNS Hijacking Quiz</a>
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
          <h2 style={{
            padding: '10px 10px 15px 0px',
            marginBottom: '0px'
          }}>DNS Hijacking Quiz</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <h5 id="individual" className="section" style={{marginBottom: '15px'}}>Multiple Choice Questions</h5>
            <Quiz quiz={DnsHijackingQuizQuestions} enableProgressBar={true} shuffle={true}/>
            <br/><br/>
            <h5 id="individual" className="section" style={{marginBottom: '20px'}}>Short Response Questions</h5>
            <ol>
              <li><i>Explain what DNS hijacking is and how it differs from DNS cache poisoning.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1 Answer</Accordion.Header>
                    <Accordion.Body>
                    DNS hijacking is an attack where hackers alter DNS settings, often on devices or routers, to redirect DNS queries 
                    to a malicious DNS server. This leads users to fake sites controlled by the attacker. In contrast, DNS cache 
                    poisoning inserts false records into a DNS cache, causing specific lookups to resolve to incorrect IPs temporarily, 
                    without changing device or router settings.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Describe how social engineering is used in DNS hijacking and provide an example.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q2 Answer</Accordion.Header>
                    <Accordion.Body>
                    In DNS hijacking, attackers often use social engineering to manipulate users into downloading malware or altering 
                    their DNS settings. For example, attackers may send a phishing email claiming to improve connection speeds by 
                    setting a DNS to a specific IP, which actually directs users to a rogue server.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>How does router DNS hijacking affect multiple users on a network?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q3 Answer</Accordion.Header>
                    <Accordion.Body>
                    Router DNS hijacking modifies DNS settings on a router, which acts as the central point for DNS queries in a 
                    local network. This means all devices connected to the router will use the rogue DNS server set by the attacker, 
                    exposing multiple users to malicious redirects.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>What are some indicators that DNS hijacking might have occurred on a user’s device?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q4 Answer</Accordion.Header>
                    <Accordion.Body>
                    Indicators include slower browsing speeds, unexpected pop-up ads, and frequent redirects to unfamiliar sites. 
                    Users can verify DNS settings through router check services or by manually checking their router’s DNS configuration.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>List two prevention measures against DNS hijacking and explain why they are effective.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q5 Answer</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li><b>Using reputable antivirus software</b>: Antivirus software can detect and remove malware that may alter DNS settings in local hijacking attacks.</li>
                        <li><b>Strengthening router security</b>: Changing default router passwords and updating firmware regularly helps prevent unauthorized access that could lead to router hijacking.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </ol>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-hijacking-extra">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-tunneling">
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

export default DnsHijackingQuiz;