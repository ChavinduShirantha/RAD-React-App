import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
          {/*Inline way of defining styles*/}
          <div style={{backgroundColor: "red",
              padding: 10, textAlign: "center"}}>
              Inline CSS Box</div>
          <br/>
          {/*Using external CSS class of defining styles*/}
          <div className="box">External CSS Box</div>
          <br/>
          {/*This is what tailwind CSS uses kind of atomic utility classes*/}
          <div className="bg-red p-10 text-center">Tailwind CSS Utility Class Box</div>
      </>
  );
}

export default App;
