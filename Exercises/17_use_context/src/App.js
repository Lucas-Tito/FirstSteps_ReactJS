import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import "./App.css"

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <div className={`App ${theme === "dark" ? "darkTheme" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <Outlet/>
    </>
  );
}

export default App;
