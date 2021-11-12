import React from 'react'
import NftListProfile from '../components/reusable/nftlistprofile'
import { Link } from 'react-router-dom'

export default function profile() {
  return (
    <div className="md:flex md:space-x-8 pt-24 md:pt-32 w-full px-6 md:px-14 bg-dark font-nav pb-24">
      <div className="hidden md:block w-3/12 mt-14">
        <div className="bg-greygrad w-full p-5 px-3 rounded-t-full">
          <div className="relative w-full pt-16 px-10">
            <img className=" mx-auto rounded-full border-4 border-white -mt-8"
              src={"./assets/image.jpg"} alt="" />
          </div>
          <p className="mt-8 font-nav text-3xl text-prime text-center tracking-tighter leading-tight pt-4">VICTORWICK</p>
          <p className="mt-2 font-nav text-lg text-prime text-center tracking-tighter leading-tight pt-1">0xu8745k34r98234dsf</p>
          <p className="mt-2 font-nav text-lg text-prime tracking-tighter leading-tight pt-6">I love about the description session but i can't stand it hahaha</p>
        </div>
      </div>

      <div className="flex md:hidden w-full ">
        <div className="bg-greygrad w-full py-5 px-3 rounded-xl">
          <div className="flex w-full items-center space-x-4">
            <img className="w-28 h-28 rounded-full border-4 border-white" src={"./assets/image.jpg"} alt="" />
            <div>
              <p className=" font-nav text-2xl text-prime tracking-tighter leading-tight pt-4">VICTORWICK</p>
              <p className=" font-nav text-sm text-prime tracking-tighter leading-tight pt-1">0xu8745k34r98234dsf
              </p>
              <p className="mt-1font-nav text-sm text-prime tracking-tighter leading-tight pt-6">"I love about the
                description session but i can't stand it hahaha"</p>
            </div>
          </div>

        </div>
      </div>

      <div className="md:w-9/12 items-end">
        <div className="flex space-x-8 md:space-x-12 justify-center mt-8  md:mt-0">
            <p className="text-prime text-lg md:text-2xl border-b border-purple">Collection</p>
            <p className="text-purple text-lg md:text-2xl ">Sold</p>
            <p className="text-purple text-lg md:text-2xl ">Created</p>
            <p className="text-purple text-lg md:text-2xl ">Bought</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-12 pt-8 px-8 md:px-14">
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
