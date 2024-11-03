import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {
  const location = useLocation();

  return (
    <Navbar className="secondaryNav" expand="lg">
      <div className="nav-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className={`nav-item ${location.pathname === '/' ? 'selected' : ''}`}>
              <Link to="/">DNS Intro</Link>
            </div>
            <NavDropdown title={<Link to="/understanding-dns" style={{ color: '#000000', textDecoration: 'none' }}>Understanding DNS</Link>} id="basic-nav-dropdown" className={`nav-item ${location.pathname.startsWith('/understanding-dns') ? 'selected' : ''} hover-dropdown`}>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/understanding-dns">Overview</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/understanding-dns/the-internet">The Internet</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/understanding-dns/what-is-dns">What is DNS?</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/understanding-dns/how-does-dns-work">How does DNS work?</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/understanding-dns/quiz">Quiz</NavDropdown.Item>
            </NavDropdown>
            <div className={`nav-item ${location.pathname === '/cybersecurity-intro' ? 'selected' : ''}`}>
              <Link to="/cybersecurity-intro" >Cybersecurity Intro</Link>
            </div>
            <NavDropdown title={<Link to="/types-of-dns-attacks" style={{ color: '#000000', textDecoration: 'none' }}>Types of DNS Attacks</Link>} id="basic-nav-dropdown" className={`nav-item ${location.pathname.startsWith('/types-of-dns-attacks') ? 'selected' : ''} hover-dropdown`}>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/types-of-dns-attacks" >Overview</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/types-of-dns-attacks/dns-spoofing-arp" >DNS Spoofing</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/types-of-dns-attacks/dns-hijacking">DNS Hijacking</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" as={Link} to="/types-of-dns-attacks/dns-tunneling">DNS Tunneling</NavDropdown.Item>
            </NavDropdown>
            <div className={`nav-item ${location.pathname === '/dns-attacks-impacts' ? 'selected' : ''}`}>
              <Link to="/dns-attacks-impacts">DNS Attack Impacts</Link>
            </div>
            <div className={`nav-item ${location.pathname === '/summary' ? 'selected' : ''}`}>
              <Link to="/summary" >Summary</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default NavbarComponent;
