import React from 'react'
import { Link } from 'react-router-dom'
function nav() {
  return (
    <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <Link to ="/">Home</Link>
    <Link to="#" className="navbar-brand col-sm-3 col-md-2 mr-0">
      Dbanking
    </Link>
  </nav></div>
  )
}

export default nav