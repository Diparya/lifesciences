import React from 'react'

const Benefits = () => {
    return (
        <>
            <section className="bg-[#17414F] text-white py-10 px-8 w-[60vw] z-10 -mt-14 lg:-mt-20 rounded-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit Items */}
                    <div className="text-center flex flex-col items-center justify-center space-y-3 -mt-20 cursor-pointer">
                        <img src='images/ClinicallyStudied.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">Clinically Studied</h3>
                        <p className="mt-2 text-sm">All products have undergone lab and safety tests.</p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center space-y-3 lg:-mt-20 cursor-pointer">
                        <img src='images/VegetarianFriendly.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">Vegetarian Friendly</h3>
                        <p className="mt-2 text-sm">
                            We have a wide selection of vegetarian products to meet your needs.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center space-y-3 lg:-mt-20 cursor-pointer">
                        <img src='images/MadeinIndia.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">Made in India</h3>
                        <p className="mt-2 text-sm">
                            Shop local and explore health products made right here in India.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center space-y-3 cursor-pointer">
                        <img src='images/MadeinIndia.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">Free Shipping</h3>
                        <p className="mt-2 text-sm">
                            We deliver to your door with no shipping costs on your orders.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center space-y-3 cursor-pointer">
                        <img src='images/MadeinIndia.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">No Risk</h3>
                        <p className="mt-2 text-sm">
                            We ensure all products are safe and within their usability date.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center space-y-3 cursor-pointer">
                        <img src='images/MadeinIndia.png' width={70} height={70} />
                        <h3 className="text-xl font-semibold">GMO Free</h3>
                        <p className="mt-2 text-sm">
                            Natural, no modified products and derivatives for those who need it.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits