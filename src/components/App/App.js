import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Details from '../Details/Details'
import Filter from '../Filter/Filter'
// import { allBitcoin } from '../../utils';
import { fetchArticles, fetchHeadlines } from '../../apiCalls';

function App() {
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState('')
  const key = process.env.REACT_APP_NEWS

  useEffect(() => {
    if(filter && filter !== 'Global') {
      fetchArticles(key, filter).then(data => {
        if(data) {
          setFilteredData(data.articles)
        }
      })
    } else {
      fetchHeadlines(key).then(data => {
        if(data) {
          setFilteredData(data.articles)
        }
      })
    }
  }, [filter])


  return (
    <div className="App">
      <header className="App_header">
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
      <h2 className='h2'>{!filter || filter !== 'Global' ? 'US Top Stories' : 'Global Headlines'}</h2>
      <Filter setFilter={setFilter}/>
      <Routes>
        <Route path='/' element={<Home filteredData={filteredData} />}/>
        {/* <Route path='/:filter' element={</>}/> */}
        <Route path='/:articleDetails' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
