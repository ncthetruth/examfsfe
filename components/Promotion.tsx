import { useState, useEffect } from 'react';
import Image from 'next/image';

const imageUrls = [
  'https://cdn.cgv.id/uploads_v2/banners/jOCPp-20240422094323.jpg',
  'https://cdn.cgv.id/uploads_v2/banners/5vcde-20240408151019.png',
  'https://cdn.cgv.id/uploads_v2/banners/rHKCS-20240516084600.jpg',
  'https://cdn.cgv.id/uploads_v2/banners/3Q7sM-20240516160347.jpg',
  'https://cdn.cgv.id/uploads_v2/banners/BTTyz-20240509152213.jpeg',
];

const Promotions: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
    setResetTimer(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imageUrls.length) % imageUrls.length);
    setResetTimer(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      if (resetTimer) {
        clearInterval(interval);
        setResetTimer(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, resetTimer]);

  return (
    <div id="default-carousel" className="relative w-full mt-2" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out inset-0 transform ${
              currentSlide === index ? 'translate-x-0' : 
              currentSlide > index ? '-translate-x-full' : 'translate-x-full'
            }`}
            data-carousel-item={currentSlide === index ? 'active' : ''}
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="absolute block w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-red-500 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-red-500  rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-red-500 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-red-500 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Promotions;
