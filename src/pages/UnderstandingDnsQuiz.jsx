import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Quiz from 'react-quiz-component';
import { UnderstandingDnsQuizQuestions } from '../Quizzes/UnderStandingDnsQuiz';
import Accordion from 'react-bootstrap/Accordion';

function UnderstandingDnsQuiz () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>Understanding DNS - QUIZ</h1>
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
              }}>Quiz</a>
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
          }}>Quiz</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <h5 id="individual" className="section" style={{marginBottom: '15px'}}>Multiple Choice Questions</h5>
            <Quiz quiz={UnderstandingDnsQuizQuestions} enableProgressBar={true} shuffle={true}/>
            <br/><br/>
            <h5 id="individual" className="section" style={{marginBottom: '20px'}}>Short Response Questions</h5>
            <ol>
              <li><i>Explain the role of the DNS recursive resolver in the DNS lookup process.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1 Answer</Accordion.Header>
                    <Accordion.Body>
                    The DNS recursive resolver takes the domain name query from the client and is responsible for querying 
                    other DNS servers (root, TLD, and authoritative) to find the corresponding IP address. It serves as the 
                    intermediary between the client and the DNS infrastructure, making multiple requests if necessary to 
                    complete the query.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Why is DNS often compared to a phonebook?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q2 Answer</Accordion.Header>
                    <Accordion.Body>
                    DNS is like a phonebook because it matches human-readable names (domain names) to their corresponding 
                    numbers (IP addresses), similar to how a phonebook matches names to phone numbers.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Describe what happens in a DNS lookup process from the moment a user types in a domain name to when the website appears on their screen.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q3 Answer</Accordion.Header>
                    <Accordion.Body>
                    When a user types a domain name into their browser, the query is sent to the DNS recursive resolver. The resolver 
                    first checks its cache, and if the record is not found, it queries a root nameserver, which directs it to the TLD 
                    nameserver. The TLD nameserver then points it to the authoritative nameserver, which provides the IP address of the 
                    domain. The resolver sends this IP address back to the browser, which then requests the webpage content from the 
                    server, and the website loads.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>What is the difference between an A Record and a CNAME Record?</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q4 Answer</Accordion.Header>
                    <Accordion.Body>
                    An A Record maps a domain name directly to an IP address, while a CNAME Record maps one domain name to another domain name, which then resolves to an IP address.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <li><i>Explain how DNS caching can improve internet performance.</i></li>
              <div className="answer" style={{marginTop: '20px', marginBottom: '30px'}}>
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Q5 Answer</Accordion.Header>
                    <Accordion.Body>
                    DNS caching stores DNS records temporarily at locations closer to the user, such as the browser or the DNS recursive 
                    resolver. This allows for quicker lookups by reducing the need to perform the full DNS resolution process each time, 
                    saving time and reducing network load.

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
            <Link to="/understanding-dns/how-does-dns-work">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/cybersecurity-intro">
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

export default UnderstandingDnsQuiz;