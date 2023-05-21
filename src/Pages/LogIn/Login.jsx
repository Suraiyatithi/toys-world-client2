import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import bg from '../../assets/bg2.jpg'

 import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [wrong,setwrong]=useState('')
    const { signIn,signInWithGoogle,user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'
    

    const handleLogin = event => {
       
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setwrong(error.massage);
            })
            if(!user){
                setwrong("please Enter Valide email and Password")

            }

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
   
    return (
        <div className='row row-cols-sm-1 row-cols-lg-2'>
            <div className="col"></div>
           
                 <Container style={{background:"DarkBlue"}} className='col w-50 mb-5 mt-5 pb-5 pt-5 rounded shadow-lg me-3 text-white '>
      <h3  className='mt-5'>Please Login</h3>
      <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" required />
          </Form.Group>

          <Button style={{background:"LightSEaGreen"}} type="submit">
              Login
          </Button>
          <br />
          <Form.Text className="text-info mb-5">
              Do not Have an Account? <Link className='text-purple text-decoration-none' to="/register">Register</Link>
          </Form.Text>
          <Form.Text>
          <div className='mb-5'>
                    <button style={{background:"brown"}} onClick={handleGoogleSignIn} className="btn  mt-4 ps-5 pe-5 text-white"><FaGoogle></FaGoogle> Sign in with google</button>
                    </div>
                    <div className="Text-danger mb-5">{wrong}</div>
          </Form.Text>

      </Form>
  </Container>  
        </div>
    );
};

export default Login;