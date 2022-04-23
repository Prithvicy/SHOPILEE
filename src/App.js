import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    //Bem is being followed
    <div className="app">
      <Router>
      <Routes>
      <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout/>
            </>
          }
        />
     
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
