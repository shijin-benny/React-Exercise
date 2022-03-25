import React from 'react'

function Home() {
    return (
        <>
            <div className='h-screen m-2 lg:m-24'>
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
                <div className='max-w-full flex flex-col'>
                    <div className='text-gray-500'>
                        <h1 className='text-2xl lg:text-5xl'>Dave's Killer  Bread Organic 21 Whole Grain Bread</h1>
                    </div>
                    <div className='flex flex-row text-yellow-500 items-center space-x-1'>
                        <span className="material-icons text-5xl">
                            star_rate
                        </span>
                        <span className="material-icons text-5xl">
                            star_rate
                        </span>
                        <span className="material-icons text-5xl">
                            star_rate
                        </span>
                        <span className="material-icons text-5xl">
                            star_rate
                        </span>
                        <span>5 Reviews</span>
                    </div>

                </div>
                <div className='max-w-full flex flex-row'>
                    <div className='flex items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTvcxEsKg19aTM9NmESGkTVeeuCEZ_gdEzQ&usqp=CAU" alt="product" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home