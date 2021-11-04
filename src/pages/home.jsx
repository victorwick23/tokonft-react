import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { OurTeam, Feature, StakingImg, LaunchpadImg, MetaverseImg, TeamPhoto } from '../assets'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

export default function Home() {


  return (
    <div className="bg-bg-galaxy bg-dark w-full bg-contain bg-no-repeat">
      <div className="absolute flex w-full h-screen items-center">
        <div className="w-4/12">
          <img className="w-72 mx-auto animate-heromove mt-56" src={"./assets/hero-1.png"} alt="" />
        </div>
        <div className="w-4/12 justify items-center">
          <img className="w-80 mx-auto animate-heromove-2 mb-36" src={"./assets/hero-2.png"} alt="" />

        </div>
        <div className="w-4/12">
          <img className="w-96 mt-14 mx-auto animate-heromove-3 mb-14" src={"./assets/hero-3.png"} alt="" />
        </div>
      </div>
      <ParallaxProvider className="relative z-50">
        <Parallax className="absolute pt-80" y={[-8, 8]} tag="figure">
          <img className="w-full pt-36" src={"./assets/front-stone.png"} alt="" />
        </Parallax>
        <div className="relative flex w-full pt-24 pb-28 items-center px-14">
          <div className="w-4/12">
            <div className>
              <p className="text-purple text-5xl font-bold mb-96">NFT Marketplace built on Binance Smart Chain</p>
              {/* <img className="w-72 mt-32 mx-auto animate-bounce-1" src={"./assets/hero-1.png"} alt="" /> */}
            </div>
          </div>
          <div className="w-4/12 justify items-center ">
            {/* <img className="w-80 mt-14 mx-auto animate-bounce-2" src={"./assets/hero-2.png"} alt="" /> */}
            <img className="w-64 mx-auto mt-96" src={"./assets/tokonft.png"} alt="" />
            <div
              className="w-56 border border-prime rounded-full mt-14 mx-auto hover:text-white hover:bg-prime hover:rounded-full">
              <Link to="/app">
              <p
                className="text-prime text-xl px-6 py-2 text-center hover:text-white hover:rounded-full cursor-pointer">
                Launch App Now</p>
              </Link>
            </div>
            <div className="w-40 bg-purple rounded-full flex items-center px-4 py-1 justify-center mx-auto mt-8">
              <p className="font-bold text-lg text-prime">Buy</p>
              <img className="w-14 h-full ml-2" src={"./assets/btn-buy-logo.png"} alt="" />
            </div>
          </div>
          <div className="w-4/12">
            <div className="grid-flow-col items-end">
              {/* <img className="w-96 mt-14 mx-auto animate-bounce-3" src={"./assets/hero-3.png"} alt="" /> */}
              <img className="w-24 mt-96 ml-64" src={"./assets/hero-c.png"} alt="" />
            </div>
          </div>
        </div>



        <div className="relative flex w-full items-center pt-28 z-50 px-14">
          <div className="w-4/12">
            <div className>
              <p className="text-prime text-2xl font-bold ">Create, Buy, Sell, and Earn with NFTs Faster and cheaper
                fees
                under $1 Earn BNB and TKN for NFT sale</p>
              <Fade direction="left">
                <img className="w-64 mx-auto" src={"./assets/phone1.png"} alt="" />

              </Fade>
              <p className="text-lg text-prime font-nav mt-6 tracking-tighter leading-tight">The night is dark and full
                of
                terrors. The winds of Winter.
                What is dead may never die. And now his watch is ended. The battle of the redgrass field. Unbowed,
                Unbent,
                Unbroken. All men must die.</p>
            </div>
          </div>
          <div className="w-4/12 ">
            <Fade direction="up">
              <img className="w-80 mx-auto" src={"./assets/phone2.png"} alt="" />
            </Fade>
            <p className="text-lg text-prime font-nav mt-6 mx-auto tracking-tighter leading-tight">The night is dark and
              full of terrors. The winds of
              Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field. Unbowed,
              Unbent, Unbroken. All men must die.</p>

            <img className="w-64 mx-auto mt-14" src={"./assets/tokonft.png"} alt="" />

          </div>
          <div className="w-4/12">
            <div className>
              <Fade direction="right">
                <img className="w-96 mx-auto" src={"./assets/phone3.png"} alt="" />
              </Fade>
              <p className="text-lg text-prime font-nav mt-6 mx-auto tracking-tighter leading-tight">The night is dark
                and
                full of terrors. The winds of
                Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field.
                Unbowed,
                Unbent, Unbroken. All men must die.</p>

            </div>
          </div>
        </div>

        <div className="py-40 bg-bg-detail-nft px-14 bg-cover bg-no-repeat">
          <img className="w-96 mx-auto" src={Feature} alt="" />
          <div className="flex">
            <Fade direction="left" className="w-4/12">
              <img src={StakingImg} alt="" />
            </Fade>
            <Fade direction="down" className="w-4/12">
              <img src={MetaverseImg} alt="" />
            </Fade>
            <Fade direction="right" className="w-4/12">
              <img src={LaunchpadImg} alt="" />
            </Fade>
          </div>
        </div>

        <div className="py-32 bg-bg-detail-nft px-14 bg-cover bg-no-repeat">
          <img className="w-96 mx-auto" src={OurTeam} alt="" />
          <div className="flex justify-items-center">
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
            <div className="w-3/12">
              <img className="w-44 mx-auto" src={TeamPhoto} alt="" />
              <p className="text-prime text-2xl font-nav text-center pt-4">DONNIE</p>
              <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Ceo and Co-Founder
              </p>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}
