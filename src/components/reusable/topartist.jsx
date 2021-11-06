import React from 'react'

function Topartist() {
    return (
        <div className="flex md:flex font-nav md:items-center space-x-9  md:space-x-8 justify-center hover:bg-dark px-3 md:px-1 py-1 md:py-3 rounded-full">
            <div className="items-center flex">
                <p className=" text-prime text-xl md:text-2xl">1.</p>
                <img className="w-14 md:w-24 rounded-full border md:border-8 border-white" src={"./assets/image.jpg"} alt="" />
            </div>
            <div className="items-center">
                <p className=" text-prime text-xl md:text-2xl">Sherlla</p>
                <p className=" text-prime text-sm md:text-lg">88,1 BNB</p>

            </div>
        </div>
    )
}

export default Topartist
