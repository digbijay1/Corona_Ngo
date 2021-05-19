import "./App.css";
import Nav from "./Nav";
import About from "./Components/About";
import AssociateNgo from "./Components/AssociateNgo";
import ContactPage from "./Components/ContactPage";
import CovidHelp from "./Components/CovidHelp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/AssociateNgo" component={AssociateNgo} />
        <Route path="/ContactPage" component={ContactPage} />
        <Route path="/CovidHelp" component={CovidHelp} />
      </div>
    </Router>
  );
}
const Home= () =>(
  <div>
    
    <h1>Home Page</h1>
  </div>
)

export default App;
