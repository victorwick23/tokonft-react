
import React from 'react'

function Nftcard(props) {

    return (
        <div className="bg-softDark w-full  rounded-t-full p-5 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
            <img className="rounded-t-full" src={ props.img || "./assets/image.jpg" } alt="" />
            <div className="relative w-full">
                <img className="absolute left-0 right-0 mx-auto w-14 rounded-full border-4 border-white -mt-8" src={"./assets/image.jpg"}  alt="" />
            </div>
            <p className="mt-8 font-nav text-xl text-prime">{props.title || "Dummy Title"}</p>
            <p className="mt-2 font-nav text-lg text-prime bg-dark w-36 rounded-lg px-2 py-1">0.3 BNB</p>
        </div>
    )
}

export default Nftcard


