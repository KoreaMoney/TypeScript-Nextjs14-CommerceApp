"use client";

import { useState } from "react";

interface IProps {
  productId: string;
  variantId: string;
  stockNumber: number;
}

const Add = ({ productId, variantId, stockNumber }: IProps) => {
  const [quantity, setQuantity] = useState(1);

  // // TEMPORARY
  // const stock = 4;

  const handleQuantity = (type: "dec" | "inc") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "inc" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity("dec")}>
              -
            </button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity("inc")}>
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">모든 상품이 매진되었습니다.</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-red-500">{stockNumber} items</span> left!
              <br /> {"Don't miss it"}
            </div>
          )}
        </div>
        <button
          className="w-36 text-sm rounded-3xl ring-1 ring-alarm text-alarm py-2 px-4 hover:bg-alarm hover:text-white 
        disabled:cursor-not-allowed disabled:bg-blue-100 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
