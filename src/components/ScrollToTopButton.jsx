import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 btn btn-primary text-white px-3 py-3 rounded-lg flex items-center justify-center opacity-30 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 404 511.5"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path
          fill-rule="nonzero"
          d="m219.24 72.97.54 438.53h-34.95l-.55-442.88L25.77 241.96 0 218.39 199.73 0 404 222.89l-25.77 23.58z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
