
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from '../components/ReusableStyles';
import { BiWallet } from 'react-icons/bi';
import { RadialBarChart, RadialBar} from "recharts";
import { BsThreeDots } from "react-icons/bs";
import {BiRotateLeft } from "react-icons/bi";
import React, { useState, useEffect } from 'react'


import scrollreveal from "scrollreveal";
const data = [
  {
    name: "18-24",
    uv: 21.47,
    pv: 2400,
    fill: "#fdc5f5",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#f7aef8",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#b388eb",
  },
  {
    name: "35-39",
    uv: 28.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 18.63,
    pv: 3908,
    fill: "#8093f1",
  },
  {
    name: "50+",
    uv: 24.63,

    fill: "#72ddf7",
  },
];


export default function EarningAgent() {
  const user = JSON.parse(localStorage.getItem('user'));
  const amount = localStorage.getItem('amount')
  const jwt =JSON.parse(localStorage.getItem('jwt'));
  const summaryw=JSON.parse(localStorage.getItem('summary'));
  
  fetch("http://192.168.1.27:8080/api/accounts/alltransactions", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('summary', JSON.stringify(response['summary']));
      const summary = localStorage.getItem('summary')
        console.log(summary)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
   
  
  fetch("http://198.199.67.201:8080/api/accounts/balance", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('amount', JSON.stringify(response['amount']));
      const amount = localStorage.getItem('amount')
        console.log(amount)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
  const reloadPage = () => {
    window.location.reload()
  }
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .top
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
    
  return (
    <Section>
      
    <div className="top">
    <h1 >Agent  </h1> <br />
    <div className="dot">

    <br />
    </div>
    <h4 className="d1">inactive</h4>
    <h6 className="d3">25</h6>
    <br />
    <div className="dot1">
    
    <br />
    </div>
    <h4 className="d4">Active </h4> 
     <h6 className="d3">300</h6>
     <br />
     <div className="dot2">
    
    <br />
    </div>
     <h4 className="d2">Total</h4>
     <h6 className="d3">3254</h6>
    <div className="chart">
    
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="80%"
          data={data}
        >
          <RadialBar minAngle={15} clockWise dataKey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
      <div className="info">
       
      
   
      </div>
   
    </div>
   
  </Section>
  )
}
const Section=styled.section`

width: 600px;
hight: 100px;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid grey;
  min-height: 20rem;
 
    
  }
  ${cardStyle}
 
  .top h1{
    margin-left: 3vw;
  }
  padding: 2rem 0 0 0;
  .top .dot{
    margin-left: 3vw;
  }
  .top .d1{
    padding: 5px;
        display: inline-block;
        
  }
  .top .d3{
   
    margin-left: 3.2vw;
  
  }
  .top .d4{
    display: inline-block;
    padding: 5px;
    
  }
  .top .d2{
    display: inline-block;
    padding: 5px;
  }
  .top .dot{
    display:inline;
    display: inline-block;
    margin-left: 2vw;
    height: 20px;
width: 20px;
background-color: red;
border-radius: 50%;
display: inline-block;
    text-align: center;}

    .top .dot1{
      display:inline;
      display: inline-block;
      margin-left: 2vw;
      height: 20px;
  width: 20px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
      text-align: center;}


      .top .dot2{
        display:inline;
        display: inline-block;
        margin-left: 2vw;
        height: 20px;
    width: 20px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
        text-align: center;}
  .top{
    
    .dot  {
    }
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
      gap: 0.3rem;
      h1{
        font-size: 2rem;
      }
       .logo{
        display: flex;
       
        background-color: black;
        border-radius: 3rem;
        font-size: 1.5rem;
      
       }
       .growth{
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &: hover{
          background-color: #ffc107;
          span{
            color: black;
          }

        }
        span{
          color: #ffc107;
        }
      }
       
    }
    
  }


.chart{
  margin-bottom: 10vw;
  height: 100px;
 
  .recharts-default-tooltip{
    background-color:black !important;
    border-color:black !important;
  }
}
`;