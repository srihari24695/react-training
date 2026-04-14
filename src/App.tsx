
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './components/Counter'
import LoginPage from './Pages/Login'
import ListProducts from './Pages/ListProducts'
import ListProductsPage from './Pages/ListProducts'
import EditProduct from './Pages/EditProduct'

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
                <Route path="/products" element={<ListProductsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/products/:id' element={<EditProduct />} />
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
