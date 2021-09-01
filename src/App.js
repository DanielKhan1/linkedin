import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className='app__body'>
        {/* side bar */}
        <Sidebar />
        {/* feed */}
        <Feed />
      </div>
      

      

      {/* widget right side */}
    </div>
  );
}

export default App;
