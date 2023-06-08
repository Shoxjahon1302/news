import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          className="bg-red-600 p-5 text-white fixed bottom-10 right-10 w-[50px] h-[50px] text-[20px]"
          onClick={scrollUp}
        >
          <i className="fa-solid fa-arrow-up-long"></i>
        </button>
      )}
    </div>
  );
}
