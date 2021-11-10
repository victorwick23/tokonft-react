import React from 'react'
import { LogoGallery } from '../assets'

export default function AddNFt() {
    

    return (
        <div className="py-14 md:py-24 bg-bg-detail-nft w-full bg-cover px-8 md:px-14">
            <div className="pt-14 md:flex  items-center">
                <div
                    className="w-10/12 md:w-4/12 bg-softDark md:bg-greygrad rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl mx-auto relative ">
                    <div className="border border-dashed border-prime rounded-lg md:h-96 px-8">
                        <img className="w-14 mx-auto mt-14 md:mt-32" src={LogoGallery} alt="" />
                        <p className="text-center font-nav text-prime mt-4">Click to upload your image (Jpeg, jpg, png)
                        </p>
                    </div>

                </div>
                <div className="w-full md:w-8/12 md:py-14 -mt-14 md:mt-0">
                    <div
                        className="md:flex w-full bg-greygrad rounded-lg md:rounded-r-3xl md:-ml-5 px-4 md:px-8 md:pl-24 md:pr-4 py-8 z-0">
                        <div className="w-full md:w-6/12 px-4 md:px-8">
                            <div className="w-full flex pt-10 md:pt-0 py-4">
                                <div className="w-full">
                                    <p className="font-nav text-prime">NFT Name</p>
                                    <input
                                        className="border border-prime rounded-md px-5 py-2 w-full text-prime outline-none bg-transparent block"
                                        type="text" />
                                </div>
                            </div>
                            <div className="w-full flex pt-4 md:pt-0 py-4">
                                <div className="w-full">
                                    <p className="font-nav text-prime">Description</p>
                                    <input
                                        className="border border-prime rounded-md px-5 py-2 w-full text-prime outline-none bg-transparent block h-24"
                                        type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-4 md:px-8">
                            <div className="w-full pt-4 md:pt-0 py-4">
                                <div className="w-full pt-4 md:pt-0 py-4 md:py-4">
                                    <p className="font-nav text-prime">NFT Price</p>
                                    <input
                                        className="border border-prime rounded-md px-5 py-2 w-full text-prime outline-none bg-transparent block"
                                        type="text" />
                                </div>
                                <div className="w-full">
                                    <p className="font-nav text-prime">Number of Copies</p>
                                    <input
                                        className="border border-prime rounded-md px-5 py-2 w-full text-prime outline-none bg-transparent block"
                                        type="text" />
                                </div>
                                <div className="w-full pt-2">
                                    <div className="flex justify-between">
                                        <p className="font-nav text-purple ">Service fee</p>
                                        <p className="font-nav text-prime">2.5%</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-nav text-purple">You receive</p>
                                        <p className="font-nav text-prime">0.02342 BNB</p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-center mt-12 w-full">
                                <button
                                    className="text-prime bg-purple rounded-full md:text-xl px-8 py-1">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
