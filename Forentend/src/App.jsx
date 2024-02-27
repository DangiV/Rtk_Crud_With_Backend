import './App.css'
import NavBar from './Component/NavBar'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProduct from './Component/AllProduct';
import Createproduct from './Component/Createproduct';
import Editproduct from './Component/Editproduct';

function App() {
  return (
    <>
      <NavBar />

        <Routes>
          <Route path='/' element={<AllProduct />} />
          <Route path='/CreateProduct' element={<Createproduct />} />
          <Route path='/EditProduct/:id' element ={<Editproduct />} />
        </Routes>
    </>
  )
}

export default App
