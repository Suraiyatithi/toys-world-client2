
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/magicalland.jpg'



const Header = () => {
    return (
        <div >
          
          <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                <Nav className=''>
                            <img style={{width:"50px "}} src={logo} alt="" />
                            <h3 style={{color:"brown"}}>Magical land</h3>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                     
                        <Nav className="mx-auto me-3">
                           <Link to='/'> <h6>Home</h6></Link>
  </Nav>
          
  <Nav className='me-3 '><Link to='/blog'> <h6>Blogs</h6></Link></Nav>
                <Nav>
                       
          <Nav className='me-3'>
           <Link to='/alltoys'> <h6>All Toys </h6></Link>
        </Nav>
          <Nav className='me-3'>
            <h6>My Toys </h6>
          </Nav>
          <Nav className='me-3'>
          <Link to='/addtoys'>  <h6>Add a Toys </h6></Link>
          </Nav>
                {/* {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            } */}
  
{/* {
    user && <div className="profile">
        <img style={{height:"30px",weight:"30px"}} className='img img-fluid rounded-circle mt-2 ms-4' src={user?.photoURL}></img>
    <div className="name">{user.displayname}</div>
    </div>
} */}

                          
                                <Button  className='ms-3 '  style={{background:"LightSeaGreen"}}>Logout</Button>
                                <Link to="/login">
                                    <Button className='ms-3' style={{background:"LightSeaGreen"}}>Login</Button>
                                </Link>
                            
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    );
};

export default Header;