import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarMain from './components/TopBarMain/TopBarMain';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Banner />
          <TopBarMain />
          <Routes>
            <Route />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
