import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

import { cardStyle } from './ReusableStyles';
import {FaArrowCircleDown ,FaCalendarDay,FaStopwatch } from "react-icons/fa";
import{GiTakeMyMoney,GiPayMoney} from "react-icons/gi";
import {RiMoneyDollarCircleLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { FaSearch } from "react-icons/fa";
import scrollreveal from "scrollreveal";
export default function TraHistoryAM() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .transactions
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
    const jwt =JSON.parse(localStorage.getItem('jwt'));
const summaryw=JSON.parse(localStorage.getItem('summary'));
const [users, setUsers] = useState(summaryw.slice(0, 50));
const [pageNumber, setPageNumber] = useState(0);
const [query , SetQuery]= useState("");

console.log(summaryw.filter(summaryw=>summaryw.fromAccountNumber.includes("30")))
const usersPerPage = 2;
const pagesVisited = pageNumber * usersPerPage;

const displayUsers = users
const pageCount = Math.ceil(users.length / usersPerPage);
const changePage = ({ selected }) => {
  setPageNumber(selected);
};
console.log(summaryw)

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
 
  return (
    <Section>
    <div className="title">
    
      <h2>Transfers history</h2>
      
      <div className="search__bar">
          <input type="date" placeholder="Search" onChange={(e)=> SetQuery(e.target.value)} />
          <FaSearch />
     
    </div>
    </div>
   
    <div className="transactions">   
      {summaryw.reverse().slice(pagesVisited, pagesVisited + usersPerPage).filter(summar=>summar.transactionDateTime.includes(query)).map((summar) => {
        return (
          <div className='scrollable-div '>
          <div className="transaction">
         
            <div className="transaction__title">
              
              <div className="transaction__title__image">
              <FaArrowCircleDown color='blue'/>
              </div>
              <div className="transaction__title__details">
           
              <h5 id='na1' > <RiMoneyDollarCircleLine  color='blue'/>From Account:</h5><h5 id='na2'>{summar. fromAccountNumber }</h5>
              <h5 id='na1'><GiPayMoney color='green'/>To Account</h5>  <h5 id='na2'>{summar.accountNumber}</h5>
              <h5 id='na1' ><GiTakeMyMoney color='red'/>Transaction Amount:</h5><h5 id='na2'>{summar.transactionAmount}</h5>
              <h5 id='na1'><FaCalendarDay color='purple' />Type:</h5><h5 id='na2'>{summar.transaction_type} </h5>             
              <h5 id='na1'><FaStopwatch  color='#0a65a1' />Time:</h5> <h5 id='na2'>{summar.transactionDateTime}</h5>
              <h5 id='na1' > <RiMoneyDollarCircleLine  color='blue'/>userID</h5><h5 id='na2'>{summar. userID }</h5> 
              <h5 id='na1'> <RiMoneyDollarCircleLine  color='blue'/>transactionId:</h5><h5 id='na2'>{summar. transactionId }</h5>
              </div>
          
            </div>
            <div className="transaction__amount">
            
         
          
       
       
           
            </div>
          </div>
          </div>
        );
      })}
          <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
    
  </Section>
  )
}

const Section= styled.section`
${cardStyle};
border: 2px solid #ffc107;

.search__bar {
  margin-right: 10vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  padding: 0 1vw;
  input {
    height: 5vh;
    width: 15vw;
    padding: 1vw;
    border: none;
    &:focus {
      outline: none;
    }
  }
  svg {
    color: #ffc107;
  }
}
.pag{
 
}
.paginationBttns {
  margin-left: 6vw;
  margin-top: 6vw;

  width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;
}

.paginationBttns a {
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid #2b2eff;
  color: #2b2eff;
  cursor: pointer;
}

.paginationBttns a:hover {
  color: white;
  background-color:  #ffc107;
}

.paginationActive a {
  color: white;
  background-color:  #ffc107;
}

.paginationDisabled a {
  color:  #ffc107;
  background-color: grey;
}
margin-left: 13vw;
margin-top: 1vw;
padding: 2rem;
width: 1000px;
height:750px;
border-radius: 60px;
background-color: white;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
gap: 1rem;

}

.title {

  h2 {
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    margin-left: 9vw;
  }
}
.transactions {
  
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  .transaction {
    
    width: 750px;
    margin-left: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__title {
      
      gap: 1rem;
      &__image {
        margin-left: 10vw;
        img {
          height: 2.5rem;
          border-radius: 3rem;
          
        }
      }
      &__details{
      
         {
       
        display:inline;
        display: inline-block;
      
        }
        #na2{
          text-align: left;
          padding: 0.3rem ;
       
      }
      #na1{
        color:#080808;
        display:inline;
        float:left;
        padding: 0.2rem 0.5rem;
    }
     
    }
    &__amount {
        
        
      #na2{
        color: #ffc107;
        display:inline;
        float:right;
     
    }
    
      
      }
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    margin-right: 15vw;
    background-color: #ffc107;
      padding: 0.2rem 0.5rem;
      width: 900px;
      border-radius: 1rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }
      span {
        color: #ffc107;
      }
    }
  }
}
.view {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: #ffc107;
  font-weight: bold;
  margin-top: 1rem;
  gap: 0.5rem;
  svg {
    transition: 0.3s ease-in-out;
    font-size: 1.4rem;
  }
  &:hover {
    svg {
      transform: translateX(0.5rem);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 375px) {
  .transactions {
    .transaction {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
}
`;