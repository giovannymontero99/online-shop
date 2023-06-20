import { createContext } from "react";
import './App.css';
import Header from './components/Header';
import Principal from './components/Principal';

export const UserContext = createContext(null);

function App() {
  return (
    <>
      <Header />
      <Principal></Principal>
    </>
  )
}

export default App
