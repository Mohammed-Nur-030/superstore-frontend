import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const Layout = () => {
  return (
    <div>
      
    <Outlet/>
    {/* <Footer/> */}
    <ToastContainer
    ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
   
    </div>
  )
}

export default Layout
