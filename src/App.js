import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBarMain from './components/TopBarMain/TopBarMain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
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
