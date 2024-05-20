// import logo from './logo.svg';
import './App.css';
//import React, { useState, useEffect } from 'react';
import ApiData from './api.jsx';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import {StyleSheet, View} from 'react-native';
// import pTile from './productTile.js';


function App() {
  //const [data, setData] = useState(null);
  
  //const Flex = () => {
  return (

    
    
    <div className="App">
      <header className="App-header">
        
        <p>
          
          <ApiData></ApiData>
          
          
        </p>
        <a
          json
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