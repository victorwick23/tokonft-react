import React from 'react'
import { FooterLogo, FooterIcon } from '../assets'

export default function Footer() {
  return (
   <div className="bg-footer font-nav pt-3 pb-32 md:py-3 relative">
       <div className="absolute bottom-0 -left-2 ">
            <img className="w-6/12 md:w-8/12 h-full" src={FooterLogo} alt="" />
       </div>
      <div className="md:flex px-8 md:px-14 pb-4 pt-2 md:py-10 z-50">
      <div className="w-full md:w-6/12">
          <img className="w-32 md:w-48" src={FooterIcon} alt="" />
          <p className="text-prime mt-3 md:mt-8 text-sm md:text-xl leading-tight">NFT Marketplace on <br /> Binance Smart Chain</p>
          <div className="flex space-x-10 mt-8">
              <img className="w-4 md:w-8" src={"./assets/social-media/instagram.svg"} alt="" />
              <img className="w-4 md:w-8" src={"./assets/social-media/telegram.svg"} alt="" />
              <img className="w-4 md:w-8" src={"./assets/social-media/twitter.svg"} alt="" />
          </div>
          <p className="text-base mt-8 text-prime">info@tokonft.com</p>
      </div>
      <div className="w-6/12 justify-between hidden md:flex">
        <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">NFTS</p>
              <p className="text-lg text-purple hover:text-prime">Art NFT</p>
              <p className="text-lg text-purple hover:text-prime">Game NFT</p>
              <p className="text-lg text-purple hover:text-prime">Sports NFT</p>
              <p className="text-lg text-purple hover:text-prime">Photography NFT</p>
              <p className="text-lg text-purple hover:text-prime">Influencer NFTs</p>
              <p className="text-lg text-purple hover:text-prime">Collectibles</p>
              <p className="text-lg text-purple hover:text-prime">Video NFT</p>
              <p className="text-lg text-purple hover:text-prime">Music NFT</p>
              <p className="text-lg text-purple hover:text-prime">Ticket NFT</p>
          </div>

          <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">TOKONFT</p>
              <p className="text-lg text-purple hover:text-prime">NFT Blog</p>
              <p className="text-lg text-purple hover:text-prime">NFT Launchpad</p>
              <p className="text-lg text-purple hover:text-prime">Buy NFTs</p>
              <p className="text-lg text-purple hover:text-prime">Buy TKN</p>
              <p className="text-lg text-purple hover:text-prime">Create NFTs</p>
              <p className="text-lg text-purple hover:text-prime">Earn with TKN</p>
              <p className="text-lg text-purple hover:text-prime">Brand Kit</p>
              <p className="text-lg text-purple hover:text-prime">Metaverse Gallery</p>
          </div>
         
          <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">INFORMATION</p>
              <p className="text-lg text-purple hover:text-prime">Terms of service</p>
              <p className="text-lg text-purple hover:text-prime">Privacy policy</p>
              <p className="text-lg text-purple hover:text-prime">Get verified</p>
              <p className="text-lg text-purple hover:text-prime">FAQ</p>
          </div>
      </div>
      </div>
   </div>
  )
}
