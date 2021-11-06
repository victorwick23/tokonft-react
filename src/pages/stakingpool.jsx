import React from 'react'
import {  StakingNftLogo } from '../assets'

export default function StakingPool() {
    return (
        <div className="pt-14 md:pt-32 w-full md:px-14 bg-dark font-nav pb-24">
            <div className="">
                <div className="">
                    <div className="w-9/12 mx-auto p-3 rounded-lg font-nav bg-bg-detail-nft bg-cover bg-no-repeat">
                        <div className="bg-gradient-to-b  rounded-lg px-1 py-8">
                            <div className="relative w-full">
                                <img className="absolute left-0 right-0 mx-auto w-24 rounded-full border-4 border-white -mt-20"
                                    src={"./assets/image.jpg"} alt="" />
                            </div>
                            <p className="text-5xl text-prime text-center pt-16 leading-tight tracking-tighter">
                                VICTORWICK's NFT POOL</p>
                            <div className="flex justify-center">
                                <p className="text-prime text-center text-xl">Deposit VICTORWICK's NFT and Earn TKN</p>
                            </div>
                            <div className="w-full justify-center pt-14">
                                <img className="w-24 mx-auto" src={StakingNftLogo} alt="" />
                                <p className="text-prime text-xl text-center pt-4">54.246 TKN Earned</p>
                                <button className="text-prime rounded-full bg-dark px-4 py-1 text-lg">
                                    HARVEST
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 w-5/12 mx-auto p-3 rounded-lg font-nav bg-softDark">
                <div className="bg-gradient-to-b from-greygrad to-softDark rounded-lg px-1 py-8">
                    <div className="w-full">
                        <img className="mx-auto w-24 rounded-full border-4 border-white"
                            src={"./assets/image.jpg"} alt="" />
                    </div>
                    <div className="justify-center mt-14">
                        <p className=" font-nav text-xl text-prime text-center">VICTORWICK NFT Staked</p>
                        <p className=" font-nav text-xl text-prime text-center">VICTORWICK NFT Owned</p>
                    </div>
                    <div className="w-full flex justify-items-center pt-14">
                        <button
                            className="bg-purple text-prime mx-auto text-2xl rounded-full px-5 py-1 shadow-xl">APPROVE VICTORWICK's NFT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
