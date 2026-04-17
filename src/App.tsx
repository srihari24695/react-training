
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './components/Counter'
import LoginPage from './Pages/Login'
import ListProductsPage from './Pages/ListProducts'
import EditProduct from './Pages/EditProduct'
import ViewCartpage from './Pages/ViewCart'
import GadgetStorepage from './Pages/GadgetStore'
import ProtectedRouting from './components/ProtectedRouting'

function App() {

    return (
      <Router>
         <div className='container'>
            <header>
              <AppBar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Counter initCount={5} />} />
                <Route path="/products" element={<ProtectedRouting><ListProductsPage /></ProtectedRouting>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/products/:id' element={<EditProduct />} />
                <Route path='/gadgets' element={<ProtectedRouting><GadgetStorepage /></ProtectedRouting>} />
                <Route path='/viewcart' element={<ProtectedRouting><ViewCartpage /></ProtectedRouting>} />
              </Routes>
            </main>
        </div>
      </Router>
    )





  // return (
  //   <div>
  //     <h3> React Application</h3>
  //     <Message text="Hello React" color="blue" />
  //     <Message text="Welcome to React" color="green" />

  //     <Counter initCount={5} />
  //     <Counter initCount={15} />
  //   </div>
  // )
}

export default App
