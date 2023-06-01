import './App.css';
import Header from './components/Header';
import Principal from './components/Principal';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Principal />
        </>
      } />
    </Routes>
  )
}

export default App
