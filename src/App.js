import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Alert from './components/Alert';
import {
  Routes,
   Route,
 
 } from "react-router-dom";


function App() {

const [Mode, setMode] = useState("light")

const [alert, setalert] = useState(null)

const showalert = (message, type) => {
  setalert({
    msg:message,
    type:type
})
setTimeout(() => {
  setalert(null)
}, 1500);
}
const togglemode = () => {
  if(Mode === 'light'){
    setMode('dark')
  document.body.style.backgroundColor ='#13446e'; 
  showalert("Dark mode is Enable" ,"succes");

  }

else{
  setMode('light')
  document.body.style.backgroundColor = 'white';
  showalert("light mode is Enable" ,"succes");

}
}

  return (
    <>
  <Navbar Mode={Mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container">
<Routes>
<Route path="about/" element={<About />}/> 
<Route path="contact/" element={<Footer />}/> 

<Route path="/" element={<Textarea  showalert={showalert} mode={Mode}/>}/>

</Routes>
    </div>
    </>
  );
}

export default App;
