const Home = () => {
    const homeCarouselItems = [
        {
            bgColor: 'bg-blue-200',
            content: (
                <div>
                    <h5 className="text-xl">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            )
        },
        {
            bgColor: 'bg-yellow-300',
            content: (
                <div>
                    <h5 className="text-xl">Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            )
        },
        {
            bgColor: 'bg-lime-400',
            content: (
                <div>
                    <h5 className="text-xl">Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            )
        }
    ];

    return (
        <div>
            <div className="relative">
                {/* Carousel items */}
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {homeCarouselItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${
                                index === 0 ? 'opacity-100' : ''
                            }`}
                        >
                            <div className={`block w-full ${item.bgColor} h-80`}></div>
                            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel controls */}
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-twe-target="#carouselDarkVariant"
                    data-twe-slide="prev"
                >
                    Previous
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-twe-target="#carouselDarkVariant"
                    data-twe-slide="next"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
