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
    <div>
      hello
    </div>
  );
}
