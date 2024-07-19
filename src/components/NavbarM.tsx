'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration






function  NavbarM() {
  const { t } = useTranslation();
  return (
    <>
      
        <Navbar key="xl"  expand="xl"className=" mb-2 mt-4 navB mx-4" >
          <Container fluid>
            <Navbar.Brand id="navA" href="/">  <img
              src="./images/logoside.svg"
              className='logo'
              
              alt="Padel Factory"
            /></Navbar.Brand>
            <Navbar.Toggle id="menuB" aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className=" navT navM"
            >
              <Offcanvas.Header closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="navF flex-grow ">
                  <Nav.Link className='link'  href="/">{t('home')}</Nav.Link>
                  <Nav.Link className='ml-5 link' href="/about">{t('about')}</Nav.Link>
                  <Nav.Link className='ml-5 link' href="/courts">{t('courts')}</Nav.Link>
                  <Nav.Link href="/services" className='ml-5 link'>{t('serv')}</Nav.Link>
                  <Nav.Link href="#contact" className='ml-5 link'>{t('con')}</Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          
          </Container>
        </Navbar>
     
    </>
  );
}

export default NavbarM;