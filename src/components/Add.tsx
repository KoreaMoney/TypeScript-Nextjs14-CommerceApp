"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

interface IProps {
  productId: string;
  variantId: string;
  stockNumber: number;
}

const Add = ({ productId, variantId, stockNumber }: IProps) => {
  const wixClient = useWixClient();
  const [quantity, setQuantity] = useState(1);

  const { addItem, isLoading } = useCartStore();

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
      <h4 className="font-medium">수량을 선택하세요.</h4>
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
        disabled:cursor-not-allowed disabled:bg-blue-100 disabled:ring-0 disabled:text-white disabled:ring-none"
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
        >
          장바구니 추가
        </button>
      </div>
    </div>
  );
};

export default Add;
