import { Outlet } from 'react-router';

import Navbar from '../Navbar/Navbar';
import Header from  '../header/header';
import Footer from '../footer/footer';

import './Layout.css'

function Layout({ products, carts,setToken}) {
    return (
       <div>
          <Header />
          <Navbar products={products} carts={carts} setToken={setToken}/>
          <Outlet/>
          <Footer/>





       </div>
      );
}

export default Layout;