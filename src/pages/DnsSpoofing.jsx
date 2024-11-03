import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ImageComponent from '../ImageComponent';
import image1 from '../Assets/ARPprocess.jpg'
import image2 from '../Assets/ARPPoisoningSpoofing.png'
import image3 from '../Assets/without_arp_dns_spoofing.svg';
import image4 from '../Assets/with_arp_dns_spoofing.svg'

function DnsSpoofing () {
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
        <h1 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '3.5rem'}}>DNS Spoofing</h1>
        <h6 style={{color: 'white', marginBottom: '0px', marginLeft: '180px', fontSize: '1.4rem'}}>ARP Spoofing</h6>
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
              }}>DNS Spoofing</a>
            </li>
            <li className="side-menu-names">
              <a href="#arp" style={{
                color: activeSection === 'arp' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'arp' ? 'bold' : 'normal',
              }}>ARP Spoofing</a>
            </li>
            <li className="side-menu-names">
              <a href="#preventing" style={{
                color: activeSection === 'preventing' ? '#6F3A78' : 'black',
                fontWeight: activeSection === 'preventing' ? 'bold' : 'normal',
              }}>Preventing ARP Spoofing</a>
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
          }}>DNS Spoofing</h2>
          <div className="info-text" style={{
            paddingRight: '50px'
          }}>
            <p>
              The first type of DNS attack we will look at is DNS spoofing (also known as DNS cache poisoning). As you may know, spoof simply means 
              to make a mocking imitation of someone or something. This is no different when it comes to DNS spoofing. Thus, DNS spoofing is a 
              type of cyber-attack that involves the creation of IP address imitations that trick DNS resolvers into wrongly translating website 
              names (like www.example.com), causing users to be redirected to malicious websites without their knowledge. This basically allows 
              attackers to reroute any traffic directed at legitimate websites to their own fraudulent sites, often for the purpose of stealing 
              your personal and sensitive data.
              <br /><br /> 
              There are multiple ways to perform DNS spoofing, but all methods follow the same principle idea of it being a man in the middle (MitM) attack. 
              A MitM attack is basically what it sounds like; it involves an attacker intercepting communication between the start and end points, which 
              in this case will be between the user and the DNS servers. Once in between, then the attacker can start monitoring the user’s DNS requests. 
              When the user makes a DNS query, this is when the spoofing begins. The attacker will intercept the query and return a fake DNS response with 
              a malicious IP address. As a result, the user is unknowingly redirected to a fraudulent site.
              <br /><br /> 
              <p>To carry out a MitM DNS spoofing attack, there are a few different techniques. In this course, we will look at two types of DNS spoofing attacks. They are:</p>
              <ul className='bullet-point-gap'>
                <li>ARP Spoofing</li>
                <li>Cache Poisoning</li>
              </ul>
              <br /><br /> 
              <h4 id="arp" className="section" style={{marginBottom: '20px'}}>ARP Spoofing</h4>
              <p>
                We start with Address Resolution Protocol (ARP) Spoofing. This type of attack is an interesting type of attack in terms of DNS, as ARP spoofing
                itself does not directly achieve a DNS spoofing attack; instead, ARP spoofing can be used as part of a MitM attack to facilitate DNS spoofing. 
                To put it simply an attacker has to carry out an ARP spoofing attack first before they can begin DNS spoofing. So, in light of this, we will 
                obviously learn how ARP spoofing works before we move on how this enables DNS spoofing to occur.
                <br /><br />
                Address Resolution Protocol (ARP) spoofing is a cyber-attack carried out through malicious ARP messages. But what exactly is ARP?
                <br /><br />
                Imagine a local area network, so something like your home network. A local area network (LAN) is a collection of devices (e.g. phone, iPad, 
                laptop, computer, printer) connected together in one physical location, such as your home. Every single device within a LAN has two addresses.
                One is an address that changes, known as an IP address and the other is a fixed address known as a MAC address.
                <br /><br />
                An IP address is a virtual address that changes depending on the network your device connects to. You can think of it like a street address 
                you might give out to receive mail where you live – except the IP address can change over time. But regardless of it changing its just an 
                address that helps identify where you are located in the world. Think back to when we were looking at the DNS lookup process; when you make
                a DNS query, and the authoritative name server has finally found the IP address of the website you want, it needs to send it back to you,
                but how does it know where to send it? Well, that’s because when you make a DNS query, you are actually also sending the IP address of your
                device along with your query. That’s how the DNS servers know where to send the IP address of the website back. This also happens whenever 
                we are on the internet and are making requests for any type of data; we send our IP address with our request so the source of the data knows
                where to send the required information back. However, although we have an IP address, we still have a problem. Even though the data knows 
                where to send it to, it doesn’t actually know who to send it to. Remember, IP addresses tell us where you are, not who you are.
                <br /><br />
                That’s where a Media Access Control (MAC) address comes in. A MAC address is a device’s “physical” address. It's hard-coded to the network 
                card from the manufacturer and is represented by a 12-digit number. So yes, for however many devices you think the world has (billions and 
                billions obviously), every device has a unique Mac address. Don’t worry about any duplicates as the 12-digit number has about 280 trillion
                combinations. Now, let’s briefly think back to the IP address (we said it’s like a street address earlier), however with a street address 
                you can have multiple people living there (just like your home, you, your parents and siblings all live at the same address). This is the 
                same thing with IP addresses. The IP address tells us where your network is located, but it doesn’t know exactly who you are on that network, 
                since there can be many devices on that network. Instead, the MAC address will tell us who you are. 
                <br /><br />
                Okay, so now that we know what a MAC address, where exactly does the MAC address come into play with ARP. Remember when we said whenever we
                make a data request, we send our IP address with it so it knows where to send it back, well when the data package arrives at the destination, 
                your LAN, it actually arrives at a router (which is a device connected to your LAN that facilitates your device’s connection to the internet). 
                Now that it’s arrived at the location, it needs to know who to send the information to. This is where ARP and MAC addresses come in. ARP is 
                a protocol that simply helps the data arrive at the right device. It links the IP address and MAC address of a device so that the data can 
                be send correctly.
                <br /><br />
                In your router, it will have an internal table called an ARP cache. This table holds a mapping of IP addresses to physical MAC addresses. 
                If the IP address associated with the data arriving at the router is listed in the table, the router immediately forwards the data package 
                to the correct device. If the router doesn’t know the MAC address, it asks all the devices on the LAN. This is called a broadcast ARP message.
                <br /><br />
                Think of it like this. A LAN has 4 devices, Device A, B and C along with a router. A piece of data arrives at the router and the IP address 
                associated with the data is 192.168.1.2. The router doesn’t know the related MAC address, so it broadcasts an ARP message.
                <br /><br />
                <i>The router says, “Hello, network. Who is 192.168.1.2?”</i>
                <br /><br />
                <i>Device B goes, “Oh, that’s me, and here is my MAC address.”</i>
                <br /><br />
                Now, the router forwards that data package to Device B, and done, Device B has the requested data. Once this exchange is complete, the router 
                and Device B store the new IP to MAC address relation in its ARP cache for use at a later time. 
                <br /><br />
                Without ARP, devices wouldn't be able to map the logical IP addresses they use (like 192.168.0.5) to the physical hardware addresses needed 
                to actually send data over the local network.
                <br /><br />
                <ImageComponent 
                  src={image1} 
                  alt="ARP Process" 
                  source="https://media.fs.com/images/community/erp/CrEGC_czBa7E7YWA2jmYA5saCT.jpg"
                />
                <br />
                <i>So, now that we know what ARP is, how does ARP spoofing come about?</i>
              </p>
              <p>
                ARP spoofing involves sending fake ARP messages to trick devices into thinking the attacker’s machine is the legitimate device. The attack works as below:
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
                <h6>ARP Spoofing Attack</h6>
                <ol className="attacking-steps">
                  <li>It generally requires a hacker to be on your network. The attacker will scan the network to determine the IP addresses of at least two devices – generally it’s a router and some other random device, like a laptop.</li>
                  <li>The attacker uses a spoofing tool, such as Arpspoof or Driftnet, to send out forged ARP responses.</li>
                  <li>The spoofed responses announce that the correct MAC addresses for both IP addresses, belonging to the router and laptop, is the attacker’s MAC address. This in turn tricks bot the router and laptop to connect to the attacker’s device, instead of to each other.</li>
                  <li>The two devices update their ARP cache table and from that point onwards, communicate with the attacker instead of directly with each other..</li>
                  <li>The attacker is now secretly in the middle of all communications, aka a MitM attack.</li>
                </ol>
              </div>
              <p>
                So now everything the laptop requests (whether it be a DNS request or any other data request), it goes through the attacker, and anything the router 
                receives from the internet and needs to send it to the laptop, it will also go through the attacker. This is exactly what facilitates a DNS spoofing attack.
                <br /><br />
                <ImageComponent 
                  src={image2} 
                  alt="ARP Spoofing Process" 
                  source="https://www.okta.com/sites/default/files/media/image/2021-04/ARPPoisoningSpoofing.png"
                />
                <br />
                A DNS spoofing attack via an ARP spoof is pretty simple to understand. The main steps are summarised below.
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
                <h6>DNS Spoofing Attack via ARP</h6>
                <ol className="attacking-steps">
                  <li>ARP spoofing first occurs</li>
                  <li>The attacker can now intercept DNS requests made from the victim.</li>
                  <li>The attacker can send a spoofed DNS response to the victim, redirecting the victim to a malicious IP address</li>
                  <li>The victim is unaware of the redirection and continues to use this website as normal.</li>
                  <li>The hacker can now steal personal information.</li>
                </ol>
              </div>
              To understand how this works, lets consider an example scenario.
              <div className="example-box" style={{
                marginTop: '30px',
                marginBottom: '25px',
                padding: '15px',
                border: '1px solid',
                borderRadius: '0.5rem',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                backgroundColor: '#CCCAF0'
              }}>
                <h6>Example DNS Spoofing Scenario</h6>
                <p>
                  Let’s say Andrew is an attacker on a public Wi-Fi network. Lucy connects her laptop to this network and tries to access her online banking. 
                  This network has a router, which is connected to external DNS servers. Here’s how Andrew can carry out a DNS spoofing attack via ARP spoofing.
                </p>
                <ol className="example-steps">
                  <li><b>ARP Spoofing: </b>Andrew carries out an ARP spoof attack, so that he tricks Lucy’s laptop into thinking that his MAC address is the 
                    router’s MAC address and also tricks the router into thinking his MAC address is Lucy’s. Now, all of Lucy’s traffic will go through Andrew.</li>
                  <li><b>Intercepting DNS requests:</b> Lucy wants to access her bank, so types www.mybank.com into her browser, and her laptop sends a DNS 
                    request to an external DNS server to resolve the IP address of www.mybank.com. However, because of ARP spoofing, this request goes through 
                    Andrew. </li>
                  <li><b>Fake DNS response:</b> Instead of letting the legitimate DNS server handle the request, Andrew intercepts it and sends a fake DNS response. In this response, Andrew provides the IP address of a malicious server he controls, which hosts a fake bank website that looks identical to Lucy's real bank.</li>
                  <li><b>Redirection:</b> Lucy’s browser receives the fake DNS response and is redirected to Bob’s malicious server. Lucy sees a website that looks exactly like her bank’s website, so she enters her username and password.</li>
                  <li><b>Attack Outcome:</b> Andrew captures Lucy’s banking credentials when she tries to log in. Lucy, thinking she’s on the legitimate bank website, has no idea that she’s compromised.</li>
                </ol>
              </div>
              <br />
              DNS Process without ARP DNS Spoofing:
              <ImageComponent 
                src={image3}
                alt="DNS Process without ARP DNS Spoofing" 
              />
              <br />
              DNS Process with ARP DNS Spoofing:
              <ImageComponent 
                src={image4} 
                alt="DNS Process without ARP DNS Spoofing" 
              />
            </p>
            <br /><br />
            <h5 id="preventing" className="section" style={{marginBottom: '20px'}}>How to Prevent DNS Spoofing from ARP</h5>
            <p>
              As ARP spoofing facilitates DNS spoofing, the only real way to prevent DNS spoofing from occurring is to actually stop ARP spoofing from happening in 
              the first place. Here are some prevention methods against ARP spoofing:
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
              <h6>Prevention Techniques</h6>
              <ul className="prevention-steps">
                <li><b>Use a Virtual Private Network (VPN)</b> – Although a VPN does not directly prevent ARP spoofing from being able to occur, it can largely mitigate 
                  the damage ARP spoofing can do. By using a VPN, all your device’s internet traffic is encrypted before it leaves your device, so even if an 
                  attacker performs ARP spoofing and manages to intercept your data, they will only see encrypted data packets that they cannot read or manipulate. 
                  So, it becomes virtually useless for a hacker.</li>
                <li><b>Use static ARP</b> – The ARP protocol actually lets you define a static ARP entry for an IP address and prevent devices from listening on ARP responses for that 
                  address. If static ARP entries map IP addresses to MAC addresses permanently, it will make them resistant to spoofing attempts. For example, if a laptop 
                  always connects to the same router, you can define a static ARP entry for that router, preventing an ARP spoof attack</li>
                <li><b>Packet filtering</b> – Packet filtering solutions can filter out and block packets (small units of data, for example a DNS query is a packet) 
                  with conflicting source address information. In other words, you can set up rules to only allow packets from known and legitimate IP-MAC address 
                  pairs, so if an attacker tries to perform an ARP spoofing attack, then as their device will not be on the trusted device addresses, their 
                  spoofed DNS response will not be valid.</li>
                <li><b>ARP Monitoring Tools</b> - Tools like ARPWatch, XArp, or Wireshark can monitor your network’s ARP traffic and alert you of suspicious changes 
                  in IP-to-MAC mappings, which may indicate ARP spoofing attempts. These programs work by inspecting and certifying data before it is transmitted
                  and blocking data that appears to be spoofed.</li>
              </ul>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            paddingRight: '50px'
          }}>
            <Link to="/types-of-dns-attacks">
              <Button variant="outline-dark" style={{ marginTop: '10px' }}>
                🢦 Previous
              </Button>
            </Link>
            <Link to="/types-of-dns-attacks/dns-spoofing-cache">
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

export default DnsSpoofing;