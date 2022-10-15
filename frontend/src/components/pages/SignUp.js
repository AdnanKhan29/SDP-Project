import React from 'react'
import '../../App.css';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
const Signup = (setToken,setUser) => {
  const [validated, setValidated] = useState(false);
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [gender,setGender] = useState();
  const [phno,setPhno] = useState([]);
  
  const [password, setPassword] = useState();
  
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{

      const newUser={
        username : username,
        email : email,
        gender : gender,
        phno : phno,
        password : password,
      }

      axios.post('http://localhost:3001/new-login',newUser).then(response=>{
        console.log(`${response.data.name} added successfully`)
        setToken({token : response.data.token})
        setUser(response.data)
      })
    
    }
    setValidated(true);
  };
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
      <div>
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form noValidate validated={validated} onSubmit={handleSubmit}>
                    <TextField style={{margin:'5px'}} onChange={e => setUserName(e.target.value)}fullWidth label='User Name' placeholder="Enter your Username" hasValidation/>
                    <TextField style={{margin:'5px'}} onChange={e => setEmail(e.target.value)} fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                            <FormControlLabel value="male" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField style={{margin:'5px'}} onChange={e => setPhno(e.target.value)} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField style={{margin:'5px'}} onChange={e => setPassword(e.target.value)} type='password' fullWidth label='Password' placeholder="Enter your password" hasValidation/>
                    <TextField style={{margin:'5px'}} onChange={e => setPassword(e.target.value)} type='password' fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button sx={{margin: 2}} type='submit' variant='contained' color='primary'>Sign up</Button>
                    
                    <Button sx={{margin: 2}}  as={Link} to="/Signin" variant='contained' color='primary'>Sign In</Button>
                    
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;