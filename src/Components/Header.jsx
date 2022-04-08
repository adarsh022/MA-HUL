import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  function refreshPage() {
    // setTimeout(() => {
    window.location.reload(false);
    // }, 500);
    console.log('page to reload');
  }
  return (
    // <div className='Header'>
    <Navbar
      className='Header'
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      style={{ height: '6vh' }}
    >
      <Container style={{ backgroundColor: '#212529' }} className='ctr1'>
        <Link to='/'>
          <Navbar.Brand href='#'>MediaAgility</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='IPWhitelist'>
              <Nav.Link href='#IPWhitelist'>IP Whitelist</Nav.Link>
            </Link>{' '}
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
              <Link to='/Servers_100-129'>
                <NavDropdown.Item href='#action/6.5'>
                  Servers 100 - 129
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              <Link to='/All_129'>
                <NavDropdown.Item href='#action/6.6'>
                  All 129 servers
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link href='#Refresh' onClick={refreshPage}>
              Refresh
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  );
}
