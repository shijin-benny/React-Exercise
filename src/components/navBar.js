import React from 'react'

function Navbar() {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='grid grid-col-2 lg:grid-cols-5 py-1 border-b border-gray-600'>
      <div className='flex flex-row items-center col-span-1 lg:flex lg:items-center lg:justify-center'>
        <img className='w-10' src="https://www.seekpng.com/png/detail/267-2675194_00106-3d-company-logos-design-free-logo-online.png" alt="logo" />
        <h1 className='text-3xl font-semibold text-blue-800'>Company<span className='text-gray-500 font-light'>Logo</span></h1>
      </div>
      <div className='hidden lg:block lg:col-span-2 lg:flex lg:items-center justify-between text-gray-400 font-semibold'>
        <span>category 1</span>
        <span>category 2</span>
        <span>category 3</span>
        <span>category 4</span>
        <span>category 5</span>
      </div>
      <div className='col-span-1 lg:col-span-2 p-5 flex flex-col max-w-full items-end'>
        <div className='flex justify-between space-x-4'>
          <span>Ship to : <span className='text-blue-500'>798 Davis lane</span></span>
          <div className='flex flex-grow'>
            <span className="material-icons text-4xl">
              account_circle
            </span>
            <p className='text-gray-500'>My Account</p>
          </div>
          <div className='flex flex-grow'>
            <span className="material-icons text-4xl">
              add_shopping_cart
            </span>
            <p className='text-gray-500'>Cart</p>
          </div>

        </div>
        <div className='w-2/5 lg:min-w-full p-4 lg:flex lg:flex-grow lg:items-center lg:justify-end'>
          <input className='py-2 px-2 border border-black rounded-l-lg' type="text" name="" id="" placeholder='Search' />
          <span className="material-icons bg-blue-700 py-2 px-4 text-white text-2xl rounded-r-lg">
            search
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar