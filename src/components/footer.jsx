import React from 'react'
import { FooterLogo, FooterIcon } from '../assets'

export default function Footer() {
  return (
   <div className="bg-footer font-nav py-3 relative">
       <div className="absolute bottom-0 -left-10 ">
            <img className="w-8/12 h-full" src={FooterLogo} alt="" />
       </div>
      <div className="md:flex px-8 md:px-14 py-10 z-50">
      <div className="w-full md:w-6/12">
          <img className="w-48" src={FooterIcon} alt="" />
          <p className="text-prime mt-8 text-lg md:text-xl">NFT Marketplace on Binance Smart Chain</p>
          <div className="flex space-x-5 mt-8">
              <img className="w-8" src={"./assets/social-media/instagram.svg"} alt="" />
              <img className="w-8" src={"./assets/social-media/telegram.svg"} alt="" />
              <img className="w-8" src={"./assets/social-media/twitter.svg"} alt="" />
          </div>
          <p className="text-lg mt-2 text-prime">info@tokonft.com</p>
      </div>
      <div className="w-6/12 justify-between hidden md:flex">
        <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">NFTS</p>
              <p className="text-lg text-prime">Art NFT</p>
              <p className="text-lg text-prime">Game NFT</p>
              <p className="text-lg text-prime">Sports NFT</p>
              <p className="text-lg text-prime">Photography NFT</p>
              <p className="text-lg text-prime">Influencer NFTs</p>
              <p className="text-lg text-prime">Collectibles</p>
              <p className="text-lg text-prime">Video NFT</p>
              <p className="text-lg text-prime">Music NFT</p>
              <p className="text-lg text-prime">Ticket NFT</p>
          </div>

          <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">TOKONFT</p>
              <p className="text-lg text-prime">NFT Blog</p>
              <p className="text-lg text-prime">NFT Launchpad</p>
              <p className="text-lg text-prime">Buy NFTs</p>
              <p className="text-lg text-prime">Buy TKN</p>
              <p className="text-lg text-prime">Create NFTs</p>
              <p className="text-lg text-prime">Earn with TKN</p>
              <p className="text-lg text-prime">Brand Kit</p>
              <p className="text-lg text-prime">Metaverse Gallery</p>
          </div>
         
          <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">INFORMATION</p>
              <p className="text-lg text-prime">Terms of service</p>
              <p className="text-lg text-prime">Privacy policy</p>
              <p className="text-lg text-prime">Get verified</p>
              <p className="text-lg text-prime">FAQ</p>
          </div>
      </div>
      </div>
   </div>
  )
}
