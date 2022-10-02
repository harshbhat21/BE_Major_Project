import React from 'react'
import { Link } from 'react-router-dom'
import dailogo from '../dai-logo.png'
import Transactionhist from './Transactionhist'
function Home() {
  return (
    <div class="d-flex justify-content-center">
      <Link to={"/payment"}>
        <button type="button" class="btn btn-outline-primary btn-lg fixed-centre ">SEND</button>
      </Link>      
    
      <div id='about-section'> 
      </div>
      <div className="site-section" id="next">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4 text-center" data-aos="fade-up">
          <img src="./assets/images/flaticon-svg/svg/001-wallet.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
          <h3 className="card-title" ><Link className to={"/payment"}>
              Send Money
                      </Link></h3>
          <p>Seamless Transactions to anyone around the world just with a desired address</p>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <img src="./assets/images/flaticon-svg/svg/004-cart.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
          <h3 className="card-title">Online Shoppings</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-up">
          <img src="./assets/images/flaticon-svg/svg/006-credit-card.svg" alt="Free Website Template by Free-Template.co" className="img-fluid w-25 mb-4"/>
          <h3 className="card-title">Credit / Debit Cards</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
</div></div>
    </div>
  )
}

export default Home