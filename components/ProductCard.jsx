import Link from "next/link";
import React from "react";
const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="rounded-lg transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img src="/product-0.jpg" alt="product image" className="w-full" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$1200.00</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
