import React from 'react'

function Footer() {
    return (
        <div className="footer-2 bg-gray-700 pt-2 md:pt-5">
            <div className='grid grid-cols-4 lg:px-10 py-6'>
                <div className='flex flex-col text-white px-3 text-center'>
                    <h2 className='text-3xl font-semibold m-1'>COMPANY</h2>
                    <span>About Us</span>
                    <span>Sell with Us</span>
                    <span>Our Sellers</span>
                </div>
                <div className='flex flex-col text-white px-3 text-center'>
                    <h2 className='text-3xl font-semibold m-1'>COUSTOMER SERVICE</h2>
                    <span>Help and FAQS</span>
                    <span>Exchange and Return Policy</span>
                    <span>Privacy Policy</span>
                    <span>Terms and Conditions</span>
                </div>
                <div className='flex flex-col text-white px-3 text-center'>
                    <h2 className='text-3xl font-semibold m-1'>Our Stories</h2>
                    <span>Stores and Services</span>
                    <span>Location and Hours</span>
                    <span>Catalogs</span>
                </div>
                <div className='flex flex-col text-white'>
                    <h2 className='font-semibold m-1'>Subscribe Newsletters</h2>
                    <div>
                        <input className='px-3 py-2 rounded-md' type="text" placeholder='Enter your email address' />
                        <button className='ml-2 px-3 py-2 bg-blue-500 rounded-md'>Submit</button>
                    </div>

                </div>
            </div>

            <div className="border-t border-solid border-gray-900 mt-4 py-4">
                <div className="container px-4 mx-auto">

                    <div className='flex justify-between'>
                        <div className='flex flex-col text-white'>
                            <div className='inline space-x-3'>
                                <span class="material-icons">
                                    call
                                </span>
                                <span>1800 4505 79077</span>
                            </div>
                            <div className='inline space-x-3'>
                                <span class="material-icons">
                                    alternate_email
                                </span>
                                <span>Sample123@gmail.com</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <div className='inline space-x-3'>
                                <span class="material-icons">
                                    location_on
                                </span>
                                <span>Address line 1</span>
                            </div>
                            <div className='inline space-x-3'>
                                <span class="material-icons">
                                    location_on
                                </span>
                                <span>Address line 1</span>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                           <img className='w-10' src="https://cdn-icons.flaticon.com/png/512/739/premium/739237.png?token=exp=1648237821~hmac=5d5b67a7467d94a5b7dab7e7410b469d" alt="f" />
                           <img className='w-10' src="https://cdn-icons.flaticon.com/png/512/3488/premium/3488326.png?token=exp=1648237942~hmac=e4ff81ebefc91b8db4823723b3ca43e2" alt="f" />
                           <img className='w-10' src="https://cdn-icons.flaticon.com/png/512/508/premium/508215.png?token=exp=1648238051~hmac=37a39d11b5606dd9379a3b05d961e15b" alt="" />
                           <img className='w-10' src="https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer