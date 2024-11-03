import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/dns_record_request_sequence_recursive_resolver.png';
import image2 from '../Assets/what_is_a_dns_server_dns_lookup.png';
import image3 from '../Assets/blog-asset-EN-how-dns-works.svg';
import image4 from '../Assets/dns-uncached-response.svg';
import image5 from '../Assets/dns-cached-response.svg'

const HowDoesDnsWork = () => {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>How does DNS work?</h1>
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
              }}>How does DNS work?</a>
            </li>
            <li className="side-menu-names">
              <a href="#records" style={{
                color: activeSection === 'records' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'records' ? 'bold' : 'normal',
              }}>Types of DNS Records</a>
            </li>
            <li className="side-menu-names">
              <a href="#caching" style={{
                color: activeSection === 'caching' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'caching' ? 'bold' : 'normal',
              }}>DNS Caching</a>
            </li>
          </ul>
        </div>
        <div className="info" style={{
          width: '75%',
          padding: '20px 40px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <h3 id="intro" className="section" style={{
            padding: '10px 10px 10px 0px',
            marginBottom: '0px'
          }}>How does DNS work?</h3>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              Now that you know DNS is like the phonebook of the internet, let’s take a closer look at how it works, step by step.
              <br /><br />
              The DNS resolution process involves converting a human-friendly website name (such as www.example.com) into a computer friendly IP address (such as 192.168.0.1). 
              This DNS lookup process occurs very quickly (in just a few milliseconds).
              <br /><br />
              But just before we get into the steps of how a DNS lookup occurs, we need to understand some technical notation, which are just some different hardware components that are used. 
              <br /><br />
              When a client (like you) makes a DNS query (in other words types in a website into a browser and press enter) there are 4 DNS servers that are involved in loading the website you want.
            </p>
            <ul className='four-dns-servers'>
              <li><b>DNS recursor</b> – The DNS recursor (also known as a recursive resolver) is the first stop in a DNS query. You can think of it as a librarian who 
                has been asked to go find a particular book somewhere in a library. It’s a server (usually provided by your Internet Service Provider (ISP)) 
                simply designed to take in queries from client machines through apps such as web browsers. It is also responsible for making extra requests in 
                order to satisfy the client’s DNS query.</li>
              <li><b>Root nameserver</b> – The root server is the first step where the translation process of human readable website names into IP addresses occur. 
                You can think of it like an index in a library that points to different bookshelves of books – it basically serves as a reference to other more 
                specific locations.</li>
              <li><b>TLD nameserver</b> – The top level domain server (TLD) can be thought of as a specific bookshelf of books in a library. This nameserver hosts the last portion of a website name 
                (in example.com, the TLD server is “com”)</li>
              <li><b>Authoritative nameserver</b> – This final nameserver can be thought of as a book on a bookshelf, in which contains the IP address of that specific website you wanted. 
                This nameserver is the last stop in the name server query.</li>
            </ul>
            <p>
              We can see below how these four DNS servers are connected in the DNS query lookup process. The specific authoritative nameserver is of Cloudlfare's one.
            </p>
            <ImageComponent 
              src={image1} 
              alt="4 DNS servers" 
              source="https://www.cloudflare.com/learning/dns/what-is-dns/"
            />
            <p>
              Now that we have some simple knowledge of the hardware used in a DNS query, let’s take a look at the steps involved in a DNS lookup. 
              To help you understand it easier, we’ll make use of the library analogy. Afterwards, we’ll provide summarised steps excluding the analogy if 
              that suits you better.
            </p>
            <h6 style={{marginBottom: '20px'}}>The 8 steps in a DNS lookup (with analogy):</h6>
            <ol className="dns-steps">
              <li>You want to visit “example.com”, so you type it into your web browser. Your web browser is now asking for the IP address of that website. 
                According to the library analogy, your browser is acting like you walking into a library looking for the author of a specific fiction book. 
                However, instead of asking the librarian for the fiction book, the browser asks the DNS recursive resolver for the IP address.</li>
              <li>The DNS resolver then queries a DNS root name server. This is like the librarian consulting the index in the library (which is basically 
                like a physical card that has the locations of major sections of the library written on it). In this case the librarian (DNS resolver) will 
                “ask” the index (root server) where the fiction books are located. Similarly, the root server knows the locations/addresses of where all the 
                top-level domain servers (such as .com, .net, .org) are located, so the resolver queries the root nameserver.</li>
              <li>Now, the index will “return” the location of where the fiction books are back to the librarian. In searching for example.com, the resolver 
                will receive the address of the top-level domain, “.com” from the root nameserver.</li>
              <li>Now that the librarian knows which section of the library to visit, they head over to the fiction section to find the book. In the same
                way, the resolver now knows where the “.com” TLD server is, and “heads” over there.</li>
              <li>The TLD “.com” server then responds to the resolver with the address/location of the authoritative DNS server for example.com in this case. 
                Similarly, the fiction bookshelf of the library will naturally point the librarian to where the book is located, since all the books on the 
                bookshelf are organised alphabetically.</li>
              <li>Finally, the resolver will send a query to the authoritative nameserver. The authoritative DNS server knows the IP address of “example.com” 
                and sends the IP address to the resolver. Similarly, the librarian has found the book, and the book “knows” the author as it contains the 
                author’s name. The librarian now knows the author of the book.</li>
              <li>Now that the resolver has the IP address, it passes it back to your web browser. In the same way, the librarian has the author of the 
                book you want and passes it back to you.</li>
              <li>Using the IP address, your browser now sends a request to the website’s server, and the server sends back the website content – this is 
                  what appears on your web browser screen.
              </li>
            </ol>
            <br/>
            <ImageComponent 
              src={image2} 
              alt="Complete DNS Lookup and Webpage Query" 
              source="https://www.cloudflare.com/learning/dns/what-is-dns/"
            />
            <br/>
            <h6 style={{marginBottom: '20px'}}>The 8 steps in a DNS lookup (without analogy):</h6>
            <ol className="dns-steps">
              <li>You type “example.com” into your web browser and your query is received by a DNS recursive resolver.</li>
              <li>The resolver queries a DNS root nameserver.</li>
              <li>The root name server knows the locations/addresses of where all the top-level domain servers (such as .com, .net, .org) are located. So, in searching for example.com, the resolver will receive the address of the top-level domain, “.com” from the root server.</li>
              <li>The resolver then makes a request to the “.com” TLD.</li>
              <li>The TLD responds with the address/location of the authoritative name server for “example.com”.</li>
              <li>Finally, the recursive resolver sends a query to the authoritative name server of “example.com” and the name server will respond to the resolver with the IP address for “example.com”.</li>
              <li>The DNS resolver then passes the IP address back to your web browser.</li>
              <li>Using the IP address, your browser now sends a request to the website’s server, and the server sends back the website content – this is what appears on your web browser screen.</li>
            </ol>
            <p>
              This process happens in just a couple milliseconds; its so fast that you don’t even realise all these steps are happening.
            </p>
            <br/>
            <i>Below is a simple flowchart that demonstrates the DNS lookup process we just talked about.</i>
            <br/>
            <ImageComponent 
              src={image3} 
              alt="Complete DNS Lookup and Webpage Query" 
              source="https://nordvpn.com/blog/what-is-dns/"
            />
            <br /><br />
            <h4 id="records" className="section" style={{marginBottom: '20px'}}>Types of DNS Records</h4>
            <p>
            When DNS servers need to look up information (as in the IP address in the authoritative DNS server), they don’t just magically do it, but they 
            rely on something called DNS records. These records are stored in the authoritative DNS server and tell it which IP address belongs to a domain 
            name. Here are some of the most common types of DNS records. In this course, we don’t need to understand what these really are, its just good 
            to know they exist.
            </p>
            <ul>
              <li>
                <b>A Record (Address record)</b>
                <ul className="bullet-point-gap">
                  <li>This is the most common type of record. It maps a domain name to its IP address (for example, "example.com" → "93.184.216.34"). They hold IPv4 addresses.</li>
                </ul>
              </li>
              <li>
                <b>AAAA Record</b>
                <ul className="bullet-point-gap">
                  <li>The record that contains the IPv6 address for a domain (as opposed to A records, which list the IPv4 address).</li>
                </ul>
              </li>
              <li>
                <b>CNAME Record (Canonical Name Record)</b>
                <ul className="bullet-point-gap">
                  <li>This maps one domain name to another. For example, www.example.com might point to the IP address of “example.com”.</li>
                </ul>
              </li>
              <li>
                <b>MX Record (Mail Exchange Record)</b>
                <ul className="bullet-point-gap">
                  <li>This tells the internet where to send email messages for a domain. For example, it tells email services where to send emails for "example.com."</li>
                </ul>
              </li>
            </ul>
            <br /><br />
            <h4 id="caching" className="section" style={{marginBottom: '20px'}}>DNS Caching</h4>
            <p>
              Although the process of a DNS lookup is quite fast, if there are millions and millions of people making a DNS query, then naturally performance 
              issues may arise. That’s why, we have something called DNS caching. The purpose of caching is to temporarily store some data in a certain 
              location that will result in improvements in performance and reliability for data requests.
              <br /><br /> 
              DNS caching involves storing data/DNS records (website names and their associated IP address) closer to the requesting client so that the 
              DNS query can be resolved quicker and any extra queries to the TLD and name server down the DNS lookup chain can be avoided. In doing this, 
              load times can be improved, and CPU consumption can also be reduced.
              <br /><br />
              So, where exactly is this data stored then? Well, to keep it simple, there’s two main locations where DNS records can be cached. The first 
              location is probably quite obvious and intuitive (after all we trying to store it in a location as close to the client as possible) – it’s 
              the web browser. Modern web browsers (like Chrome and Safari) are designed to cache DNS records for a set amount of time. So, when a request 
              is made for a DNS record, the browser cache is the first location checked for the requested record. If it is present, then the DNS lookup 
              process is completed. If not, then the query will get passed on to the DNS recursive resolver.
              <br /><br />
              The good thing is that the DNS resolver also has a caching area. So, when the DNS query reaches the resolver inside your ISP, then it will 
              also check to see if the requested website-to-IP address translation (DNS record) is already stored inside its cache storage. If it is, 
              then the lookup process is completed and your browser receives the IP address. If not, then the process we outlined above will be executed, 
              where the resolver will query the TLD and the authoritative name server. In this case, after the resolver and hence browser receives the IP
              address, it will cache it for a certain amount of time (TTL) for next time.
              <br /><br />
              DNS Uncached response:
              <ImageComponent 
                src={image4} 
                alt="Complete DNS Lookup and Webpage Query" 
                source="https://www.cloudflare.com/learning/dns/dns-cache-poisoning/"
              />
              <br /><br />
              DNS Cached response (server cache):
              <ImageComponent 
                src={image5} 
                alt="Complete DNS Lookup and Webpage Query" 
                source="https://www.cloudflare.com/learning/dns/dns-cache-poisoning/"
              />
            </p>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/understanding-dns/what-is-dns">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/understanding-dns/quiz">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                  Continue ➩
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default HowDoesDnsWork;