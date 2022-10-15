
import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, CardActionArea } from '@mui/material';

function Profile({user}) {

 
 if(!user)
 return (<p>Loading ..</p>)

 else
  return(
    <>
     
    <Card sx={{ maxWidth: 345 , margin: "auto" , marginTop:5 , marginBottom:5}}>
      <CardActionArea>
        <CardMedia>
        <Avatar sx={{ width: 86, height: 86,margin: "auto",marginTop:2 }}><h1 style={{margin:"auto"}}>{user.username.charAt(0)}</h1></Avatar>
        </CardMedia>
        <CardContent>
          <Typography variant="body" >
            <br></br>
            Username : {user.username}
            <br></br>
            Email : {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <center>
    <Button variant="outlined" color='inherit' onClick={()=>{
        sessionStorage.clear()
        window.location.reload(false);
        }}> Sign Out</Button>
        </center>

    </>
  )
}

export default Profile