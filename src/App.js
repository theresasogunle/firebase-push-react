import React from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';
import { requestCurrentPosition } from './location';


function App() {

  React.useEffect(()=>{
    askForPermissioToReceiveNotifications()
    requestCurrentPosition();
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={`https://www.google.com/maps/dir/6.5568767999999995,3.3488895999999997/6.412850,4.087600`}
          target="_blank"
          rel="noopener noreferrer"
        >
         Get directions For App
        </a>
      </header>
    </div>
  );
}

export default App;
