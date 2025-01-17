import React from 'react'
import Navbar from '../LandingPage/Components/NavBar/NavBar'
import Footer from '../LandingPage/Components/Footer/Footer'
import './ErrorPage.css'
import errorImg from '..//../assets/error404.png'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
    <div className='errorpage_container'>
        <img className="error_banner" src={errorImg} alt="404 error image" />
        <h2>404 Error<br/> Page Not Found!</h2>  
        <p>Go back to <Link to="/">Home</Link></p> 
    </div>
    <Footer/> 
    </>
  )
}

export default ErrorPage