import Image from "next/image";

type PopUpProps = {
  closePopUp: () => void;
}

export default function PopUp({ closePopUp }: PopUpProps) {
  //ALSO WE SHUD HAVE A MODAL THAT POPS UP AFTER U ORDER SAYING 'TYSM' sure why not lol
  return (
    <>
      <div className="">
        {/* Overlay */}
        <div className="opacity-30">
          <div onClick={closePopUp} className="animate-fade-in fixed bg-[#FD7676] h-screen w-screen z-0">
          </div>
        </div>

        {/* Modal */}
        <div className="animate__slide-in-right fixed grid place-items-center min-h-screen w-screen">
          <div className="bg-[#FFCACA] rounded-lg z-10 font-Inter flex flex-row justify-center w-[70%]">
            {/* left */}
            <div>
              <div className="w-[15rem] md:w-[20rem] lg:w-[24rem]">
                <Image
                  src="/flyingSalad.png"
                  width={459}
                  height={530}
                  layout='responsive'
                />
              </div>
            </div>
            {/* right */}
            <div className="w-[60%] flex flex-col justify-center pr-10">
              {/* Close Button */}
              <button className="flex flex-row justify-end w-full text-white" onClick={closePopUp}>
                <div className="h-[3.5rem] w-[3.5rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>

              {/* Save 15 */}
              <div className="flex flex-row justify-center">
                <div className="font-semibold text-7xl">
                  <span className="text-[#FD7676]">SAVE </span> <span className="text-white">15%</span>
                </div>
              </div>
              {/* On your next delight */}
              <div className="text-[#FD7676] font-light text-center text-2xl mt-4">
                on your next delight.
              </div>

              {/* Your Email */}
              <div className="w-full flex flex-row justify-center mt-4">
                <input className="focus:outline-none w-[80%] border-black border-2 rounded-md bg-transparent px-2 py-3 font-medium text-2xl text-[#f95e5e] placeholder:text-[#F0F0F0]" placeholder="Your email" />
              </div>
              {/* Yes 15% discount */}
              <div className="w-full flex flex-row justify-center mt-6">
                <button className="w-[80%] text-[#FD7676] font-semibold text-2xl py-3 rounded-3xl  bg-white uppercase text-center ">
                  15% discount, yes please!
                </button>
              </div>
              <div className="w-full flex flex-row justify-center mt-2">
                <div className="text-[#FF4343] text-base font-normal">
                  No spam. We Promise
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}