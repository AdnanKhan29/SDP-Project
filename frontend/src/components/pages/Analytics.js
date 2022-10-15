import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import {Doughnut} from 'react-chartjs-2'
import {Line,Bar} from 'react-chartjs-2'
import {Chart as ChartJS,Title, Tooltip ,LineElement,Legend,CategoryScale,LinearScale,PointElement,BarElement} from 'chart.js'
ChartJS.register(Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,BarElement)
export default function Analytics() {
  const [data,setData]=useState({
    labels:["Jan","Feb","March","April","May","June","July","August","september","october","November","December"],
    datasets:[
      {
      label:"Youtube ads",
      data:[10,20,30,45,36,55,35,70,40,80,95,79],
      backgroundColor:'yellow',
      borderColor:'red',
      tension:0.2
      },
      {
      label:"Google ads",
      data:[12,40,40,47,30,50,40,65,75,90,80,75],
      backgroundColor:'green',
      borderColor:'blue',
      tension:0.2
      },
      {
      label:'Facebook ads',
      data:[7,8,30,10,35,60,70,43,67,87,72,55],
      tension:0.2,
      backgroundColor:'black',
      borderColor:'green'
      }
    ]
  })
  const [clicks,setClicks]=useState({
    labels:["Jan","Feb","March","April","May","June","July","August","september","october","November","December"],
    datasets:[
      {
        label:"no. of clicks",
        data:[100,150,170,200,250,300,500,613,735,800,875,900],
        tension:0.2,
        backgroundColor:'green',
        borderColor:'black'
      }
    ]

  })
  const [impressions,setimpressions]=useState({
    labels:["Jan","Feb","March","April","May","June","July","August","september","october","November","December"],
    datasets:[
      {
  label:"impressions",
  data:[180,270,350,400,470,550,670,780,890,1000,1245,1300],
  tension:0.2,
  backgroundColor:'aqua',
  borderColor:'black'
      }]
  })
  const [cost,setcost]=useState({
    labels:["Jan","Feb","March","April","May","June","July","August","september","october","November","December"],
    datasets:[
      {
  label:"CPC(Cost per conversion)",
  data:[10,12,14,17,20,25,30,40,50,60,63,73],
  tension:0.2,
  backgroundColor:'aqua',
  borderColor:'black'
      }]

  })
  return (
    <div>
    <div style={{width:'800px',height:'500px', marginLeft:'300px',marginTop:'50px'}}>
    <Line data={data}></Line>
    </div>
    <div style={{display:'flex',gap:'100px',marginLeft:'30px'}}>
    <div style={{width:'500px',height:'300px'}}>
      <h3>Number of clicks</h3>
      <Line data={clicks}></Line>
    </div>
    <div style={{width:'500px',height:'300px'}}>
    <h3>impressions</h3>
      <Line data={impressions}></Line>
    </div>
    <div style={{width:'500px',height:'300px'}}>
      <h3>Cost Per Conversion</h3>
      <Line data={cost}></Line>
    </div>
    </div>
  <Footer />
  </div>
  );
}