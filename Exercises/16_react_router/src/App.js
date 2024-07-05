import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
