
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './components/Counter'
import LoginPage from './Pages/Login'
import ListProductsPage from './Pages/ListProducts'
import EditProduct from './Pages/EditProduct'
//import ViewCartpage from './Pages/ViewCart'
import GadgetStorepage from './Pages/GadgetStore'
import ProtectedRouting from './components/ProtectedRouting'
import React, { Suspense } from 'react'

const ViewCartpage = React.lazy(() => import( "./Pages/ViewCart")); // making the component invoke when it is clicked instead of on load everytime

function App() {

    return (
      <Router>
         <div className='container'>
            <header>
              <AppBar />
            </header>
            <main>
              <Suspense>
              <Routes>
                <Route path="/" element={<Counter initCount={5} />} />
                <Route path="/products" element={<ProtectedRouting><ListProductsPage /></ProtectedRouting>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/products/:id' element={<EditProduct />} />
                <Route path='/gadgets' element={<ProtectedRouting><GadgetStorepage /></ProtectedRouting>} />
                <Route path='/viewcart' element={<ProtectedRouting><ViewCartpage /></ProtectedRouting>} />
              </Routes>
              </Suspense>
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
