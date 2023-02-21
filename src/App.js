import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarMain from './components/TopBarMain/TopBarMain';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cars from './components/Cars/Cars';
import BookCar from './components/BookCar/BookCar';
import { LoginContext } from './Contexts/LoginContext';
import { useState } from 'react';
import EditCar from './components/EditCar/EditCar';
import AddCar from './components/AddCar/AddCar';
import ViewBooking from './components/ViewBooking/ViewBooking';
import FilterBooking from './components/FilterBooking/FilterBooking';

function App(props) {
  const [user, setUser] = useState({});
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Banner />
            <TopBarMain />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/book" element={<BookCar />} />
              <Route path="/editCar" element={<EditCar />} />
              <Route path="/Add" element={<AddCar />} />
              <Route path="/bookings" element={<ViewBooking />} />
              <Route path="/filter" element={<FilterBooking />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
