import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative bg-[#E2F5FB] rounded-lg shadow-lg h-[80vh] lg:h-[70vh] w-full z-0">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-4xl lg:text-8xl font-bold text-[#003569] mt-7 text-center">Essential Vitamins</h1>
                    <div className='flex justify-between space-x-2 lg:space-x-5'>
                        <div className='mt-9 pl-3 lg:pl-0'>
                            <p className="mt-2 lg:mt-4 text-sm text-gray-600">Online Medical Supplies</p>
                            <p className="mt-1 lg:text-lg font-semibold text-[#17414F]">
                                Get Your Vitamins <br />& Minerals
                            </p>
                            <button className="mt-3 px-6 py-3 bg-[#17414F] text-white font-semibold rounded-lg shadow-lg hover:bg-[#287189] transition">
                                Explore
                            </button>
                        </div>

                        <div className='relative pl-11'>
                            <img className='z-0 w-44'
                                src='images/medicinebase.png' 
                                alt="Elbrit Logo"
                            />
                            <img className='absolute z-10 -top-9 -right-4 lg:-top-12 lg:-right-0'
                                src='images/medicine.png' 
                                alt="Elbrit Logo"
                                width={190}
                                height={90}
                            />
                        </div>

                        <div className='mt-9 space-y-5 pl-16'>
                            <div className="text-gray-700 flex items-center cursor-pointer">
                                <div className='mr-2'>
                                    <img src='images/Vitamins.png' width={50} height={50} />
                                </div>
                                <div>
                                    <h3 className="text-l font-bold text-[#17414F]">Vitamins</h3>
                                    <p className="text-sm mt-1">Increased vitamins and <br />minerals in your diet.</p>
                                </div>
                            </div>

                            <div className="text-gray-700 flex items-center cursor-pointer pr-2 lg:pr-0">
                                <div className='mr-2'>
                                    <img src='images/WeightLoss.png' width={50} height={50} />
                                </div>
                                <div>
                                    <h3 className="text-l font-bold text-[#17414F]">Weight Loss</h3>
                                    <p className="text-sm mt-1">Find scientifically proven solutions.</p>
                                </div>
                            </div>
                            <div className="text-gray-700 flex items-center cursor-pointer">
                                <div className='mr-2'>
                                    <img src='images/FunctionalFoods.png' width={50} height={50} />
                                </div>
                                <div>
                                    <h3 className="text-l font-bold text-[#17414F]">Functional Foods</h3>
                                    <p className="text-sm mt-1">From protein powders to baby formula.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero