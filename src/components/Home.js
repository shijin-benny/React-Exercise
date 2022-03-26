import React from 'react'

function Home() {
    return (
        <>
            <div className='min-h-screen m-2 lg:ml-8 lg:mt-3'>
                <div className='max-w-full space-auto lg:space-x-2 text-gray-500 lg:py-5'>
                    <span>Home</span>
                    <span class="material-icons text-sm">
                        arrow_forward_ios
                    </span>
                    <span>Backery</span>
                    <span class="material-icons text-sm">
                        arrow_forward_ios
                    </span>
                    <span>Organic Bread</span>
                </div>
                <div className='grid lg:grid-rows-1 lg:grid-cols-4 grid-rows-2'>
                    <div className='col-span-1 row-span-2 px-8'>
                        <div className='w-80 h-96 border flex justify-center flex-col'>
                            <div className='flex justify-center'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <div className=' w-14 flex justify-between space-x-8 ml-5'>
                                <img className='border border-blue-600' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                                <img className='border border-blue-600' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                                <img className='border border-blue-600' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 flex flex-col'>
                        <h1 className='text-3xl font-semibold'>Brake Pads</h1>
                        <div className='text-blue-700'>
                            <span className="material-icons text-4xl text-center">
                                star_rate
                            </span>
                            <span className="material-icons text-4xl">
                                star_rate
                            </span>
                            <span className="material-icons text-4xl">
                                star_rate
                            </span>
                            <span className="material-icons text-4xl">
                                star_rate
                            </span>
                            <span className='ml-2 font-bold'>1088 Reviews</span>
                            <span className='ml-4 font-bold'>675 Answered Questions</span>
                        </div>
                        <div className='m-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora labore earum officia sapiente nam ratione, totam doloremque! In provident distinctio assumenda necessitatibus ea ut laborum asperiores iusto dicta libero?</p>
                            <p className='text-blue-500 m-3'>More Details</p>
                        </div>
                        <div className='inline space-x-4'>
                            <span className='text-4xl'>$87.00</span>
                            <span>Free Shipping</span>
                            <span className="material-icons text-blue-600 text-4xl">
                                import_export
                            </span>
                            <span className='text-blue-600'>Add to Compare</span>
                        </div>
                        <div className='p-4 flex flex-row space-x-2'>
                            <div><span className='text-2xl text-gray-500'>Qty</span></div>
                            <div className='w-32 h-10 border flex justify-between items-center p-3'>
                                <button className='text-3xl'>-</button>
                                <span>0</span>
                                <button className='text-3xl'>+</button>
                            </div>

                        </div>
                        <div className='space-x-8'>
                            <button className='bg-blue-400 px-4 py-2 font-bold text-white rounded-lg'>Add to cart</button>
                            <button className='bg-blue-800 px-4 py-2 font-bold text-white rounded-lg'>Add to cart</button>
                        </div>
                        <div className='m-5 max-w-full flex flex-row space-x-6'>
                            <span className='text-2xl font-semibold'>Share</span>

                            <img className='w-8' src="https://cdn-icons.flaticon.com/png/512/665/premium/665209.png?token=exp=1648297895~hmac=e08669f935b262829c6a321cf78d16f1" alt="" />
                            <img className='w-8' src="https://cdn-icons.flaticon.com/png/512/4138/premium/4138168.png?token=exp=1648297710~hmac=b2afbfcf4a11ee9b7520aa61e5220aee" alt="" />
                            <img className='w-8' src="https://cdn-icons.flaticon.com/png/512/4138/premium/4138164.png?token=exp=1648297710~hmac=b2177755fa8ff5c6bf48c5578f950f63" alt="" />
                            <img className='w-8' src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494467.png?token=exp=1648297710~hmac=45f82c07c303aeffbfa6e9e17f175a13" alt="" />

                        </div>
                        <div className='mt-5 mb-5 '>
                            <div className='flex flex-row space-x-20'>
                                <h6 className='font-bold'>Sold By</h6>
                                <h6 className='font-bold text-blue-500'>Seller One</h6>
                            </div>
                            <div className='flex flex-row space-x-8 mt-5'>
                                <div>
                                    <h6>Seller Rating</h6>
                                </div>
                                <div className='text-yellow-400'>
                                    <span class="material-icons">
                                        star_rate
                                    </span>
                                    <span class="material-icons">
                                        star_rate
                                    </span>
                                    <span class="material-icons">
                                        star_rate
                                    </span>
                                    <span class="material-icons">
                                        star_rate
                                    </span>
                                    <span className='text-black ml-4'>4/5(on 843 sales)</span>
                                </div>

                            </div>

                        </div>
                        <div>
                            <h6 className='font-semibold'>Product Details</h6>
                            <ul className='list-decimal m-3 text-gray-500'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>consectetur adipisicing elit. Aperiam, incidunt.</li>
                                <li>Lorem ipsum dolor sit amet.</li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-full h-96 border border-black'>
                            <div className='w-full border-b border-black h-14 flex items-center justify-center font-bold'>
                                <h1>More buying Options</h1>
                            </div>
                            <div className='flex flex-col p-8'>
                                <div className='flex flex-row justify-between'>
                                    <span>
                                        <h1 className='text-blue-500'>Seller Two</h1>
                                        <p className='text-gray-400'>Free shipping (standarad)</p>
                                    </span>

                                    <span>$88.00</span>
                                    <span className="material-icons text-blue-500 text-4xl">
                                        shopping_cart
                                    </span>
                                </div>
                                <div className='flex flex-row justify-between mt-4 border-b pb-8'>
                                    <span>
                                        <h1 className='text-blue-500'>Seller Three</h1>
                                        <p className='text-gray-400'>shipping $3.99(Express)</p>
                                    </span>

                                    <span>$85.00</span>
                                    <span className="material-icons text-blue-500 text-4xl">
                                        shopping_cart
                                    </span>
                                </div>
                                <div className='h-20 w-full flex items-center justify-center'>
                                    <h5 className='font-bold text-blue-500'>4 Offers Starting at $85.00</h5>
                                </div>
                            </div>
                        </div>

                        <div className='mt-10 flex flex-col space-y-4'>
                            <div className='inline space-x-4'>
                                <span className="material-icons text-3xl">
                                    shopping_bag
                                </span>
                                <span className='text-xl text-gray-500'>Free shipping by : Delivered by 14 oct</span>
                            </div>
                            <div className='inline space-x-4'>
                                <span className="material-icons text-3xl">
                                    local_shipping
                                </span>
                                <span className='text-xl text-gray-500'>Express shipping by : Delivered by 20</span>
                            </div>
                            <div className='inline space-x-4'>
                                <span className="material-icons text-3xl">
                                    local_shipping
                                </span>
                                <span className='text-xl text-gray-500'>Buy for $800.00:avail 10% discount</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <h2 className='text-2xl font-bold text-gray-500'>Recommented Products</h2>
                    </div>
                    <div className='max-w-full flex justify-between flex-col lg:flex-row px-8 py-8'>
                        <div className='w-60 min-h-60 border flex flex-col items-center space-y-4'>
                            <div className='w-32 py-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <span className='font-bold'>Product Name</span>
                            <span className='font-bold text-gray-500'>Wd2413d<br /> $54.52</span>

                        </div>
                        <div className='w-60 min-h-60 border flex flex-col items-center space-y-4'>
                            <div className='w-32 py-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <span className='font-bold'>Product Name</span>
                            <span className='font-bold text-gray-500'>Wd2413d<br /> $54.52</span>

                        </div>
                        <div className='w-60 min-h-60 border flex flex-col items-center space-y-4'>
                            <div className='w-32 py-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <span className='font-bold'>Product Name</span>
                            <span className='font-bold text-gray-500'>Wd2413d<br /> $54.52</span>

                        </div>
                        <div className='w-60 min-h-60 border flex flex-col items-center space-y-4'>
                            <div className='w-32 py-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <span className='font-bold'>Product Name</span>
                            <span className='font-bold text-gray-500'>Wd2413d<br /> $54.52</span>

                        </div>
                        <div className='w-60 min-h-60 border flex flex-col items-center space-y-4'>
                            <div className='w-32 py-4'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToutmx3CCfOr2HJ_t6MhU8EakxSrezuoW63w&usqp=CAU" alt="" />
                            </div>
                            <span className='font-bold'>Product Name</span>
                            <span className='font-bold text-gray-500'>Wd2413d<br /> $54.52</span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home