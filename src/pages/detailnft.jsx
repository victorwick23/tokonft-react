import React from 'react'

export default function Detailnft() {
    return (
        <div className="py-14 md:py-24 bg-bg-detail-nft w-full bg-cover px-8 md:px-14">
            <div className="pt-14 md:flex  items-center">
                <div className="w-10/12 md:w-4/12 bg-softDark md:bg-greygrad rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl mx-auto relative">
                    <img className="w-full rounded-2xl md:rounded-3xl" src={"./assets/image.jpg"} alt="" />
                </div>
                <div className="w-full md:w-8/12 md:py-14 -mt-14 md:mt-0">
                    <div className="w-full bg-greygrad rounded-lg md:rounded-r-3xl md:-ml-5 px-4 md:px-8 md:pl-24 md:pr-4 py-8 z-0">
                        <div className="md:flex justify-between pt-10 md:pt-0">
                            <div className="">
                                <p className="font-nav text-prime text-2xl md:text-4xl">SLUTTY BITCH</p>
                                <p className="font-nav text-prime text-xl md:text-2xl">#01/15</p>
                            </div>
                            <div className="w-4/12 ">
                                <p className="text-prime text-base md:text-2xl bg-dark px-4 py-1 rounded-full">1.1 BNB</p>
                            </div>
                        </div>
                        <div className="md:justify-end md:ml-24 mt-4 md:mt-0">
                            <p className="text-prime font-nav tracking-tighter leading-tight">The night is dark and full
                                of terrors. The winds of
                                Winter. What is dead may never die. And now his watch is ended. The battle of the
                                redgrass field. Unbowed,
                                Unbent, Unbroken. All men must die.</p>
                               
                        </div>
                        <div className="flex md:hidden mt-4 right-0 justify-center">
                                <button className="text-prime bg-purple rounded-full text-xl md:text-2xl px-8 py-1">BUY</button>
                            </div>
                        <div className="flex w-full space-x-6 mt-4">
                            <div className="flex space-x-2">
                                <p className="font-sm md:font-base text-prime bg-dark px-3 py-1 rounded-full">OWNER</p>
                                <p className="font-sm md:font-base text-greygrad bg-dark px-3 py-1 rounded-full">HISTORY</p>
                                <p className="font-sm md:font-base text-greygrad bg-dark px-3 py-1 rounded-full">INFO</p>
                            </div>
                            <div className="w-full">
                                        <hr className="border w-full border-prime mt-3" />
                                </div>
                                
                        </div>
                        
                        <div className="flex mt-8 justify-between items-center">
                            <div className="flex items-center space-x-3 ">
                                <img className="w-16 rounded-full border-4 border-white" src={"./assets/image.jpg"} alt="" />
                                <div className="">
                                    <p className="text-purple text-lg">Creator</p>
                                    <p className="font-nav text-2xl text-prime tracking-tighter leading-tight">VICTORWICK</p>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <button className="text-prime bg-purple rounded-full text-2xl px-8 py-2">BUY</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <p className="text-prime font-nav text-xl mb-8">MORE BY VICTOR</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-4 md:gap-x-8  ">
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
                    <div className="bg-greygrad p-4 rounded-2xl">
                        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
                    </div>

                </div>
            </div>



        </div>
    )
}
