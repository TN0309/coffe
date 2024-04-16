import './Header.css'
import React from 'react'

function Header() {
  return (
    <section>
    <header>
     <nav>
             <h1>Bean Seene</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
                <button>  SingUp </button>
        </nav> 
        <div>
       <h1 className='hello'>We’ve got your morning covered with</h1><br />
       <h2> Coffe</h2>
       <h3>It is best to start your day with a cup of coffee. <br /> Discover the
       best flavours coffee you will ever have. <br /> We provide the best
       for our customers.</h3>
       <button className='order' >Order Now</button> 
      
     </div>
    </header>
    </section>
  )
}

export default Header
