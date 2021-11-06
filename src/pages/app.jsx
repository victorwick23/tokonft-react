import React from 'react'
import { Link } from 'react-router-dom'
import { Nftcard, Topartist } from '../components'


export default function Appnft() {
  return (
    <div className="pt-14 md:pt-24 w-full px-6 md:px-14 bg-dark font-nav pb-24">
        <div className="pt-14">
            <div className="">
                <p
                    className="absolute left-0 right-0 -mt-6 text-prime text-xl font-bold bg-black text-center border border-purple rounded-full w-40 md:w-52 px-4 py-1 md:py-2 mx-auto -mb-6">
                    Top Artist</p>
                <div
                    className="flex md:grid md:grid-cols-4 gap-x-8 gap-y-10 bg-gradient-to-b from-softDark via-softDark to-dark px-5 py-4 md:py-8 justify-center rounded-full border-2 border-purple z-0 overflow-x-auto scrollbar-hide pl-14 md:pl-0">
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                </div>
            </div>
        </div>
        <div className="mt-10 md:mt-14">
            <p
                className="text-prime text-xl font-bold bg-black text-center border border-purple rounded-full w-40 md:w-52 px-8 py-1 md:py-2 mx-auto">
                Explore</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 px-6 md:px-14 gap-y-14 mt-6 md:mt-8">
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
                <Link to="/detail-nft">
                <Nftcard />
                </Link>
            </div>
            <div className="flex justify-center mt-14">
                <p className="bg-softDark text-prime text-2xl rounded-full py-2 px-8 hover:bg-purple hover:text-white">Load More</p>
            </div>
        </div>
    </div>
  )
}
