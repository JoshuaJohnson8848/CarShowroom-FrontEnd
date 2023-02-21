import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarMain from './components/TopBarMain/TopBarMain';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cars from './components/Cars/Cars';
import BookCar from './components/BookCar/BookCar';

function App(props) {
  return (
    <div className="App">
      {console.log(props)}
      <header className="App-header">
        <BrowserRouter>
          <Banner />
          <TopBarMain />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/book" element={<BookCar />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
