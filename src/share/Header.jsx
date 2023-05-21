
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/magicalland.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import '../share/Header.css'



const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const addhandle=()=>{
        if(!user){

    
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please Log in First !',
              footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
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
                           <Link className='text-decoration-none text-dark' to='/'> <h6>Home</h6></Link>
  </Nav>
          
  <Nav className='me-3 '><Link className='text-decoration-none text-dark' to='/blog'> <h6>Blogs</h6></Link></Nav>
                <Nav>
                       
          <Nav className='me-3 mt-1'>
           <Link className='text-decoration-none text-dark' to='/alltoys'> <h6>All Toys </h6></Link>
        </Nav>
         {
            user &&
            <Nav className='me-3 mt-1'>
            <Link className='text-decoration-none text-dark' to='/mytoys'> <h6>My Toys </h6></Link>
           </Nav>
         }
          <Nav onClick={addhandle} className='me-3 mt-1'>
          <Link  className='text-decoration-none text-dark' to='/addtoys'>  <h6>Add a Toys </h6></Link>
          </Nav>
    
{
    user && <div className="profile">
        <img style={{height:"30px",weight:"30px"}} className='img img-fluid rounded-circle mt-2 ms-4' src={user?.photoURL}></img>
    <div className="name">{user?.displayname}</div>
    </div>
}

                          
                               
                                 {user ?
                                <Button  className='ms-3' onClick={handleLogOut} style={{background:"LightSEaGreen"}}>Logout</Button> :
                                <Link to="/login">
                                    <Button className='ms-3' style={{background:"LightSEaGreen"}}>Login</Button>
                                </Link>
                            }
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    );
};

export default Header;