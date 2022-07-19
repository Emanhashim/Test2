import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { FaMoneyBillAlt} from "react-icons/fa";

import { BsFillCalendar2WeekFill ,BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup,BiArrowFromBottom } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { cardStyle } from '../components/ReusableStyles';
import{GiTakeMyMoney,GiPayMoney,GiReceiveMoney,GiMoneyStack} from "react-icons/gi";

import { useHistory } from "react-router-dom";
import scrollreveal from "scrollreveal";

export default function Wallets() {
  const jwt =JSON.parse(localStorage.getItem('jwt'));
  const totalTransactionfee= JSON.parse(localStorage.getItem('totalTransactionfee'));
  const totalCommission= JSON.parse(localStorage.getItem('totalCommission'));
   const revenue = JSON.parse(localStorage.getItem('revenue'));

  console.log(totalTransactionfee)
  console.log(totalCommission)
  console.log( revenue-totalTransactionfee)
  fetch("http://198.199.67.201:8080/api/accounts/revenue", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('revenue', JSON.stringify(response['revenue']));
      const revenue = localStorage.getItem('revenue')
        console.log(revenue)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
   

  fetch("http://198.199.67.201:8080/api/accounts/totalcommission", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('totalCommission', JSON.stringify(response['totalCommission']));
      const totalCommission = localStorage.getItem('totalCommission')
        console.log(totalCommission)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });

  fetch("http://198.199.67.201:8080/api/accounts/totaltransfee", {
    method: "GET",
     headers: {
      'Content-Type':'application/json',
            "Accept":"application/json",
            "Authorization":`Bearer ${jwt}`
    }
  })
  .then(response => response.json())
  .then(response => {
      localStorage.setItem('totalTransactionfee', JSON.stringify(response['totalTransactionfee']));
      const totalTransactionfee = localStorage.getItem('totalTransactionfee')
        console.log(totalTransactionfee)
        
     
      
    this.setState({
      friends: response
      
    })
   
  })
  .catch(err => { console.log(err); 
  });
  fetch("http://198.199.67.201:8080/api/accounts/alltransactions", {
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
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .analytic , .logo , .content
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
 
  return (
   <Section> 
  
 
  


<div className="analytic">
<div className="logo">
<GiMoneyStack/>
</div>


  <div className="content">
    <h1>Transaction fee</h1>
  <h4 className="status">{totalTransactionfee} Birr</h4> 
  </div>
</div>


<div className="analytic">

  <div className="content">
    <h1 >Total commission Paid </h1>
    <h4 className="status1">{totalCommission} Birr</h4>
  

   
  </div>
  <div className="logo">
  <GiReceiveMoney/>
  </div>
  
</div>

<div className="analytic">
<div className="logo">
<RiMoneyDollarCircleLine/>
  </div>

  <div className="content">
    <h1>  Revenue      </h1>
     <h4 className="status">{revenue} Birr</h4> 

   
  </div>
  
  
</div>

   </Section>
  )
}
const Section= styled.section`

display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  .analytic {
    ${cardStyle};
  
    height: 250px;
    display: inline-block;
    border: 1px solid grey;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;

    .content{
      .status {
        color: #80b918;
      }
     
       .status1 {
        color: #992906;
      }
      .status2 {
        color: #ffc107;
      }
    }
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: white;
      svg {
        color: white;
      }
    }
    .logo {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
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