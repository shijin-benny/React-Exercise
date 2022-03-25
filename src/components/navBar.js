import React from 'react'

function Navbar() {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='grid lg:grid-cols-4 py-3 h-14'>
      <div className='col-span-1 flex items-center justify-center'>
        <img className='w-10' src="https://i.pinimg.com/originals/b6/79/54/b67954a7113e1fb688b43eb51477fc3a.jpg" alt="logo" />
        <h1 className='text-3xl font-semibold text-green-600'>Company<span className='text-gray-500'>logo</span></h1>
      </div>
      <div className='col-span-2 flex items-center justify-center flex-grow'>
        <input className='w-full h-10 px-4 border border-black rounded-l-lg' type="text" placeholder='Search' />
        <button className='bg-gray-100 flex items-center justify-center rounded-r-lg h-10 w-14 border text-white border-gray-400 border-l-0 bg-gray-700'>
          <i class="material-icons">search</i>
        </button>
      </div>
      <div className='col-span-1 flex justify-end space-x-8 mr-5'>
      <span class="material-icons text-5xl text-green-600">
          account_circle
        </span>
        <span class="material-icons text-5xl text-green-600">
          shopping_cart_checkout
        </span>
      </div>
      <div className='hidden col-span-4 lg:block bg-gray-600 w-full  h-12 lg:flex lg:justify-between items-center px-20 text-white mt-5 '>
        <span>Bakery</span>
        <span>Nuts & seeds</span>
        <span>Vegetables</span>
        <span>cheeses</span>
        <span>Sea Food</span>
        <span>Dairy</span>
        <span>Meat</span>
        <span>Snaks</span>
      </div>
    </nav>
  )
}

export default Navbar