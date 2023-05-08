import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './Pages/RootLayOut'
import HomePage from './Pages/HomePage'
import ProductDetail from './Pages/ProductDetail'
import CartPage from './Pages/user_page/CartPage'
import Shipping from './Pages/user_page/Shipping'
import PlaceOrder from './Pages/user_page/PlaceOrder'
import ProductList from './Pages/admin_page/ProductList'
import Login from './Pages/auth_page/Login'
import SignUp from './Pages/auth_page/SignUp'
import AddProduct from './Pages/admin_page/AddProduct'
import OrderDetail from './Pages/user_page/OrderDetail'
import UserProfile from './Pages/user_page/UserProfile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthRoutes from './Components/AuthRoutes'
import AdminRoutes from './Components/AdminRoutes'
import UserRoutes from './Components/UserRoutes'

const App = () => {

  return (

    <>
      <Routes>

        <Route path='/' element={<RootLayOut />} >
          <Route index element={<HomePage />} />

          <Route element={<AdminRoutes />}>
            <Route path='product_list' element={<ProductList />} />
            <Route path='product_add' element={<AddProduct />} />
          </Route>


          <Route element={<AuthRoutes />}>
            <Route path='cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
            <Route path='order/:id' element={<OrderDetail />} />
            <Route path='user_profile' element={<UserProfile />} />
            <Route path='user/placeorder' element={<PlaceOrder />} />

          </Route>

          <Route element={<UserRoutes />}>
            <Route path='user_login' element={<Login />} />
            <Route path='user_signUp' element={<SignUp />} />
          </Route>



          <Route path='product/:id' element={<ProductDetail />} />


        </Route>

      </Routes>
      <ToastContainer autoClose={500} position='top-right' />
    </>
  )
}

export default App