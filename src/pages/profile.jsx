import React from 'react'
import NftListProfile from '../components/reusable/nftlistprofile'
import { Link } from 'react-router-dom'

export default function profile() {
  return (
    <div className="flex space-x-8 pt-32 w-full px-6 md:px-14 bg-dark font-nav pb-24">
      <div className="w-3/12">
        <div className="bg-greygrad w-full p-5 rounded-t-full">
          <div className="relative w-full pt-16 px-10">
            <img className=" mx-auto rounded-full border-4 border-white -mt-8"
              src={"./assets/image.jpg"} alt="" />
          </div>
          <p className="mt-8 font-nav text-3xl text-prime text-center tracking-tighter leading-tight pt-4">VICTORWICK</p>
          <p className="mt-2 font-nav text-lg text-prime text-center tracking-tighter leading-tight pt-1">0xu8745k34r98234dsf</p>
          <p className="mt-2 font-nav text-lg text-prime tracking-tighter leading-tight pt-6">I love about the description session but i can't stand it hahaha</p>
        </div>
      </div>
      <div className="w-9/12 items-end">
        <div className="flex space-x-8 justify-center">
            <p className="text-prime text-2xl border-b border-purple">Collection</p>
            <p className="text-purple text-2xl ">Sold</p>
            <p className="text-purple text-2xl ">Created</p>
            <p className="text-purple text-2xl ">Bought</p>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-12 pt-8 px-14">
          <Link  to="/detail-nft">
            <NftListProfile/>
          </Link>
          <Link  to="/detail-nft">
            <NftListProfile/>
          </Link>
          <Link  to="/detail-nft">
            <NftListProfile/>
          </Link>
          <Link  to="/detail-nft">
            <NftListProfile/>
          </Link>
          <Link  to="/detail-nft">
            <NftListProfile/>
          </Link>
          
        
        </div>
      </div>
    </div>
    
  )
}
