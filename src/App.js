import DashboardApp from "./components/DashboardApp";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import LoginMA from "./components/LoginMA";
import AgentMTransfer from "./components/AgentMTransferx";
import TraHistoryAM from "./components/TraHistoryAM";
import SignupAM from "./components/SignupAM";
import TranHistory from "./components/TranHistory";
import MTable from "./MTable";
import UserForm from "./formStep/UserForm";
import Mangemntx from "./managemnt/Mangemntx";
function App() {
  const jwt = localStorage.getItem('jwt');
 
  if(!jwt) {
    return <LoginMA />
  }
  return (
    
    <>
   
      <div className="dashboard">
      <Router>
      <Sidebar />
    
      <Switch>
       
      <Route path='/signup' component={SignupAM} />  
   
      <Route path='/amt' component={AgentMTransfer} /> 
      <Route path='/tHistoryAm' component={TraHistoryAM} /> 
      <Route path='/tHistory' component={TranHistory} /> 
      <Route path='/logina' component={LoginMA} />  
      <Route path='/dash' component={DashboardApp} /> 
      <Route path='/Mtable' component={MTable} />
      <Route path='/Mangemntx' component={Mangemntx} />
      <Route path='/UserForm' component={UserForm} />
    
        </Switch>
        </Router>
      </div>
      
  
    </>
  );
}

export default App;
