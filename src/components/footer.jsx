import React from 'react'
import { FooterLogo, FooterIcon, DiscordIcon } from '../assets'
import {FacebookIcon, RedditIcon, YoutubeIcon, TiktokIcon} from '../assets'

export default function Footer() {
  return (
   <div className="bg-footer font-nav pt-3 pb-32 md:py-3 relative">
       <div className="absolute bottom-0 -left-2 z-0">
            <img className="w-6/12 md:w-8/12 h-full " src={FooterLogo} alt="" />
       </div>
      <div className="md:flex px-8 md:px-14 pb-4 pt-2 md:py-10 z-50 relative">
      <div className="w-full md:w-6/12 ">
          <img className="w-32 md:w-48" src={FooterIcon} alt="" />
          <p className="text-prime mt-3 md:mt-8 text-sm md:text-xl leading-tight">NFT Marketplace on <br /> Binance Smart Chain</p>
          <div className="mt-8 items-center">
              <div className="flex space-x-4 md:space-x-7 items-center pb-2">
              <a href="https://instagram.com/tokonft.io">
                <img className="w-4 md:w-8" src={"./assets/social-media/instagram.svg"} alt="" />
              </a>
              <a href="https://t.me/TokoNFTGroup">
                <img className="w-4 md:w-8" src={"./assets/social-media/telegram.svg"} alt="" />
              </a>
              <a href="https://twitter.com/tokonft">
                <img className="w-4 md:w-8" src={"./assets/social-media/twitter.svg"} alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100074288769187">
                <img className="w-3 md:w-6" src={FacebookIcon} alt="" />
              </a>
              
              </div>
              <div className="flex space-x-4 md:space-x-7 items-center py-2 z-50">
              <a href="https://discord.gg/JAJuD5Yx">
                <img className="w-5 md:w-8" src={DiscordIcon} alt="" />
              </a>
              <a href="https://youtube.com/channel/UCSjqSh7_29jCUcJ_8h8xQEg">
                <img className="w-4 md:w-8" src={YoutubeIcon} alt="" />
              </a>
              <a href="https://www.reddit.com/u/TokoNFT">
                <img className="w-5 md:w-8" src={RedditIcon} alt="" />
              </a>
              <a href="https://vt.tiktok.com/ZSe2LrvBC/">
                <img className="w-4 md:w-8" src={TiktokIcon} alt="" />
              </a>
              </div>
              
          </div>
          <p className="text-base mt-8 text-prime">support@tokonft.io</p>
      </div>
      <div className="w-6/12 justify-between hidden md:flex">
        <div className="space-y-2">
              <p className="text-2xl text-prime font-bold">NFTS</p>
              <p className="text-lg text-purple hover:text-prime">Art NFT</p>
              <p className="text-lg text-purple hover:text-prime">Game NFT</p>
              <p className="text-lg text-purple hover:text-prime">Sports NFT</p>
              <p className="text-lg text-purple hover:text-prime">Photography NFT</p>
              <p className="text-lg text-purple hover:text-prime">Instagram NFTs</p>
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
