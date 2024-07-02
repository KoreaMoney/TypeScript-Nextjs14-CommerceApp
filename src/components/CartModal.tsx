"use client";

import Image from "next/image";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
import { useRouter } from "next/navigation";

const CartModal = () => {
  // TEMPORARY
  // const cartItems = true;
  const wixClient = useWixClient();
  const router = useRouter();
  const { cart, isLoading, removeItem } = useCartStore();

  // 가짜 체크아웃 프로세스 시뮬레이션
  const handleCheckout = () => {
    router.push("/payment");
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cart.lineItems?.length === 0 ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          {/* LIST TOP*/}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems &&
              cart.lineItems.map((item) => (
                <div className="flex gap-4" key={item._id}>
                  {item.image && (
                    <Image
                      src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                      alt="image"
                      width={72}
                      height={72}
                      className="object-cover rounded-md"
                    />
                  )}
                  <div className="flex flex-col justify-between w-full">
                    {/* TOP */}
                    <div className="">
                      {/* TITLE */}
                      <div className="flex items-center justify-between gap-8">
                        <h3 className="font-semibold">{item.productName?.original}</h3>
                        <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                          {item.quantity && item.quantity > 1 && (
                            <div className="text-xs text-blue-600">{item.quantity} x </div>
                          )}
                          {item.price?.formattedConvertedAmount}
                        </div>
                      </div>
                      {/* DESC */}
                      <div className="text-sm text-gray-500">
                        <p className="mr-2">
                          {item.availability?.status === "AVAILABLE" ? "구매 가능" : "구매 불가능"}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 flex">
                        {item.descriptionLines && (
                          <p>
                            {item.descriptionLines[0] ? item.descriptionLines[0].colorInfo?.original : ""}{" "}
                            {item.descriptionLines[1] ? `- ${item.descriptionLines[1].plainText?.original}` : ""}
                          </p>
                        )}
                      </div>
                    </div>
                    {/* BOTTOM */}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Qty. {item.quantity}</span>
                      <span
                        className="text-blue-500"
                        style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                        onClick={() => removeItem(wixClient, item._id!)}
                      >
                        삭제하기
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* LIST BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">전체</span>
              <span className="">{(cart as any).subtotal.formattedAmount}</span>
            </div>
            {/* DESC */}
            <p className="text-gray-500 text-sm mt-2 mb-4">배송 금액과 세금은 제품에 포함되어 있습니다.</p>
            <div className="flex justify-between text-sm">
              <button className="px-4 py-3 rounded-md ring-1 ring-gray-300 hover:ring-2 hover:ring-blue-300">
                장바구니
              </button>
              <button
                className={`px-4 py-3 rounded-md bg-alarm text-white 
                          ${isLoading && "opacity-75 cursor-not-allowed"} 
                          ${cart.lineItems && cart.lineItems.length === 0 && "opacity-35 cursor-not-allowed"}`}
                disabled={isLoading || (cart.lineItems && cart.lineItems.length === 0)}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
