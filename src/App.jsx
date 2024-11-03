
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';

import Layout from './Layout';
import UnderstandingDns from './pages/UnderstandingDns';
import Intro from './pages/Intro';
import CybersecurityIntro from './pages/CyberSecurityIntro';
import TypesOfDnsAttacks from './pages/TypesOfDnsAttacks';
import Summary from './pages/Summary';
import DnsSpoofing from './pages/DnsSpoofing';
import TheInternet from './pages/TheInternet';
import WhatIsDns from './pages/WhatIsDns';
import HowDoesDnsWork from './pages/HowDoesDnsWork';
import DnsSpoofing2 from './pages/DnsSpoofing2';
import DnsHijacking from './pages/DnsHijacking';
import DnsHijackingLocal from './pages/DnsHijackingLocal';
import DnsHijackingRouter from './pages/DnsHijackingRouter';
import DnsHijackingRogue from './pages/DnsHijackingRogue';
import DnsHijackingExtra from './pages/DNSHijackingExtra';
import DnsTunneling from './pages/DnsTunneling';
import DnsAttackImpacts from './pages/DnsAttackImpacts';
import UnderstandingDnsQuiz from './pages/UnderstandingDnsQuiz';
import DnsSpoofingQuiz from './pages/DnsSpoofingQuiz';
import DnsHijackingQuiz from './pages/DnsHijackingQuiz';
import DnsTunnelingQuiz from './pages/DnsTunnelingQuiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Intro />} />
            <Route path="understanding-dns" element={<UnderstandingDns/>} />
            <Route path="understanding-dns/the-internet" element={<TheInternet/>} />
            <Route path="understanding-dns/what-is-dns" element={<WhatIsDns/>} />
            <Route path="understanding-dns/how-does-dns-work" element={<HowDoesDnsWork/>} />
            <Route path="understanding-dns/quiz" element={<UnderstandingDnsQuiz/>} />
            <Route path="cybersecurity-intro" element={<CybersecurityIntro/>} />
            <Route path="types-of-dns-attacks" element={<TypesOfDnsAttacks/>} />
            <Route path="types-of-dns-attacks/dns-spoofing-arp" element={<DnsSpoofing/>} />
            <Route path="types-of-dns-attacks/dns-spoofing-cache" element={<DnsSpoofing2/>} />
            <Route path="types-of-dns-attacks/dns-spoofing-quiz" element={<DnsSpoofingQuiz/>} />
            <Route path="types-of-dns-attacks/dns-hijacking" element={<DnsHijacking/>} />
            <Route path="types-of-dns-attacks/dns-hijacking-local" element={<DnsHijackingLocal/>} />
            <Route path="types-of-dns-attacks/dns-hijacking-router" element={<DnsHijackingRouter/>} />
            <Route path="types-of-dns-attacks/dns-hijacking-rogue" element={<DnsHijackingRogue/>} />
            <Route path="types-of-dns-attacks/dns-hijacking-extra" element={<DnsHijackingExtra/>} />
            <Route path="types-of-dns-attacks/dns-hijacking-quiz" element={<DnsHijackingQuiz/>} />
            <Route path="types-of-dns-attacks/dns-tunneling" element={<DnsTunneling/>} />
            <Route path="types-of-dns-attacks/dns-tunneling-quiz" element={<DnsTunnelingQuiz/>} />
            <Route path="dns-attacks-impacts" element={<DnsAttackImpacts/>} />
            <Route path="summary" element={<Summary/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
