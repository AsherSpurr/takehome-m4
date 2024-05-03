import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Details from '../Details/Details'
import { allBitcoin } from '../../utils';

function App() {
  const [articleData, setarticleData] = useState([])

  useEffect(() => {
    setarticleData(allBitcoin.articles)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path='/' element={<Home articleData={articleData}/>}/>
        {/* <Route path='/:filter' element={</>}/> */}
        <Route path='/:articleDetails' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
