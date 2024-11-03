import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/dns-cache-poisoning-attack.svg'
import image2 from '../Assets/dns-cache-poisoned.svg'

function DnsSpoofing2 () {
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
        display: 'flex',              // Enables flexbox layout
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '14px'     // Centers vertically    // Centers horizontally
        }}>
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Spoofing</h1>
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>Cache Poisoning</h6>
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
              }}>Cache Poisoning</a>
            </li>
            <li className="side-menu-names">
              <a href="#preventing" style={{
                color: activeSection === 'preventing' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'preventing' ? 'bold' : 'normal',
              }}>Preventing Cache poisoning</a>
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
          }}>DNS Spoofing - Cache Poisoning</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              We will now turn our attention to DNS cache poisoning. Recall from earlier about what we learnt about DNS caching. 
              <br /><br />
              DNS caching is the temporary storage of DNS query results (domain names and their corresponding IP addresses) on your web browser or DNS resolver.
              When you visit a website, your computer checks its DNS cache first to find the IP address of that site, saving time by skipping the full DNS 
              lookup process. The cached entry is kept for a set time (TTL – time to live) and helps speed up internet access by reducing the number of DNS 
              requests made.
              <br /><br />
              When it comes to DNS cache poisoning, this happens on a DNS resolver. DNS cache poisoning is all about tricking a DNS server (resolver) into 
              caching incorrect or malicious information about the IP addresses of a website, such that users are directed to the wrong website. As there 
              is typically no method for DNS resolvers to verify the data in their caches, any incorrect DNS information will remain in the cache until the 
              time to live (TTL) expires or until it is removed manually; this makes it extremely dangerous for many users who rely on a resolver that’s been 
              cache poisoned.
              <br /><br />
              So how exactly can an attacker poison DNS caches?
              <br /><br />
              To poison a DNS cache, attackers need to impersonate DNS authoritative nameservers, make a request to a DNS resolver, and then forge the reply 
              when the DNS resolver queries a nameserver. The main steps are summarised below.
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
                <h6 style={{marginBottom: '15px'}}>Cache Posioning Attack</h6>
                <ol className="attacking-steps">
                  <li>An attacker selects a domain they want to hijack and a DNS resolver they want to target.</li>
                  <li>The attacker generates a DNS query for the target domain, to provoke a DNS lookup from the resolver. </li>
                  <li>Once the resolver sends a request to the authoritative DNS server, the attacker floods the resolver with spoofed DNS responses containing the IP address of a malicious website. To make the resolver accept a fake response, the attacker has to match certain identifiers in the original query. This includes the transaction ID (a unique identifier) and port number.</li>
                  <li>If successful, the resolver will cache the attacker’s fake response and now the target domain is linked to the attacker’s malicious IP address. The resolver will now redirect any users querying this domain with this “poisoned” entry until the cache is cleared or the TTL expires.</li>
                  <li>Users who are sent to the attacker’s malicious site can now have their sensitive information stolen.</li>
                </ol>
              </div>
              <br />
              DNS Cache Poisoning Attack Process:
              <ImageComponent 
                src={image1}
                alt="DNS Cache Poisoning Attack Process"
                source="http://localhost:3000/types-of-dns-attacks/dns-spoofing-cache"
              />
              <br /><br />
              DNS Poisoned Cache:
              <ImageComponent 
                src={image2}
                alt="DNS Poisoned Cache"
                source="http://localhost:3000/types-of-dns-attacks/dns-spoofing-cache"
              />
              <br />
              <p>
                The reason why DNS cache poisoning can occur is because DNS servers used protocol named UDP (User Datagram Protocol) instead of TCP 
                (Transmission Control Protocol). With TCP, it requires both communicating parties (sender, which is the DNS resolver and the receiver which 
                is the authoritative nameserver) to perform a ‘handshake’ to initiate communication which in turn will ensure the data received is correct 
                and not tampered with. DNS requests us UDP, which is a connectionless protocol that sends data without checking if the recipient is ready to 
                receive, thus making it vulnerable to forging since an attacker can send a message via UDP and pretend it is a response from a legitimate 
                server by forging the data.
                <br /><br />
                Even though these vulnerabilities exist in the DNS querying and caching process, it is actually quite difficult to perform a DNS attack. When 
                a DNS resolver queries the authoritative name server, attackers actually only have a few milliseconds to send spoofed responses before the real 
                reply from the authoritative name server arrives. 
                <br /><br />
                Further, hackers actually have to either guess or somehow know a number of factors before they can carry out DNS cache poisoning. 
                For example:
              </p>
              <ul className='bullet-point-gap'>
                <li>Which DNS queries are not cached by the targeted DNS resolver, so that the resolver will have to query the authoritative nameserver</li>
                <li>The transaction ID number</li>
                <li>Which authoritative nameserver will the query go to</li>
                <li>Port number (a port is virtual point of communication reception, computers “talk” to each other on certain ports, so the DNS resolver will “talk” a authoritative nameserver on a specific port, and the attacker needs to know this)</li>
              </ul>
              <br /><br />
            <h5 id="preventing" className="section" style={{marginBottom: '20px'}}>How to Prevent Cache Poisoning</h5>
            <p>
              As you can probably tell that if an attacker manages to poison a DNS cache, then there could be detrimental consequences, mainly as many users will be 
              affected. Thus, it is pivotal that organisations try and prevent DNS poisoning from occurring. Some prevention methods include:
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
                <li><b>Use DNSSEC</b> – Domain Name System Security Extensions (DNSSEC) offer a way of verifying the integrity of DNS 
                data and its origin. DNSSEC uses public key cryptography (a way of digitally signing information) to verify and authenticate data such that 
                DNS resolvers won’t be “fooled” by fake responses from the attackers</li>
                <li><b>Adopt secure protocols</b> – Use secure DNS protocols like DoH (DNS over HTTPS) which has the ability to encrypt DNS traffic by passing inquiries 
                through an HTTPS encrypted session to improve privacy. Such a protocol often has the capacity to verify the authenticity of DNS responses. 
                This means that even if an attacker attempts to send a spoofed response, the resolver can check whether the response is valid and has not been 
                tampered with.</li>
                <li><b>Cache Management</b> – Regularly clear and refresh DNS caches to minimize the risk of poisoned entries remaining active. In this way, 
                less users will be affected by poisoned entries.</li>
                <li><b>Choose a fast DNS resolver</b> - We mentioned earlier that DNS queries can be resolved in milliseconds, so cache poisoning attacks rely on 
                delayed DNS server responses. Hence, by utilising a fast resolver, this can prevent successful attacks as the hackers will simply not be fast
                enough to carry it out.</li>
              </ul>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks/dns-spoofing-arp">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-spoofing-quiz">
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

export default DnsSpoofing2;