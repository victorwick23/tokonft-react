import React from 'react'
import {  StakingNftLogo, backgroundNFT2, BannerStaking, BannerStaking2} from '../assets'

export default function StakingPool() {
    return (
        <div className="pt-36 md:pt-32 w-ful font-nav pb-24 bg-softDark px-4">
            <img className="absolute hidden md:block" src={backgroundNFT2} alt="" />
            <div className="relative w-full md:w-7/12 md:mx-auto bg-mediumdark md:bg-transparent rounded-lg">
                <img className="absolute w-full mt-1 hidden md:block" src={BannerStaking} alt="" />
                <div className="relative ">
                    <div className="w-full md:w-7/12 mx-auto pt-8 md:pt-24 font-nav bg-cover bg-no-repeat pb-8">
                        <div className="">
                            <div className="w-full">
                                <div
                                    className="w-20 md:w-24 bg-mediumdark rounded-full p-2  absolute left-0 right-0 mx-auto -mt-14 md:-mt-20">
                                    <img className="  rounded-full border-4 border-white " src={"./assets/image.jpg"}
                                        alt="" />
                                </div>

                            </div>
                            <p
                                className="text-lg md:text-3xl text-prime text-center pt-6 leading-tight tracking-tighter">
                                VICTORWICK's NFT POOL</p>
                            <div className="flex justify-center">
                                <p className="text-prime text-center text-sm md:text-lg">Deposit VICTORWICK's NFT and
                                    Earn TKN</p>
                            </div>
                            <div className="w-full justify-center pt-8">
                                <img className="w-14 md:w-20 mx-auto" src={StakingNftLogo} alt="" />
                                <p className="text-prime text-sm md:text-xl text-center pt-4">54.246 TKN Earned</p>
                                <button
                                    className="block md:hidden text-prime rounded-full bg-dark px-4 py-1 text-lg mx-auto mt-3">
                                    HARVEST
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="hidden md:flex justify-end -mt-10 mr-8">
                        <button className="text-prime rounded-full bg-dark px-4 py-1 text-lg">
                            HARVEST
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-14 w-9/12 md:w-5/12 mx-auto p-3 font-nav bg-mediumdark md:bg-transparent rounded-lg">
                <img className="absolute w-5/12 hidden md:block" src={BannerStaking2} alt="" />
                <div className="relative px-1 py-8">
                    <div className="w-full">
                        <img className="mx-auto w-20 rounded-full border-4 border-white" src={"./assets/image.jpg"}
                            alt="" />
                    </div>
                    <div className="justify-center mt-4">
                        <p className=" font-nav text-lg text-prime text-center">VICTORWICK NFT Staked</p>
                        <p className=" font-nav text-lg text-prime text-center">VICTORWICK NFT Owned</p>
                    </div>
                    <div className="w-full flex justify-items-center pt-8">
                        <button
                            className="bg-purple text-prime mx-auto text-sm md:text-base rounded-full px-5 py-1 shadow-xl">APPROVE
                            VICTORWICK's NFT</button>
                    </div>
                </div>
            </div>
            <div className="relative mt-14 px-8">
                <p className="text-prime font-nav text-xl mb-8">Inventory</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 md:gap-x-8 gap-y-4">
                    <div className="bg-greygrad p-4 rounded-2xl">
                        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
                    </div>
                    <div className="bg-greygrad p-4 rounded-2xl">
                        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
                    </div>
                    <div className="bg-greygrad p-4 rounded-2xl">
                        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
                    </div>
                    <div className="bg-greygrad p-4 rounded-2xl">
                        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
