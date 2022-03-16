import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Division1 from "./Division1";
import Division2 from "./Division2";
import Division3 from "./Division3";
import Division4 from "./Division4";
import History from "./History";
import Footer from "./Footer";

// LATER TO DO: Integrate ability to scrape trackwrestling and show match results between multiple wrestlers. Other functionality to expand on from there... 
// LATER TO DO: Integrate team stats where you can see a compilation of a teams season scores by searching teams.

function App() {

  return (
    <div className="App">
      <Router>
        <h1>Michigan Wrestling District Predictor</h1>
        <nav className="App-nav">
          <ul className="App-nav-list">
            <li className="App-nav-list-item" ><Link to="/home" >Home</Link></li>
            <li className="App-nav-list-item dropdown">Division Predictor
              <ul className="App-nav-list-item-dropdown">
                <li className="App-nav-list-item-dropdown-item" ><Link to="/d1" >D1</Link></li>
                <li className="App-nav-list-item-dropdown-item" ><Link to="/d2" >D2</Link></li>
                <li className="App-nav-list-item-dropdown-item" ><Link to="/d3" >D3</Link></li>
                <li className="App-nav-list-item-dropdown-item" ><Link to="/d4" >D4</Link></li>
              </ul>
            </li>
            
            <li className="App-nav-list-item" ><Link to="/history" >History</Link></li>
            {/* <li className="App-nav-list-item" ><Link to="/d1" >D1</Link></li>
            <li className="App-nav-list-item" ><Link to="/d2" >D2</Link></li>
            <li className="App-nav-list-item" ><Link to="/d3" >D3</Link></li>
            <li className="App-nav-list-item" ><Link to="/d4" >D4</Link></li> */}
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<> <Home /> </>} />
          <Route path="/home" element={<> <Home /> </>} ></Route>
          <Route path="/d1" element={<> <Division1 /> </>} ></Route>
          <Route path="/d2" element={<> <Division2 /> </>} ></Route>
          <Route path="/d3" element={<> <Division3 /> </>} ></Route>
          <Route path="/d4" element={<> <Division4 /> </>} ></Route>
          <Route path="/history" element={<> <History /> </>} ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
