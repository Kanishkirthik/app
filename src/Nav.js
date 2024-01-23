import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import { Link} from 'react-router-dom';
import Profile from './Profile';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link ><Link style={{textDecoration:'none'}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link  ><Link style={{textDecoration:'none'}} to={'/Course'}>Course</Link></Nav.Link>
            <Nav.Link  ><Link style={{textDecoration:'none'}} to={'/Login'}>Login</Link></Nav.Link>
            <div className="justify-self-end ">
            <Nav.Link className="align-self-center">
                  <div class="dropdown">
                    <a style={{textDecoration:'none'}}
                      className=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </a>
                    <div className='dropdown-menu'> 
                     <div className='dropdown-item'>
                      <Profile/>
                     </div>
                    </div>
                     
                  </div>
            </Nav.Link>
            </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;