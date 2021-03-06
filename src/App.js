import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";


function App() {

  const [msg, setMsg] = useState("Hello World")

  useEffect(()=>{
    async function callBackendAPI(){

      const response = await fetch('/express_backend');
      const body = await response.json();
    
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      
      setMsg(body.express)

    }

    callBackendAPI()
    
  },[])

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
