import React, {useEffect} from "react";
import { Link, useLocation } from 'react-router-dom'
import { BnbCoin, DummyNft, LogoHeader, MetamaskLogo, SafepalLogo, TknCoin, TknWalletLogo, TrustwalletLogo, WalletconnectLogo } from "../assets";
// import { Modal } from ".";


export default function Header() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo({top:0})
  }, [pathname])
  console.log(pathname === "/app")


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showModalProfile, setShowModalProfile] = React.useState(false)

  // function toggleModal() {
  //   setIsOpen(!isOpen);
  // }


  return (
    <div className="fixed font-nav z-50">
      <nav className="fixed bg-transparent py-4 w-full flex px-6 md:px-14 flex-wrap z-50 items-center bg-dark">
        <div className="flex justify-between w-4/12 items-center">
          <Link to="" className="lg:mr-4 inline-flex items-center">
          <img className="w-14" src={LogoHeader} alt="" />
          </Link>
          <input type="text"
            className="border border-prime rounded-full px-5 py-2 w-full text-prime outline-none bg-transparent hidden md:block"
            placeholder="Search NFT Marketplace" />
        </div>
        <div className="justify-end w-8/12 text-xl text-prime items-center space-x-14 hidden md:flex ">
          <Link to="/" className={`${pathname === "/" ? "border-prime" : "border-transparent" } border-b-4 `}>Home</Link>
          <Link to="/app"  className={`${pathname === "/app" ? "border-prime" : "border-transparent" } border-b-4 `}>Trade NFT's</Link>
          <Link to="/staking" className={`${pathname === "/staking" ? "border-prime" : "border-transparent" } border-b-4 `}>NFT Staking</Link>
          <div className="block md:hidden">
            <svg className="w-6 text-prime" viewBox="0 0 511 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M26.723 0.630075C16.502 2.77308 7.444 10.2451 2.635 20.5021C0.417 25.2331 0.00699999 27.4671 0.047 34.6221C0.086 41.7871 0.525 44.0161 2.841 48.8121C9.008 61.5851 23.143 69.6621 36.86 68.2531C66.173 65.2431 78.409 30.0551 57.309 9.44807C49.765 2.08107 37.15 -1.55592 26.723 0.630075ZM135.5 8.15307C125.393 11.3041 118.5 21.0531 118.5 32.1961C118.5 35.5961 119.185 40.0181 120.023 42.0221C122.311 47.5001 127.919 53.1261 133.469 55.5131L138.421 57.6441L316.211 57.3831C484.033 57.1371 494.181 57.0231 497.234 55.3551C506.241 50.4321 511.017 42.3511 510.964 32.1221C510.912 21.9741 506.191 14.2531 497 9.28407L493 7.12207L316.5 6.93608C167.464 6.77908 139.3 6.96807 135.5 8.15307ZM24.5 159.557C15.163 162.408 6.777 169.667 2.648 178.474C0.435 183.195 0 185.517 0 192.622C0 199.727 0.435 202.049 2.648 206.77C8.225 218.665 18.723 225.682 32 226.39C42.357 226.941 49.305 224.481 56.841 217.593C64.345 210.735 67.763 202.92 67.763 192.622C67.763 186.389 67.243 183.799 64.976 178.749C61.474 170.945 53.744 163.605 45.959 160.693C40.271 158.565 29.601 158 24.5 159.557ZM138.826 167.657C126.452 170.132 118.544 179.866 118.544 192.622C118.544 203.24 123.841 211.53 133.5 216.027L138 218.122H315C480.035 218.122 492.245 218.006 495.629 216.409C500.977 213.885 505.191 210.003 508.27 204.767C510.588 200.823 511 198.99 511 192.622C511 186.254 510.588 184.421 508.27 180.477C505.191 175.241 500.977 171.359 495.629 168.835C492.25 167.24 479.988 167.112 317.5 166.972C221.525 166.889 141.122 167.198 138.826 167.657ZM22.812 318.631C14.811 321.25 6.666 328.51 2.841 336.432C0.524 341.231 0.086 343.456 0.047 350.64C0.00499999 358.284 0.334 359.837 3.26 365.782C10.563 380.625 26.195 388.11 41.659 384.168C57.656 380.09 67.695 367.368 67.735 351.122C67.792 327.629 45.213 311.299 22.812 318.631ZM132.993 329.967C123.652 334.328 118.5 342.534 118.5 353.048C118.5 360.612 121.897 368.147 127.34 372.658C135.005 379.01 123.745 378.67 317.044 378.383L493 378.122L497 375.96C506.191 370.991 510.912 363.27 510.964 353.122C511.017 342.893 506.241 334.812 497.234 329.889C494.181 328.221 484.04 328.108 316 327.876L138 327.63L132.993 329.967Z"
                fill="#2FEA91" />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute bg-prime w-16 h-20 -top-9 rounded-b-full align-center -left-6">
              <div className="bg-white w-12 h-12 rounded-full mx-auto mt-4">
              </div>
            </div>
          </div>
          <div className="bg-softDark bg-opacity-60 rounded-full cursor-pointer">
            <p onClick={()=> setShowModal(true)} className="text-lg text-prime px-4 py-1">Connect</p>
          </div>
        </div>
        <div className="flex justify-end w-8/12 text-xl text-prime items-center space-x-8 md:hidden">
          <div className="">
            <svg className="w-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M192.914 1.19874C46.4088 16.1707 -42.4102 171.134 20.4868 302.034C78.8548 423.507 237.351 462.16 344.866 381.141C351.647 376.032 341.285 367.298 418.338 443.065C460.03 484.061 486.346 509.21 488.682 510.289C501.262 516.099 515.032 504.371 511.073 491.219C509.942 487.463 500.305 477.675 409.154 387.7L374.894 353.882L380.747 347.099C504.214 204 383.511 -18.2783 192.914 1.19874ZM240.786 34.6267C388.537 56.3467 449.602 232.955 345.432 337.277C246.228 436.627 75.1408 391.814 39.0538 257.026C6.26284 134.546 113.825 15.9637 240.786 34.6267Z"
                fill="#2FEA91" />
            </svg>
          </div>
          <div className="sfsfsfs" onClick={()=> setNavbarOpen(!navbarOpen)}>
            <svg className="w-6 text-prime" viewBox="0 0 511 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M26.723 0.630075C16.502 2.77308 7.444 10.2451 2.635 20.5021C0.417 25.2331 0.00699999 27.4671 0.047 34.6221C0.086 41.7871 0.525 44.0161 2.841 48.8121C9.008 61.5851 23.143 69.6621 36.86 68.2531C66.173 65.2431 78.409 30.0551 57.309 9.44807C49.765 2.08107 37.15 -1.55592 26.723 0.630075ZM135.5 8.15307C125.393 11.3041 118.5 21.0531 118.5 32.1961C118.5 35.5961 119.185 40.0181 120.023 42.0221C122.311 47.5001 127.919 53.1261 133.469 55.5131L138.421 57.6441L316.211 57.3831C484.033 57.1371 494.181 57.0231 497.234 55.3551C506.241 50.4321 511.017 42.3511 510.964 32.1221C510.912 21.9741 506.191 14.2531 497 9.28407L493 7.12207L316.5 6.93608C167.464 6.77908 139.3 6.96807 135.5 8.15307ZM24.5 159.557C15.163 162.408 6.777 169.667 2.648 178.474C0.435 183.195 0 185.517 0 192.622C0 199.727 0.435 202.049 2.648 206.77C8.225 218.665 18.723 225.682 32 226.39C42.357 226.941 49.305 224.481 56.841 217.593C64.345 210.735 67.763 202.92 67.763 192.622C67.763 186.389 67.243 183.799 64.976 178.749C61.474 170.945 53.744 163.605 45.959 160.693C40.271 158.565 29.601 158 24.5 159.557ZM138.826 167.657C126.452 170.132 118.544 179.866 118.544 192.622C118.544 203.24 123.841 211.53 133.5 216.027L138 218.122H315C480.035 218.122 492.245 218.006 495.629 216.409C500.977 213.885 505.191 210.003 508.27 204.767C510.588 200.823 511 198.99 511 192.622C511 186.254 510.588 184.421 508.27 180.477C505.191 175.241 500.977 171.359 495.629 168.835C492.25 167.24 479.988 167.112 317.5 166.972C221.525 166.889 141.122 167.198 138.826 167.657ZM22.812 318.631C14.811 321.25 6.666 328.51 2.841 336.432C0.524 341.231 0.086 343.456 0.047 350.64C0.00499999 358.284 0.334 359.837 3.26 365.782C10.563 380.625 26.195 388.11 41.659 384.168C57.656 380.09 67.695 367.368 67.735 351.122C67.792 327.629 45.213 311.299 22.812 318.631ZM132.993 329.967C123.652 334.328 118.5 342.534 118.5 353.048C118.5 360.612 121.897 368.147 127.34 372.658C135.005 379.01 123.745 378.67 317.044 378.383L493 378.122L497 375.96C506.191 370.991 510.912 363.27 510.964 353.122C511.017 342.893 506.241 334.812 497.234 329.889C494.181 328.221 484.04 328.108 316 327.876L138 327.63L132.993 329.967Z"
                fill="#2FEA91" />
            </svg>
          </div>
        </div>
        <div className={"w-full " + ( navbarOpen ? " block" : "hidden" )} onClick={()=> setNavbarOpen(!navbarOpen)}>
          <div className=" ">
            <div className="bg-dark h-48">
              <ul className="font-nav text-prime text-xl text-center space-y-2">
                <Link to="/">
                <li className="hover:text-purple py-2 ">Home</li>
                </Link>
                <Link to="/app">
                <li className="hover:text-purple py-2">Trade NFT's</li>
                </Link>
                <Link to="/staking">
                <li className="hover:text-purple py-2">NFT Staking</li>
                </Link>
                <li onClick={()=> setShowModal(true)} className="text-white bg-purple w-min mx-auto px-3 py-1
                  rounded-full">Connect</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-10/12 md:w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-softDark bg-opacity-90 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-between p-5 rounded-t">
                <h3 className="text-lg md:text-2xl text-prime font-nav">
                  Connect to a wallet
                </h3>
                <button
                  className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={()=> setShowModal(false)}
                  >
                  <span className=" text-pr h-6 w-6 text-2xl  text-prime ">
                    ??
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6  pt-0 flex-auto space-y-2">
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md:py-3 rounded-full border border-transparent hover:border-prime">
                  <img className="w-8 md:w-14" src={MetamaskLogo} alt="" />
                  <p className="text-prime text-lg text-center w-full">Metamask</p>
                </div>
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md:py-3 rounded-full  border border-transparent hover:border-prime">
                  <img className="w-8 md:w-14" src={TrustwalletLogo} alt="" />
                  <p className="text-prime text-lg text-center w-full">Trust Wallet</p>
                </div>
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md;py-3 rounded-full  border border-transparent hover:border-prime">
                  <img className="w-8 md:w-14" src={WalletconnectLogo} alt="" />
                  <p className="text-prime text-lg text-center w-full">Wallet Connect</p>
                </div>
                <div className="flex bg-greygrad items-center px-3 py-1 md:py-3 rounded-full">
                  <img className="w-8 md:w-14" src={TknWalletLogo} alt="" />
                  <p className="text-gray-500 text-lg text-center w-full">TKN Wallet (Coming Soon)</p>
                </div>
                <div className="flex bg-greygrad items-center px-3 py-1 md:py-3 rounded-full">
                  <img className="w-8 md:w-14" src={SafepalLogo} alt="" />
                  <p className="text-gray-500 text-lg text-center w-full px-4">SafePal Wallet (Coming Soon)</p>
                </div>

              </div>
              {/*footer*/}
              {/* <div
                className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={()=> setShowModal(false)}
                  >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button" onClick={()=> setShowModal(false)}
                  >
                  Save Changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      ) : null}

      {showModalProfile ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-10/12 md:w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div
              className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-softDark bg-opacity-90 outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center justify-between p-5 rounded-t">
                <h3 className="text-lg md:text-2xl text-prime font-nav">
                  Your Wallet
                </h3>
                <button
                  className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={()=> setShowModalProfile(false)}
                  >
                  <span className=" text-pr h-6 w-6 text-2xl  text-prime ">
                    ??
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6  pt-0 flex-auto space-y-2">
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md:py-3 rounded-full border border-transparent hover:border-prime space-x-3">
                  <img className="w-8 md:w-14 rounded-full" src={DummyNft} alt="" />
                  <div className="space-y-0">
                  <p className="text-prime text-xl ">Creator</p>
                  <p className="text-prime text-lg ">0snfu3i4..nkwje9834</p>
                  </div>
                  <p className="text-prime">Copy</p>
                </div>
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md:py-3 rounded-full  border border-transparent hover:border-prime space-x-3">
                  <img className="w-8 md:w-14" src={BnbCoin} alt="" />
                  <div className="space-y-0">
                  <p className="text-prime text-lg ">0.00000 BNB</p>
                  <p className="text-prime text-lg ">$0.00</p>
                  </div>
                </div>
                <div
                  className="flex bg-greygrad cursor-pointer items-center px-3 py-1 md:py-3 rounded-full  border border-transparent hover:border-prime space-x-3">
                  <img className="w-8 md:w-14" src={TknCoin} alt="" />
                  <div className="space-y-0">
                  <p className="text-prime text-lg ">0.0000 TKN</p>
                  <p className="text-prime text-lg ">$0.00</p>
                  </div>
                </div>
                <div
                  className="space-y-3 w-full pt-6">
                  <p className="text-white bg-purple rounded-full text-center py-1 w-48 mx-auto text-lg ">My NFT's</p>
                  <p className="text-white bg-purple rounded-full text-center py-1 w-48 mx-auto text-lg ">Edit Profile</p>
                  <p className="text-white bg-purple rounded-full text-center py-1 w-48 mx-auto text-lg ">Logout</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      ) : null}
    </div>

    
  )
}
