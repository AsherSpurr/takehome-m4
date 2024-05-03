import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import Details from '../Details/Details'
import Filter from '../Filter/Filter'
// import { allBitcoin } from '../../utils';
import { fetchArticles, fetchHeadlines } from '../../apiCalls';

function App() {
  const [articleData, setarticleData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filter, setFilter] = useState()
  const key = process.env.REACT_APP_NEWS
console.log(filter)
  useEffect(() => {
    // setarticleData(allBitcoin.articles)
    // setFilteredData(articleData)
    if(filter) {

      fetchArticles(key, filter).then(data => {
        if(data) {
          setarticleData(data.articles)
          setFilteredData(data.articles)
        }
      })
    }
  }, [filter])

  useEffect(() => {
    fetchHeadlines(key).then(data => {
      if(data) {
        setarticleData(data.articles)
        setFilteredData(data.articles)
      }
    })
  }, [])

  // const sortArticles = (data) => {
  //   setarticleData(data.articles)
  //   setFilteredData(articleData)
  // }

  return (
    <div className="App">
      <header className="App_header">
        <nav>
          <Link to='/'>Home</Link>
        </nav>
      </header>
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
