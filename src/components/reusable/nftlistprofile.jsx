import React from 'react'

export default function NftListProfile() {
    return (
        <div className="bg-greygrad p-4 rounded-2xl">
        <img className="w-full rounded-2xl" src={"./assets/image.jpg"} alt="" />
        <div className="pt-3">
            <p className="text-prime font-nav tracking-tighter leading-tight text-2xl">UNTITLED</p>
            <div className="flex justify-between items-center pt-4">
              <p className="text-prime font-nav tracking-tighter leading-tight text-2xl">0.4 BNB</p>
              <p className="text-purple font-nav">icon icon icon</p>
            </div>
        </div>
      </div>
    )
}
