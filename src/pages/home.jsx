import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { OurTeam, Feature, StakingImg, LaunchpadImg, MetaverseImg, GalaxyImg, GalaxyImg2, backgroundNFT, backgroundNFT2, ProfileVictor, ProfileUdin, ProfileResha, ProfileFebi, ProfileAgung, ProfileDirga, ProfileRosidi} from '../assets'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=" bg-softDark w-full bg-contain bg-no-repeat">
      <ParallaxProvider>
        <div className="relative">
          <div className="absolute flex w-full h-screen items-center justify-center">
            <Parallax y={[-30, 0]} className="absolute">
              <img className="w-full md:pt-96 hidden md:block" src={GalaxyImg} alt="" />
              <img className="w-full pt-96 md:hidden" src={GalaxyImg2} alt="" />
            </Parallax>
            <Parallax y={[-50, 50]} className="w-3/12 md:w-4/12">
              <img className="w-52 md:w-72 mx-auto animate-heromove mt-14 md:mt-56" src={"./assets/hero-1.png"}
                alt="" />
            </Parallax>
            <Parallax y={[-50, 50]} className="w-4/12 justify items-center">
              <img className="w-80 mx-auto animate-heromove-2 ml-4 md:mx-auto mb-6 md:mb-48" src={"./assets/hero-2.png"} alt="" />
            </Parallax>
            <Parallax y={[-60, 50]} className="w-4/12">
              <img className="w-96 mt-14 animate-heromove-3 mb-4 md:mb-14" src={"./assets/hero-3.png"} alt="" />
            </Parallax>
          </div>
          <Parallax className="absolute pt-52 md:pt-80 w-full " y={[20, 0]} tag="figure">
            <img className="w-full h-auto pt-48 md:pt-28 mb-52" src={"./assets/front-stone.png"} alt="" />
          </Parallax>
          <div className="relative md:flex w-full pt-36 md:pt-24 pb-28  md:items-center px-8 md:px-14">
            <div className="w-full md:w-4/12">
              <div className>
                <p className="text-prime text-4xl md:text-5xl font-bold mb-60 md:mb-96 md:pl-10 text-center md:text-left">NFT
                  Marketplace <br /> built on Binance Smart Chain
                </p>
                {/* <img className="w-72 mt-32 mx-auto animate-bounce-1" src={"./assets/hero-1.png"} alt="" /> */}
              </div>
            </div>
            <div className="w-full md:w-4/12 justify items-center ">
              {/* <img className="w-80 mt-14 mx-auto animate-bounce-2" src={"./assets/hero-2.png"} alt="" /> */}
              <img className="w-48 md:w-72 mx-auto mt md:mt-96" src={"./assets/tokonft.png"} alt="" />
              <div
                className="w-44 md:w-56 border border-prime rounded-full mt-8 md:mt-14 mx-auto hover:text-white hover:bg-prime hover:rounded-full">
                <Link to="/app">
                <p
                  className="text-prime text-lg md:text-xl px-2 md:px-6 py-1 md:py-2 text-center hover:text-white hover:rounded-full cursor-pointer">
                  Launch App Now</p>
                </Link>
              </div>
              <div className="w-40 bg-purple rounded-full flex items-center px-4 py-1 justify-center mx-auto mt-4 md:mt-8">
                <p className="font-bold text-lg text-prime">Buy</p>
                <img className="w-14 h-full ml-2" src={"./assets/btn-buy-logo.png"} alt="" />
              </div>
            </div>
            <div className="w-full md:w-4/12 ">
              <div className="grid-flow-col items-end">
                {/* <img className="w-96 mt-14 mx-auto animate-bounce-3" src={"./assets/hero-3.png"} alt="" /> */}
                <img className="w-28 mt-80 ml-64 hidden md:block" src={"./assets/hero-c.png"} alt="" />
              </div>
            </div>
          </div>

          <div className="relative md:flex w-full md:items-end pt-4 px-8 md:px-28 md:space-x-14">
            <div className="w-full md:w-4/12">
              <div className>
                <p className="text-prime text-2xl font-bold text-center md:text-left">Create, Buy, Sell, and Earn with NFTs Faster and cheaper
                  fees
                  under $1 Earn BNB and TKN for NFT sale</p>
                <Fade direction="left" triggerOnce="true">
                  <img className="w-56 mx-auto" src={"./assets/phone1.png"} alt="" />

                </Fade>
                <p className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center md:text-left  py-4 md:py-0">The night is dark and
                  full
                  of
                  terrors. The winds of Winter.
                  What is dead may never die. And now his watch is ended. The battle of the redgrass field. Unbowed,
                  Unbent,
                  Unbroken. All men must die.</p>
              </div>
            </div>
            <div className="w-full md:w-4/12  pb-4 md:py-0">
              <Fade direction="up" triggerOnce="true">
                <img className="w-80 mx-auto mb-8" src={"./assets/phone2.png"} alt="" />
              </Fade>
              <p className="text-lg md:w-80 text-prime font-nav mt-6 mx-auto tracking-tighter leading-none text-center md:text-left">The night is
                dark
                and
                full of terrors. The winds of
                Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field.
                Unbowed,
                Unbent, Unbroken. All men must die.</p>

              <img className="w-52 mx-auto mt-14 hidden md:block" src={"./assets/tokonft.png"} alt="" />

            </div>
            <div className="w-full md:w-4/12 py-4 md:py-0">
              <div className>
                <Fade direction="right" triggerOnce="true">
                  <img className="w-96 mx-auto" src={"./assets/phone3.png"} alt="" />
                </Fade>
                <p className="text-lg text-prime font-nav mt-6 mx-auto tracking-tighter leading-none md:w-80 text-center md:text-left">The night is
                  dark
                  and
                  full of terrors. The winds of
                  Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field.
                  Unbowed,
                  Unbent, Unbroken. All men must die.</p>

              </div>
            </div>
          </div>

          <div className="py-14 md:py-36">
            <img className="absolute w-full" src={backgroundNFT} alt="" />
            <div className="relative">
              <img className="w-96 mx-auto mb-3" src={Feature} alt="" />
              <div className="md:flex md:justify-center px-8 md:px-0 md:space-x-14">
                <div className="w-full md:w-3/12 mt-10">
                  <Fade direction="left" triggerOnce="true">
                    <img className="w-64 md:w-80 mx-auto md:mx-0" src={StakingImg} alt="" />
                  </Fade>
                  <p className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none md:pl-14 text-center md:text-left">The night is
                    dark and
                    full
                    of
                    terrors. The winds of Winter. What is dead may never die.
                  </p>
                </div>
                <div className="w-full md:w-4/12 mt-10 md:mt-0">
                  <Fade direction="down" triggerOnce="true">
                    <img className="w-full md:w-full mx-auto" src={MetaverseImg} alt="" />
                  </Fade>
                  <p
                    className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center mx-auto">
                    The night is dark and
                    full
                    of
                    terrors. The winds of Winter. What is dead may never die.
                  </p>
                </div>

                <div className="w-full md:w-3/12 mt-10">
                  <Fade direction="right" triggerOnce="true">
                    <img className="w-64 mx-auto md:w-80" src={LaunchpadImg} alt="" />
                  </Fade>
                  <p className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center md:text-right pr-0 md:pr-8">The
                    night is dark and
                    full
                    of
                    terrors. The winds of Winter. What is dead may never die.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:py-36">
            <img className="absolute w-full" src={backgroundNFT2} alt="" />
            <div className="relative">
              <img className="w-96 mx-auto" src={OurTeam} alt="" />
              <div className="hidden md:block">
                <div className="flex justify-center justify-items-center md:space-x-14">
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileAgung} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">AGUNG PRATOMO</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief Excecutive Officer 
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileResha} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">RESHA JUHARI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief Marketing Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileFebi} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">FEBY DWI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Head of Creative 
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileRosidi} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">ROSIDI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Head Blockchain Engineer
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-14 space-x-14">
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileVictor} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">VICTOR WICK</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief Technology Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileDirga} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">DIRGA FLO</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief Marketing Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">IBADARUDINNI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1 px-4">Chief Operating Officer
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-14 mt-10">
                      <button className="bg-purple rounded-full w-3/12 font-nav text-prime text-2xl py-2 px-3">
                          Download Art Paper
                      </button>
                      <button className="bg-purple rounded-full w-3/12 font-nav text-prime text-2xl py-2 px-3">
                          Download Legalitas
                      </button>
                      
                  </div>
              </div>

              <div className="block md:hidden px-4">
                <div className="">
                  <div className="flex space-x-8 py-2">
                  <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileAgung} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">AGUNG</p>
                    <p className="text-prime font-nav text-center text-sm bg-dark rounded-full py-1 w-24 mx-auto">CEO
                    </p>
                  </div>
                  <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileResha} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">RESHA JUHARI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CMO
                    </p>
                  </div>
                  </div>
                 <div className="flex space-x-8 py-2">
                 <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileFebi} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">FEBBY</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CCO 
                    </p>
                  </div>
                  <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileVictor} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">VICTOR</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CTO
                    </p>
                 </div>
                  </div>
                  <div className="flex space-x-8 py-2">
                 <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileDirga} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">DIRGA FLO</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CMO 
                    </p>
                  </div>
                  <div className="w-6/12">
                    <img className="w-32 mx-auto" src={ProfileRosidi} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">ROSIDI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CBO
                    </p>
                 </div>
                  </div>
                  {/* <div className="w-4/12">
                    <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">IBADARUDINNI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 px-4">Chief Operating Officer
                    </p>
                  </div> */}
                </div>
                <div className="flex justify-between py-2">
                  <div className="w-6/12 mx-auto">
                    <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">IBADARUDINNI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 px-4 w-24 mx-auto">COO
                    </p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </ParallaxProvider>
    </div>
  )
}
