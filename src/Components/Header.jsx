import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='Header'>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ height: '6vh' }}
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand href='#'>Uptime Check</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='IPWhitelist'>
                <Nav.Link href='#IPWhitelist'>IP Whitelist</Nav.Link>
              </Link>
              <Nav.Link href='#NERL'>
                <a target='_blank' href='https://nerlindia.com/'>
                  NERL
                </a>
              </Nav.Link>
              <NavDropdown title='HUL' id='collasible-nav-dropdown'>
                <Link to='/Servers_1-25'>
                  <NavDropdown.Item href='#action/6.1'>
                    Servers 1-25
                  </NavDropdown.Item>
                </Link>
                <Link to='/Servers_25-50'>
                  <NavDropdown.Item href='#action/6.2'>
                    Servers 25 - 50
                  </NavDropdown.Item>
                </Link>
                <Link to='/Servers_50-75'>
                  <NavDropdown.Item href='#action/6.3'>
                    Servers 50 - 75
                  </NavDropdown.Item>
                </Link>
                <Link to='/Servers_75-100'>
                  <NavDropdown.Item href='#action/6.4'>
                    Servers 75 - 100
                  </NavDropdown.Item>
                </Link>
                <Link to='/Servers_100-127'>
                  <NavDropdown.Item href='#action/6.5'>
                    Servers 100 - 127
                  </NavDropdown.Item>
                </Link>

                <NavDropdown.Divider />
                <Link to='/All_127'>
                  <NavDropdown.Item href='#action/6.6'>
                    All 127 servers
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href='#deets'>
                <a target='_blank' href='https://adarsh022.github.io'>
                  {/* आदर्श पाण्डेय */}
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
