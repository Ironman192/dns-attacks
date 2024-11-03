import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Quiz from 'react-quiz-component';
import { DnsSpoofingQuizQuestions } from '../Quizzes/DnsSpoofingQuiz';
import Accordion from 'react-bootstrap/Accordion';

function DnsSpoofingQuiz () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Spoofing - QUIZ</h1>
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
              }}>DNS Spoofing Quiz</a>
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
          }}>DNS Spoofing Quiz</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <h5 id="individual" className="section" style={{marginBottom: '15px'}}>Multiple Choice Questions</h5>
            <Quiz quiz={DnsSpoofingQuizQuestions} enableProgressBar={true} shuffle={true}/>
            <br/><br/>
            <h5 id="individual" className="section" style={{marginBottom: '20px'}}>Short Response Questions</h5>
            <ol>
              <li><i>Explain what DNS spoofing is and why it is a risk.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1 Answer</Accordion.Header>
                    <Accordion.Body>
                    DNS spoofing, also known as DNS cache poisoning, is a cyber-attack in which DNS resolvers are tricked into directing 
                    users to malicious sites, potentially allowing attackers to steal sensitive data from unsuspecting users.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>How does ARP spoofing help facilitate DNS spoofing?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q2 Answer</Accordion.Header>
                    <Accordion.Body>
                    ARP spoofing allows an attacker to place themselves between a user and the DNS server by sending fake ARP messages, 
                    which tricks the devices into thinking the attacker’s device is the legitimate router or DNS server. This position 
                    allows them to intercept DNS requests and send back spoofed responses.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>What is the primary difference between IP addresses and MAC addresses?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q3 Answer</Accordion.Header>
                    <Accordion.Body>
                    An IP address identifies where a device is located within a network, while a MAC address uniquely identifies a device within a local network.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Describe two techniques that can prevent ARP spoofing.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q4 Answer</Accordion.Header>
                    <Accordion.Body>
                    Using a VPN can encrypt internet traffic, preventing attackers from reading intercepted data. 
                    Alternatively, static ARP entries can lock IP-MAC address pairs, preventing devices from accepting fake ARP responses.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>What makes cache poisoning attacks challenging to execute?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q5 Answer</Accordion.Header>
                    <Accordion.Body>
                    Cache poisoning attacks require precise timing to send fake DNS responses before legitimate replies arrive. 
                    Attackers must also correctly guess several identifiers, such as the transaction ID and port number used by 
                    the DNS resolver.
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
            <Link to="/types-of-dns-attacks/dns-spoofing-cache">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-hijacking">
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

export default DnsSpoofingQuiz;