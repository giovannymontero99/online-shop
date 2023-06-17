import { createContext, useState } from "react";
import './App.css';
import Header from './components/Header';
import Principal from './components/Principal';
import Target from './components/Principal-components/Target';
import { Routes, Route } from 'react-router-dom';


export const UserContext = createContext(null);

function App() {
  const [urlContext, setUrlContext] = useState('http://localhost:3030/api/v1/?offset=0&limit=20');
  return (
    <UserContext.Provider value={{ urlContext, setUrlContext }} >
      <Routes >
        <Route path='/'  >
          <Route index element={
            <>
              <Header />
              <Principal></Principal>
            </>
          } />
          <Route path=':id' element={
            <>
              <Header />
              <Target></Target>
            </>
          } />
        </Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
