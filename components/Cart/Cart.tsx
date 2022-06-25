import { CloseButton } from "@mantine/core"

export default function Cart() {

    return (
        <>
            <button className="w-full h-screen fixed z-40 bg-[#DFDFDF] opacity-30">

            </button>
            <div className="w-full h-screen fixed z-50 flex flex-row justify-end">
                <div className="shadow-xl w-[100%] sm:w-[500px] flex flex-col items-stretch opacity-100">
                    <div className="bg-[#FDACAC] flex flex-row pl-6 items-center justify-between">

                        <div className="font-Oswald text-4xl align font-extralight uppercase tracking-[.15em]  py-4">
                            Your Cart
                        </div>
                        <button className="w-16 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-[#FfCACA] flex-1">
                        aa
                    </div>
                    <div className="bg-[#FDACAC] flex flex-col py-[22px] gap-4 px-6">
                        <div className="flex flex-row justify-between text-2xl tracking-[.20em]">
                            <div className="uppercase ">
                                Subtotal
                            </div>
                            <div className="uppercase ">
                                $420.69
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#FD7676] py-[10px]">
                                <div className="flex flex-row justify-center items-center gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-xl tracking-[.20em] uppercase font-normal">
                                        Checkout
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="font-Lato text-sm font-normal tracking-[.05em]">
                                    Orders will be processed in USD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}