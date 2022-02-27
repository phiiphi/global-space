import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Massage from "./components/Massage";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Status from "./components/Status";
import "./slider.scss";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className='bg-ciri-for'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar className='' />
                <Massage />
                <Services />
                <Profile />
                <Status />
                <Carousel />
                <Contact />
                <Maps />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
