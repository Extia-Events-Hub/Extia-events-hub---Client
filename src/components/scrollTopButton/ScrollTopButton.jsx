import React, { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi2";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-20 right-[10%] hover:scale-110 transition-all bg-white shadow-custom w-12 h-12 border text-white py-2 px-4 rounded-full flex justify-center items-center  ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <HiOutlineArrowUp className="text-text-color -mb-1 animate-bounce" />
    </button>
  );
};

export default ScrollToTopButton;
