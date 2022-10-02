import React from 'react'
import { Link } from 'react-router-dom'
import dailogo from '../dai-logo.png'
function Home(ol) {
  return (
    <div style={{padding:"5rem"}}>HomEEe
        <button>
            <Link to={"/payment"}>
                SEND
            </Link>
        </button>
    </div>
  )
}

export default Home