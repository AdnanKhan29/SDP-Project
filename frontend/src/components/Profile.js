import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, CardActionArea,Backdrop, CircularProgress } from '@mui/material';

function Profile(props) {

    const [user,setUser]=useState(null);

    useEffect(() => {
     axios.get('http://localhost:3001/users').then(response=>{
        setUser(response.data.filter(user=>user.token===props.token))
     })
    }, [])
    
  if(user===null)
  return (
    <div>
        <br></br>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
   </div>
  )
  else
  return(
    <>
     
    <Card sx={{ maxWidth: 345 , margin: "auto" , marginTop:5 , marginBottom:5}}>
      <CardActionArea>
        <CardMedia>
        <Avatar sx={{ width: 86, height: 86,margin: "auto",marginTop:2 }}><h1 style={{margin:"auto"}}>{user[0].username.charAt(0)}</h1></Avatar>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user[0].username}
          </Typography>
          <Typography variant="body" fullWidth >
            Username : {user[0].username}
            <br></br>
            Email : {user[0].email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <center>
      <Button variant="outlined" color='inherit' onClick={()=>{
        sessionStorage.clear()
        window.location.reload(false);
        }}> Sign Out</Button>
        </center>
    </Card>
    

    </>
  )
}

export default Profile