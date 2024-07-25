import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExemple from './components/ReducerExemple';
import ContextExemple from './components/ContextExemple';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExemple from './components/RefExemple';

function App() {
  const instructor = {
    firstName: 'Ali Kemal',
    lastName: 'Çalak',
  };
  const instructorList = [
    {
      firstName: 'Ali Kemal',
      lastName: 'Boz',
    },
    {
      firstName: 'AKC',
      lastName: 'ABC',
    },
    {
      firstName: 'AK',
      lastName: 'AB',
    },
  ];
  return (
    <div className="App">
      {/* <Home name="Ali Kemal" courseNumber={15} isBest />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
      <EventActions /> */}
      {/* <LoginCheck /> */}
      {/* <ReducerExemple />
      <ThemeContextProvider>
        <ContextExemple />
      </ThemeContextProvider> */}
      <RefExemple />
    </div>
  );
}

export default App;
