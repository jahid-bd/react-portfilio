import { Router } from "@reach/router";
import Home from "./components/Pages/Home";
import PortfolioDetails from "./components/Pages/PortfolioDetails";

function App(){
    return (
       <Router>
           <Home path='/' />
           <PortfolioDetails path='/portfolio-details' />
       </Router>
    )
}

export default App;