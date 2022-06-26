import { useState } from 'react';

export default function DelightModal(productDetailProps: any, handleState: any) {
    const props = productDetailProps.productDetailProps
    return (
        <>
            <div className='fixed h-screen w-screen flex flex-row  justify-center items-center z-[120] '>
                <div className='relative '>
                    <div className='absolute top-[-100px] transform -translate-x-[50%] -translate-y-[50%] w-screen sm:w-[500px] md:w-[600px] lg:w-[900px] bg-[#FFCACA] rounded-2xl z-50 px-6 py-6'>
                        {/* flex */}
                        <div className='flex flex-row flex-between'>
                            {/* left  */}
                            <div className='flex flex-col w-[60%]'>
                                <div className='flex flex-col text-white gap-4'>
                                    <div>
                                        {props.title}
                                    </div>
                                    <div>
                                        {props.description}
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[#FAFAFA]'>
                                        Ingredients: {props.ingredients}
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-[#FAFAFA]'>
                                            Product Facts:
                                        </div>
                                        <div className='text-white'>
                                            {props.productFacts}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
