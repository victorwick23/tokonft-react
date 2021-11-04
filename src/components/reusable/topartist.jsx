import React from 'react'

function Topartist() {
    return (
        <div className="flex font-nav items-center space-x-5 justify-center">
            <div className="items-center flex">
                <p className=" text-prime text-2xl">1.</p>
                <img className="w-24 rounded-full border-8 border-white" src={"./assets/image.jpg"} alt="" />
            </div>
            <div className="items-center">
                <p className=" text-prime text-2xl">Sherlla</p>
                <p className=" text-prime text-lg">88,1 BNB</p>

            </div>
        </div>
    )
}

export default Topartist
