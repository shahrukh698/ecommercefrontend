import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateComponent from './Components/PrivateComponent';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';

function App() {

  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
      <Nav/>
      <Routes>
        
        <Route element = {<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1>Logout Product</h1>}/>
        <Route path="/profile" element={<h1>Profile Product</h1>}/>
        </Route>

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
