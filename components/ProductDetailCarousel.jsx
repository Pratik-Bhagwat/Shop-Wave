import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p-1.jpg" />
        <img src="/p-2.jpg" />
        <img src="/p-3.jpg" />
        <img src="/p-4.jpg" />
        <img src="/p-5.jpg" />
        <img src="/p-6.jpg" />
      </Carousel>
    </div>
  );
};

export default ProductDetailCarousel;
