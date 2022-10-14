import React from 'react';
import '../../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from './image/img.jpg'
import Footer from '../Footer';
export default function Subscription() {
  return(
    <>
   <h1 className='products'>
    <div style={{display:"flex",marginLeft:"50px"}}>
            <div style={{margin:"30px"}}>
    <Card sx={{ maxWidth: 350, marginTop: 8}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt="Photo"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          BASIC<br></br>
          </Typography>
          <Typography variant="h5" >
          1 month plan
          </Typography>
          <Typography variant="h6"color="text.secondary">
          XYZ
          </Typography>
          <button style={{width:"100%", backgroundColor:'black', color:'white', fontSize:"30px", fontWeight:"100"}}>BUY</button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div style={{margin:"30px"}}>
    <Card sx={{ maxWidth: 350, marginTop: 8 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt="Photo"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          SUPER<br></br>
          </Typography>
          <Typography variant="h5" >
          3 months plan
          </Typography>
          <Typography variant="h6"color="text.secondary">
          ABC
          </Typography>
          <button style={{width:"100%", backgroundColor:'black', color:'white', fontSize:"30px", fontWeight:"100"}}>BUY</button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
      <div style={{margin:"30px"}}>
    <Card sx={{ maxWidth: 350, marginTop: 8 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt="Photo"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          PREMIUM<br></br>
          </Typography>
          <Typography variant="h5" >
          6 months plan
          </Typography>
 
          <Typography variant="h6"color="text.secondary">
          EFG
          </Typography>
          <button style={{width:"100%", backgroundColor:'black', color:'white', fontSize:"30px", fontWeight:"100"}}>BUY</button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    </div>
    
  </h1>
  <Footer/>
  </>
  )
}