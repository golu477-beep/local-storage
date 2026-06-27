import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <header className=" flex p-4 border-b bg-black  shadow-sm text-white  justify-center  gap-20 ">
          <div  className=''>
            <img src="https://www.pngegg.com/en/png-ndqmd" alt="lo" />
          </div>
          <div className=''>
          <input type="text" />
          </div>
      <nav className="flex gap-40">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to='/register'>Register</Link>  
      </nav>
    </header>
      
    </div>
  )
}

export default Navbar;
