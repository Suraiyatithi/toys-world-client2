import React, { useContext } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';




const Register = () => {
    const [error, setError] = useState('');
    const[success,setsuccess]=useState()
   

    const { createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const handleRegister = event => {
        event.preventDefault();
        setError('')
        setsuccess('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);



if (password.length < 6) {
   setError('!!!!password must be 6 characters or longer')
   return
}
      
     

         createUser(email, password)
        
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                event.target.reset();
                setError('')
                setsuccess("Successfully Register")
          
               
     })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    const handlechange=event=>{
    
        if(event.target.value.trim().length ==0)
        {
           setError('!!!!!!!Please Fill All the Input Value')
           return
        }}
    return (
        <Container className='w-50 text-dark'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister} name='From'>
            <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicphoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handlechange} type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlechange} type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    name="accept"
                    label={<>Accept <Link to="">Terms and Conditions</Link> </>} />
            </Form.Group>
          <Button  style={{background:"	LightSeaGreen"}} disabled={!accepted} type="submit">
            Register
    
            </Button>
            <br />
            <Form.Text style={{color:"darkmagenta"}} className="">
                Already Have an Account? <Link to="/login">Login</Link>
            </Form.Text>
           
            <Form.Text className="">
          <h6 className='text-error text-danger p-2'>{error}</h6>
            </Form.Text>
                
            <Form.Text className="">
          <h6 className=' text-success p-2'>{success}</h6>
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;