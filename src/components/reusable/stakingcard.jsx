import React from 'react'

export default function StakingCard() {
    return (
        <div className="bg-softDark w-full p-3 rounded-lg font-nav">
            <div className="bg-gradient-to-b from-greygrad to-softDark rounded-lg px-1 py-8">
                <div className="relative w-full">
                    <img className="absolute left-0 right-0 mx-auto w-24 rounded-full border-4 border-white -mt-20"
                        src={"./assets/image.jpg"} alt="" />
                </div>
                <p className="text-2xl text-prime text-center pt-16">VICTORWICK's NFT</p>
                <div className="pt-8">
                    <div className="flex justify-between py-2">
                        <p className=" font-nav text-xl text-prime">Deposit</p>
                        <p className="font-nav text-base py-1 text-prime rounded-full bg-dark px-2">VictorWick's NFT</p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className=" font-nav text-xl text-prime">Earn</p>
                        <p className="font-nav text-base py-1 text-prime rounded-full bg-dark px-2">TKN Token</p>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className=" font-nav text-xl text-prime">Amount</p>
                        <p className="font-nav text-base py-1 text-prime rounded-full bg-dark px-2">20.000.000 TKN</p>
                    </div>
                </div>
                <div className="w-full flex justify-items-center pt-14">
                    <button className="bg-purple text-prime mx-auto text-2xl rounded-full px-5 py-1 shadow-xl">Select NFT</button>
                </div>
            </div>
        </div>
    )
}
