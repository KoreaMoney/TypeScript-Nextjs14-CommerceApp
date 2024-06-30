import Image from "next/image";
import React from "react";
import { media as wixMedia } from "@wix/sdk";
import { useCartStore } from "@/hooks/useCartStore";

const PaymentInfo = () => {
  const { cart } = useCartStore();

  return (
    <div className="flex-1 pl-7 pr-12 bg-gray-100 p-4 rounded-md">
      <h3 className="font-medium xl:text-lg text-md">주문 상세내역</h3>
      <div className="h-[1px] bg-slate-300 mb-6 mt-2"></div>
      <div className="flex flex-col gap-4">
        {cart.lineItems &&
          cart.lineItems.map((item) => (
            <div className="flex gap-4" key={item._id}>
              {item.image && (
                <Image
                  src={wixMedia.getScaledToFillImageUrl(item.image, 72, 60, {})}
                  alt="image"
                  width={72}
                  height={60}
                  className="object-cover rounded-md"
                />
              )}
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">{item.productName?.original}</h3>
                    <div className="p-1  rounded-sm flex items-center gap-2">
                      {item.quantity && item.quantity > 1 && (
                        <div className="text-xs text-blue-600">{item.quantity} x </div>
                      )}
                      {item.price?.formattedConvertedAmount}
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500 flex">
                    {item.descriptionLines && (
                      <p>
                        {item.descriptionLines[0] ? item.descriptionLines[0].colorInfo?.original : ""}
                        {item.descriptionLines[1] ? `- ${item.descriptionLines[1].plainText?.original}` : ""}
                      </p>
                    )}
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. {item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={` ${cart.lineItems && cart.lineItems?.length >= 2 ? "mt-12" : "mt-32"}`}>
        <div className="flex justify-end mb-2">배송비 무료</div>
        <div className="flex items-center justify-between font-semibold">
          <span className="">전체 금액</span>
          <span className="">{cart.subtotal?.formattedAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
