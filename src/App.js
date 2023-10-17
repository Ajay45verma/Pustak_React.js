import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Navbar from './Navbar';
import Service from './component/Service';
import Branch from './component/Branch';
import Sign_upLogin from './component/Sign_upLogin';
import Consult from './component/Consult';
import Profile from './component/Profile';
import Test_all from './component/Test_all';


function App() {
    return ( <div className = "App" >
     
        <BrowserRouter>
         <Navbar /> 
        {/* <Home /> */}
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="service" element={ <Service/>} />
        <Route path="branch" element={ <Branch/>} />
        <Route path="consult" element={ <Consult/>} />
        <Route path="signup_login" element={ <Sign_upLogin/>} />
        <Route path="profile" element={ <Profile/>} />
        <Route path="testall" element={ <Test_all/>} />
      </Routes>
        </BrowserRouter>
    </div>
       
    );
}

export default App;