import React from 'react'
import { Link } from 'react-router-dom'
import dailogo from '../dai-logo.png'
function Home() {
  return (
    <div class="d-flex justify-content-center">
      <Link to={"/payment"}>
        <button type="button" class="btn btn-outline-primary btn-lg fixed-centre">SEND</button>
      </Link>
    </div>
  )
}

export default Home