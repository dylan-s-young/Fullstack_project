import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import AdminPanel from "./pages/adminpanel/AdminPanel";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
