
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
    // bg='light' variant="light"
    return (
        <div >
            <div  style={{background:"LightSEaGreen"}} className="p-1 text-center text-white ">
                <p>Up to 50% discount on summer Collection!!<button  style={{background:"pink"}}  className='btn ms-2 text-white'> Shop now</button> </p>

            </div>
          
          <Navbar style={{background:''}} collapseOnSelect expand="lg" >
                <Container>
                <Nav className=''>
                            <img style={{width:"50px "}} src={logo} alt="" />
                            <h3 style={{color:"brown"}}>Magical land</h3>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                     
                        <Nav className="mx-auto me-4">
                           <Link className='text-decoration-none text-dark' to='/'> <p>Home</p></Link>
  </Nav>
          
  <Nav className='me-4 '><Link className='text-decoration-none text-dark' to='/blog'> <p>Blogs</p></Link></Nav>
 
  <Nav className='me-4 '><Link className='text-decoration-none text-dark' to='/blog'> <p>Best Collection</p></Link></Nav>
  <Nav className='me-4'><Link className='text-decoration-none text-dark' to='/blog'> <p>Discount</p></Link></Nav>
  <Nav className='me-4 '><Link className='text-decoration-none text-dark' to='/blog'> <p>Todays Offer</p></Link></Nav>

                <Nav>
              
                       
          <Nav className='me-4 mt-1'>
           <Link className='text-decoration-none text-dark' to='/alltoys'> <p>All Toys </p></Link>
        </Nav>
         {
            user &&
            <Nav className='me-3 mt-1'>
            <Link className='text-decoration-none text-dark' to='/mytoys'> <p>My Toys </p></Link>
           </Nav>
         }
          <Nav onClick={addhandle} className='me-3 mt-1'>
          <Link  className='text-decoration-none text-dark' to='/addtoys'>  <p>Add a Toys </p></Link>
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