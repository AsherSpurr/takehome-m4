import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route to='/' Component={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
