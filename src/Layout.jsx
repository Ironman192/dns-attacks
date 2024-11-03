import React from 'react';
import { Outlet } from "react-router-dom";
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div>
      <nav style ={{ 
          height: '90px',
          width: '100vw',
          maxWidth: '100%',
          position: 'relative',
          top: '0px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div>
          <span>
            <img src={logo} style={{ height: '50px', width: '50px', marginLeft: '120px', marginTop: '15px', marginBottom: '15px', marginRight: '30px'}} alt='logo'/>
          </span>
          <span>COMP6841</span> 
        </div>
        <button style={{marginRight: '120px'}} type="button" className="btn btn-primary">Exit Course</button>
      </nav>

      <main style={{ marginTop: '10px', position: 'relative', height: 'calc(100vh - 100px)', minHeight: 'calc(100vh - 100px)' }}>
        <Outlet />
      </main>
    </div>
  )
};

export default Layout;