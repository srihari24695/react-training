import {Link} from 'react-router-dom';
import { AppThemeContext } from '../context/AppThemeContext';
import { useContext } from 'react';

function AppBar() {

const themeContext = useContext(AppThemeContext);

function switchTheme() {
    console.log("Switch theme button clicked, current theme: ", themeContext.mode);
    themeContext.changeMode(themeContext.mode === 'dark' ? 'light' : 'dark'); // to switch the theme between dark and light mode    
}

  return (
      <nav className={`navbar navbar-${themeContext.mode} bg-${themeContext.mode}`}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">React</a>
              <ul className="nav">
                  <li className="nav-item">
                    {/* if we have anchor tag the page will replace all the time, if we replace with Link the page won't be refreshed and it behaves as single page app */}
                      <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link> 
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                  </li>     
                  <li className="nav-item">
                      <Link className="nav-link" to="/gadgets">Gadget Store</Link>
                  </li>   
                  <li className="nav-item">
                      <Link className="nav-link" to="/viewcart">View Cart</Link>
                  </li>   
                  <li className="nav-item">
                      <button className="btn btn-warning" onClick={switchTheme}> Switch Theme</button>
                  </li>         
              </ul>
          </div>
      </nav>
  )
}

export default AppBar;