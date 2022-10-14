import React, {useState} from 'react'
import '../../App.css';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
const Signin=(props)=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [validated, setValidated] = useState(false);
    
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin=(event)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      axios.get('http://localhost:3001/login').then(response=>{
        
        console.log(props.token)
        if(response.data.filter(data=> data.token===`${username}.${password}`).length===0)
        {
          alert("You either don't have an account or invalid credentials")
        }
        else{
          const newToken=response.data.filter(data=> data.token===`${username}.${password}`)
          props.setToken(newToken[0])
          window.location.reload(false);
        }
      })
    }

    setValidated(true);
  }

  
  if(!props.token)
    return(
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form noValidate validated={validated}>
                <TextField style={{margin: '5px'}} hasValidation onChange={e => setUserName(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField style={{margin: '5px'}} onChange={e => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' onClick={handleLogin} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/sign-up" >
                        Sign Up 
                </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signin;