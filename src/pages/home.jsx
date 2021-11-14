import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { OurTeam, Feature, StakingImg, LaunchpadImg, MetaverseImg, GalaxyImg, GalaxyImg2, backgroundNFT, backgroundNFT2, ProfileVictor, ProfileUdin, ProfileResha, ProfileFebi, ProfileAgung, ProfileDirga, ProfileRosidi, PhoneIcon1, TknIconNew, LogoCoinmarketcap, LogoCoinGecko} from '../assets'
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
              <img className="w-80 mx-auto animate-heromove-2 ml-4 md:mx-auto mb-6 md:mb-48" src={"./assets/hero-2.png"}
                alt="" />
            </Parallax>
            <Parallax y={[-60, 50]} className="w-4/12">
              <img className="w-96 mt-14 animate-heromove-3 mb-4 md:mb-14" src={"./assets/hero-3.png"} alt="" />
            </Parallax>
          </div>
          <Parallax className="absolute pt-56 md:pt-80 w-full " y={[20, 0]} tag="figure">
            <img className="w-full h-auto pt-48 md:pt-28 mb-52" src={"./assets/front-stone.png"} alt="" />
          </Parallax>
          <div className="relative md:flex w-full pt-36 md:pt-24 pb-28  md:items-center px-8 md:px-14">
            <div className="w-full md:w-4/12">
              <div className>
                <p
                  className="text-prime text-4xl md:text-5xl font-bold mb-60 md:mb-96 md:pl-10 text-center md:text-left">
                  The most complete NFT marketplace
                </p>
                {/* <img className="w-72 mt-32 mx-auto animate-bounce-1" src={"./assets/hero-1.png"} alt="" /> */}
              </div>
            </div>
            <div className="w-full md:w-4/12 justify items-center ">
              {/* <img className="w-80 mt-14 mx-auto animate-bounce-2" src={"./assets/hero-2.png"} alt="" /> */}
              <img className="w-48 md:w-72 mx-auto mt md:mt-96" src={"./assets/tokonft.png"} alt="" />
              <div
                className="w-56 md:w-72 border border-prime rounded-full mt-8 md:mt-14 mx-auto hover:text-white hover:bg-prime hover:rounded-full">
                <Link to="/app">
                <p
                  className="text-prime text-lg md:text-2xl px-2 md:px-6 py-1 md:py-2 text-center hover:text-white hover:rounded-full cursor-pointer">
                  Launch Marketplace</p>
                </Link>
              </div>
              <div
                className="w-56 bg-purple rounded-full flex items-center px-4 py-1 justify-center mx-auto mt-4 md:mt-8">
                <p className="font-bold text-lg text-prime">Buy</p>
                <img className="w-8 md:w-10 h-full ml-2 mr-2" src={TknIconNew} alt="" />
                <p className="font-bold text-lg text-prime">$TKN</p>
              </div>
              <div className="space-x-4 flex items-center px-4 py-1 justify-center mx-auto mt-4 md:mt-8">
                <div className="w-6/12">
                  <div
                    className="bg-purple rounded-full flex items-center px-4 py-2 justify-center mx-auto">
                    <img className="w-6 h-full mr-1" src={LogoCoinmarketcap} alt="" />
                    <p className="font-bold text-base text-prime font-nav">CoinMarketCap</p>
                  </div>
                </div>
                <div className="w-6/12">
                  <div
                    className="bg-purple rounded-full flex items-center px-4 py-2 justify-center mx-auto">
                    <img className="w-6 h-full mr-5" src={LogoCoinGecko} alt="" />
                    <p className="font-bold text-base text-prime font-nav">CoinGecko</p>
                  </div>
                </div>
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
                <p className="text-prime text-2xl font-bold text-center md:text-left">- Create, buy, sell and earn with
                  NFTs</p>
                <p className="text-prime text-2xl font-bold text-center md:text-left">- Easy and cheaper fees 2,5%</p>
                <p className="text-prime text-2xl font-bold text-center md:text-left">- NFT Staking earn $TKN</p>
                <p className="text-prime text-2xl font-bold text-center md:text-left">- Metaverse NFT Gallery</p>
                <Fade direction="left" triggerOnce="true">
                  <img className="w-56 mx-auto mt-5" src={PhoneIcon1} alt="" />

                </Fade>
                <p
                  className="text-2xl font-bold md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center md:text-left  py-4 md:py-0">
                  CREATE</p>
                <p
                  className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center md:text-left  py-4 md:py-0">
                  Create NFT Easier and cheaper. TokoNFT provides a NFT creation platform as well as an NFT marketplace
                  for creators with very affordable fees and a monthly incentive program through a staking pool reward
                  that can benefit the ecosystem of NFT creators and collectors.</p>
              </div>
            </div>
            <div className="w-full md:w-4/12  pb-4 md:py-0">
              <Fade direction="up" triggerOnce="true">
                <img className="w-80 mx-auto mb-8" src={"./assets/phone2.png"} alt="" />
              </Fade>
              <p
                className="text-2xl md:w-80 text-prime font-nav mt-6 mx-auto tracking-tighter leading-none text-center md:text-left">
                VERIFIED ACCOUNT</p>
              <p
                className="text-lg md:w-80 text-prime font-nav mt-6 mx-auto tracking-tighter leading-none text-center md:text-left">
                Get a verified account from TokoNFT to the creator with the most high sales volume every month. </p>

              <img className="w-52 mx-auto mt-14 hidden md:block" src={"./assets/tokonft.png"} alt="" />

            </div>
            <div className="w-full md:w-4/12 py-4 md:py-0">
              <div className>
                <Fade direction="right" triggerOnce="true">
                  <img className="w-96 mx-auto" src={"./assets/phone3.png"} alt="" />
                </Fade>
                <p
                  className="text-2xl md:w-80 text-prime font-nav mt-6 mx-auto tracking-tighter leading-none text-center md:text-left">
                  $TKN Token</p>
                <p
                  className="text-lg text-prime font-nav mt-6 mx-auto tracking-tighter leading-none md:w-80 text-center md:text-left">
                  TokoNFT presents an Utility token called $TKN. $TKN can be used in the TokoNFT ecosystem to support
                  various features on the marketplace.
                </p>

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
                  <p
                    className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none md:pl-14 text-center md:text-left">
                    Every month’s, TokoNFT provides Staking Pool for best-selling art works to increase the volume and
                    to make positive impact for creators who make sales in TokoNFT. The best-selling art works will
                    automatically accumulate on the leaderboard within a month. We also provide earnings for buyers of
                    artwork in TokoNFT.
                  </p>
                </div>
                <div className="w-full md:w-4/12 mt-10 md:mt-0">
                  <Fade direction="down" triggerOnce="true">
                    <img className="w-full md:w-full mx-auto" src={MetaverseImg} alt="" />
                  </Fade>
                  <p
                    className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center mx-auto">
                    We provide features to Enjoying the artwork and do your own exhibition like being in the Museum
                    using Virtual Reality (VR) technology and will be launched at TokoNFT website. Visitors can add
                    works and see the artworks that are displayed virtually with limited space.
                  </p>
                </div>

                <div className="w-full md:w-3/12 mt-10">
                  <Fade direction="right" triggerOnce="true">
                    <img className="w-64 mx-auto md:w-80" src={LaunchpadImg} alt="" />
                  </Fade>
                  <p
                    className="text-lg md:w-80 text-prime font-nav mt-6 tracking-tighter leading-none text-center md:text-right pr-0 md:pr-8">
                    TokoNFT supports the Blockchain ecosystem of various projects and invites the creators from every
                    project to be able to launch their NFT Project through the NFT Launchpad program. TokoNFT provides a
                    custom pool that can be used by affiliated projects to launch NFT for their community and also can
                    be traded in TokoNFT
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
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief
                      Excecutive Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">IBADARUDINNI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1 px-4">Chief
                      Operating Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileVictor} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">VICTOR WICK</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief
                      Technology Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileRosidi} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">ROSIDI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Head
                      Blockchain Engineer
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-14 space-x-14">
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileFebi} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">FEBY DWI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-56 mx-auto py-1">Head of
                      Creative
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileResha} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">RESHA JUHARI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief
                      Marketing Officer
                    </p>
                  </div>
                  <div className="w-6/12 md:w-2/12">
                    <img className="w-32 mx-auto" src={ProfileDirga} alt="" />
                    <p className="text-prime text-2xl font-nav text-center pt-4">DIRGA FLO</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full w-64 mx-auto py-1">Chief
                      Marketing Officer
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-14 mt-10">
                  <a href="./assets/artpaper-english.pdf" download
                    className="bg-purple rounded-full w-3/12 font-nav text-prime text-2xl py-2 px-3 text-center">
                    Download Art Paper
                  </a>
                  <button className="bg-purple rounded-full w-3/12 font-nav text-prime text-2xl py-2 px-3">
                    Legal Docs
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
                      <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                      <p className="text-prime text-xl font-nav text-center pt-4">IBADARUDINNI</p>
                      <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 px-4 w-24 mx-auto">COO
                      </p>
                    </div>

                  </div>
                  <div className="flex space-x-8 py-2">
                    <div className="w-6/12">
                      <img className="w-32 mx-auto" src={ProfileVictor} alt="" />
                      <p className="text-prime text-xl font-nav text-center pt-4">VICTOR</p>
                      <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CTO
                      </p>
                    </div>
                    <div className="w-6/12">
                      <img className="w-32 mx-auto" src={ProfileRosidi} alt="" />
                      <p className="text-prime text-xl font-nav text-center pt-4">ROSIDI</p>
                      <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CBO
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
                      <img className="w-32 mx-auto" src={ProfileResha} alt="" />
                      <p className="text-prime text-xl font-nav text-center pt-4">RESHA JUHARI</p>
                      <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CMO
                      </p>
                    </div>
                  </div>
                  {/* <div className="w-4/12">
                    <img className="w-32 mx-auto" src={ProfileUdin} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">IBADARUDINNI</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 px-4">Chief Operating
                      Officer
                    </p>
                  </div> */}
                </div>
                <div className="flex justify-between py-2">

                  <div className="w-6/12 mx-auto">
                    <img className="w-32 mx-auto" src={ProfileDirga} alt="" />
                    <p className="text-prime text-xl font-nav text-center pt-4">DIRGA FLO</p>
                    <p className="text-prime font-nav text-center  bg-dark rounded-full py-1 w-24 mx-auto">CMO
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-10 gap-y-4">
                  <a href="./assets/artpaper-english.pdf" download
                    className="bg-purple rounded-full w-full font-nav text-prime text-2xl py-2 px-3 text-center">
                    Download Art Paper
                  </a>
                  <button className="bg-purple rounded-full w-full font-nav text-prime text-2xl py-2 px-3">
                    Legal Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}
