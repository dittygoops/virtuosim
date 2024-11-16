import { useState } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Presentation: React.FC = () => {
    const [slide, setSlide] = useState(0);
    const totalSlides = 5;

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 flex justify-center items-center bg-purple-200">

            </div>
            <div className="flex justify-center p-2 space-x-5">
                <button
                    className="btn bg-purple-500 p-4 rounded-full"
                    onClick={() => setSlide((slide - 1 + totalSlides) % totalSlides)}>
                    <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <div className='flex justify-center items-center text-center'>
                    {slide + 1 + " / " + totalSlides}
                </div>
                <button
                    className="btn bg-purple-500 p-4 rounded-full"
                    onClick={() => setSlide((slide + 1) % totalSlides)}>
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default Presentation;