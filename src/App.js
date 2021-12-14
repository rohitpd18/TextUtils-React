import "./App.css";
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'
import React, { useState } from 'react'
import Alert from "./components/Alert";




function App() {

  const [mode, setmode]= useState('light');
  
  const toggleMode=()=> {
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black';
      showAlert('Success', 'Dark mode enable')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='White';
      showAlert('Success', "Light mode enable")
    }
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
      
      <Navbar tittle='TextUtil' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextFrom mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
