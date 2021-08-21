import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Sell from "./components/sell/Sell"
import Blog from "./components/blog/Blog"
import Career from "./components/career/Career"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/Footer"
// import Footer2 from "./components/footer2/Footer2"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <>
     <Router>
     <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/sell" component={Sell} />
         <Route exact path="/blog" component={Blog} />
         <Route exact path="/career" component={Career} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={Signup} />
       </Switch>
       <Footer />
       {/* <Footer2 /> */}
     </Router>
    </>
  )
}
export default App;
