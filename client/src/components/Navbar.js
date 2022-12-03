import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Deyaa Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14344662/pexels-photo-14344662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Deyaa</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar