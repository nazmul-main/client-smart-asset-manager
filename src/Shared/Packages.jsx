

const Packages = () => {
    return (
        <div className="max-w-screen-xl mx-auto grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">

            {/* Package 1 */}
            <div className="w-full  p-4  border  rounded-lg shadow sm:p-8  ">
                <h5 className="mb-4 text-xl font-medium  ">5 Members for</h5>
                <div className="flex items-baseline  ">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">5</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight  ms-3">5 team members</span>
                    </li>
                    
                    
                </ul>
                <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>
            {/* Package 1 */}
            <div className="w-full  p-4  border  rounded-lg shadow sm:p-8  ">
                <h5 className="mb-4 text-xl font-medium  ">10 Members for</h5>
                <div className="flex items-baseline  ">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">8</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight  ms-3">10 team members</span>
                    </li>
                    
                    
                </ul>
                <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>
            {/* Package 1 */}
            <div className="w-full  p-4  border  rounded-lg shadow sm:p-8  ">
                <h5 className="mb-4 text-xl font-medium  ">20 Members for</h5>
                <div className="flex items-baseline  ">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">15</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex items-center">
                        <svg className="flex-shrink-0 w-4 h-4 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight  ms-3">20 team members</span>
                    </li>
                    
                    
                </ul>
                <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
            </div>

        </div>
    );
};

export default Packages;