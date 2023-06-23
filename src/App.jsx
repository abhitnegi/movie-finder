import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './components/tvShows/Shows';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <div className="list">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows/:imdbID' element={<Shows />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
