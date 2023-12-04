import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
          <div className="text-red-900 text-center">Using Pre-defined Tailwind CSS Utility classes as it is</div>
          <br/>
          <div className="text-red-300 text-center">Using Pre-defined Tailwind CSS Utility classes as it is</div>
          <br/>
          <div className="text-primary text-center">Using customized Tailwind utility CSS classes</div>
          <br/>
          <div className="text-secondary text-center">Using customized Tailwind utility CSS classes</div>
      </>
  );
}

export default App;
