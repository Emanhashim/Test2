import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles1';

import { useHistory } from "react-router-dom";
import scrollreveal from "scrollreveal";
export default function Overview() {
  const jwt =JSON.parse(localStorage.getItem('jwt'));
  const totalCustomers = JSON.parse(localStorage.getItem('totalCustomers'));
  const totalAgents = JSON.parse(localStorage.getItem('totalAgents'));
  const totalMerchants= JSON.parse(localStorage.getItem('totalMerchants'));
  console.log(totalCustomers)

  fetch("http://198.199.67.201:8080/settings/totcustomers", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('totalCustomers', JSON.stringify(response['totalCustomers']));
      const totalCustomers = localStorage.getItem('totalCustomers')
        console.log(totalCustomers)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
 
  fetch("http://198.199.67.201:8080/settings/totmerchants", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('totalMerchants', JSON.stringify(response['totalMerchants']));
      const totalMerchants = localStorage.getItem('totalMerchants')
        console.log(totalMerchants)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
 
  const totAgents= JSON.parse(localStorage.getItem(' totalAgents'));
    console.log(totAgents)
  fetch("http://198.199.67.201:8080/settings/totagents", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('totalAgents', JSON.stringify(response['totalAgents']));
      const totalAgents = localStorage.getItem('totalAgents')
        console.log(totalAgents)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
 

 
  useEffect(() => {
    const sr = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
   <Section> 
  
 
  


<div className="analytic" id='a3'>

  <div className="content">
 
 

    <h1> {totalAgents}</h1> 
     <h4>Total Number of Agent </h4> 
   
  </div>
</div>


<div className="analytic" id='a1'>

  <div className="content">
  <h1>{totalMerchants}</h1> 
     <h4>Total Number of Merchant </h4> 
   
  </div>
  
  
</div>
<div className="analytic" id='a2'>

  <div className="content">
    <h1>{totalCustomers}</h1> 
    <h4>Total Number of User  </h4> 
   
  </div>
</div>

   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  #a1{
      
    background: rgba(69, 250, 93, 0.938);
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
      
    }
   
    }
    #a2{
      
      background: rgba(69, 250, 93, 0.938);
      &:hover {
        background-color: #ffc107;
        color: white;
        svg {
          color: white;
        }
        
      }
      }
      #a2{
      
        background: rgba(235, 232, 78, 0.938);
       
        }
  .analytic {
    
    ${cardStyle};
    
    height: 200px;
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    background: rgba(240, 138, 201, 0.938);
  
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
      
    }
    
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      
    }
}

@media screen and (min-width: 280px) and (max-width: 720px) {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .analytic {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      flex-direction: row-reverse;
    }
  }
}`;