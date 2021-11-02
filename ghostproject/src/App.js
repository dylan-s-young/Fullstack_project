import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">other pages</div>
      </div>
    </div>
    );
}

export default App;
