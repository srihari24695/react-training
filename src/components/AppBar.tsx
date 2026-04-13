import {Link} from 'react-router-dom';

function AppBar() {
  return (
      <nav className="navbar navbar-dark bg-dark">
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
              </ul>
          </div>
      </nav>
  )
}

export default AppBar;