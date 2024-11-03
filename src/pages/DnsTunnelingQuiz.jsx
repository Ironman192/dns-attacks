import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Quiz from 'react-quiz-component';
import { DnsTunnelingQuizQuestions } from '../Quizzes/DnsTunnelingQuiz';
import Accordion from 'react-bootstrap/Accordion';

function DnsTunnelingQuiz () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Tunneling - QUIZ</h1>
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
              }}>DNS Tunneling Quiz</a>
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
          }}>DNS Tunneling Quiz</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <h5 id="individual" className="section" style={{marginBottom: '15px'}}>Multiple Choice Questions</h5>
            <Quiz quiz={DnsTunnelingQuizQuestions} enableProgressBar={true} shuffle={true}/>
            <br/><br/>
            <h5 id="individual" className="section" style={{marginBottom: '20px'}}>Short Response Questions</h5>
            <ol>
              <li><i>Explain how attackers use DNS tunneling to bypass network security restrictions.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1 Answer</Accordion.Header>
                    <Accordion.Body>
                    Attackers use DNS tunneling to bypass network security by embedding data within DNS queries and responses, which often 
                    go unmonitored due to the trusted nature of DNS traffic. Through DNS queries, attackers can communicate covertly with 
                    infected devices, exfiltrate data, and send commands to bypass firewalls and other security measures.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>What initial step do attackers typically take to start a DNS tunneling attack on a target device?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q2 Answer</Accordion.Header>
                    <Accordion.Body>
                    The initial step often involves infecting a device with malware capable of DNS tunneling. This is frequently achieved 
                    through social engineering techniques, such as phishing emails, which trick the user into clicking a malicious link 
                    that installs the malware on their device.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Describe one method of encoding that DNS tunneling malware uses and why it’s necessary.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q3 Answer</Accordion.Header>
                    <Accordion.Body>
                    DNS tunneling malware commonly uses base64 encoding to convert data into a format suitable for DNS queries. This encoding 
                    is necessary because it allows the data to fit within the character limitations of DNS queries and ensures compatibility 
                    with the DNS protocol.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>How can monitoring DNS traffic patterns help in detecting DNS tunneling attacks?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q4 Answer</Accordion.Header>
                    <Accordion.Body>
                    Monitoring DNS traffic can help detect DNS tunneling by identifying unusual patterns, such as an increase in DNS request volume, 
                    longer response lengths, or strange characters within requests. These anomalies can indicate that data is being exfiltrated or 
                    that there is suspicious communication between an infected device and a malicious server.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>List two preventive measures that organizations can implement to reduce the risk of DNS tunneling attacks.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q5 Answer</Accordion.Header>
                    <Accordion.Body>
                      Two preventive measures include:
                      <ul>
                        <li>DNS filtering to block access to known malicious or suspicious domains.</li>
                        <li>Restricting access to public DNS servers and routing all DNS traffic through monitored, internal DNS infrastructure to control and inspect traffic more effectively.</li>
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
            <Link to="/types-of-dns-attacks/dns-tunneling">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/dns-attacks-impacts">
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

export default DnsTunnelingQuiz;