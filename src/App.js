import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategories'
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSineup from './Pages/LoginSineup';
import Footer from './Components/footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
       <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
       <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kids'/>}/>
       <Route path='/product' element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSineup/>}/>
      </Routes>
     <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;