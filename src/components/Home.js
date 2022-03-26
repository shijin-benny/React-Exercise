import React from 'react'

function Home() {
    return (
        <>
            <div className='h-screen m-2 lg:ml-8 lg:mt-3'>
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
                <div className='grid grid-cols-4 grid-rows-2'>
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
                        <div className='m-3'>
                       <span>Share</span>
                        </div>
                    </div>
                    <div>1</div>

                </div>
            </div>
        </>
    )
}

export default Home