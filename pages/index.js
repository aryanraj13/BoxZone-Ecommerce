import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useState, useEffect } from 'react';

export default function Home() {
  // State to manage current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of carousel image sources
  const carouselItems = [
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
    "/slider5.jpg",
    "/slider6.jpg",
  ];

  // Function to handle next slide
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % carouselItems.length;
    setCurrentSlide(nextIndex);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    setCurrentSlide(prevIndex);
  };

  // Effect to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % carouselItems.length;
      setCurrentSlide(nextIndex);
    }, 3000); // Adjust this value to change the slide interval (in milliseconds)
    
    return () => clearInterval(interval);
  }, [currentSlide, carouselItems.length]);

  return (
    <>
      <Head>
        <title>BoxZone.com - Fill your box</title>
        <meta name="description" content="BoxZone.com - Fill your box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/titlelogo.png" />
      </Head>

      <section className="text-gray-600 body-font mt-6">
        <div className="flex flex-wrap w-full mb-6 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Fill your boxes with<span className="text-purple-600 font-bold"> boxzone.com</span></h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Fill your boxes with any type of stuff that you want from our zone and get out of the zone.</p>
        </div>
      </section>

      <div id="default-carousel" className="md:top-2 relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="ml-2 mr-2 relative h-96 md:h-screen overflow-hidden rounded-md md:rounded-3xl">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              data-carousel-item
            >
              <img
                src={item}
                className="block object-cover w-full h-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-purple-500' : 'bg-gray-300'}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

    </>
  );
}
