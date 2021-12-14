import "./App.css";
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'
import React, { useState } from 'react'
import Alert from "./components/Alert";




function App() {

  const [mode, setmode]= useState('light');
  const toggleDarkMode=()=>{
    setmode('dark')
    document.body.style.backgroundColor='black';
    showAlert('Success', 'Dark mode enable')
  }
  
  const toggleLightMode=()=>{
    setmode('light')
    document.body.style.backgroundColor='white';
    showAlert('Success', 'Light mode enable')
  }
  
  const toggleGreenMode=()=>{
    setmode('success')
    document.body.style.backgroundColor='#00631b';
    showAlert('Success', 'Green mode enable')
  }
  
  const toggleBlueMode=()=>{
    setmode('primary')
    document.body.style.backgroundColor='#000a69';
    showAlert('Success', 'Blue mode enable')
  }
  

  const [alert, setAlert] = useState(null);
 
  const showAlert =(type, msg)=>{
    setAlert({type: type,
    msg: msg})

    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }
  return (
    <>
      
      <Navbar tittle='TextUtil' mode={mode} toggleDarkMode={toggleDarkMode} toggleGreenMode={toggleGreenMode} toggleLightMode={toggleLightMode} toggleBlueMode={toggleBlueMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextFrom mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
