"use client";

import React, { useEffect, useState } from "react";
import SuccessModal from "@/components/SuccessModal";
import DaumPostcode from "react-daum-postcode";

import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import PaymentInfo from "@/components/PaymentInfo";

const inputArray = [
  { id: 1, title: "이름", type: "text", placeholder: "이름을 입력하세요", name: "name" },
  { id: 2, title: "전화번호", type: "tel", placeholder: "전화번호를 입력하세요", name: "phone" },
  { id: 3, title: "이메일", type: "email", placeholder: "이메일을 입력하세요", name: "email" },
  { id: 4, title: "주소", type: "text", placeholder: "주소를 입력하세요", name: "address" },
];

const PaymentPage = () => {
  const wixClient = useWixClient();
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
    name: "",
  });

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isActiveAddress, setIsActiveAddress] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();
  
  const { clearCart } = useCartStore();

  useEffect(() => {
    const checkValue =
      formData.name.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.email.trim() !== "";
    setIsFormValid(checkValue);
  }, [formData]);

  const onClose = () => {
    setShowSuccessModal(false);
    router.push("/");
  };

  const handlePayment = async () => {
    if (!isFormValid) return;

    try {
      setIsCheckingOut(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      clearCart(wixClient);
      setShowSuccessModal(true);
    } catch (err) {
      console.log(err);
      alert("체크아웃 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  const completeHandler = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      address: data.address,
    }));
    if (data.address) {
      setIsActiveAddress(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <div className={`px-4  md:px-8 lg:px-16 xl:px-32 2xl:px-64 ${isActiveAddress ? "blur-sm" : ""}`}>
        <h1 className="font-semibold xl:text-2xl lg:text-xl">DWSH CHECKOUT</h1>
        <div className="h-[1px] bg-black mb-3 mt-3"></div>
        <div className="flex flex-wrap gap-4">
          {/* PAYMENT INFO */}
          <PaymentInfo />
          {/* PAYMENT INPUT */}
          <div className="flex-1 pl-5 pr-5 mt-3">
            <h3 className="font-medium xl:text-lg text-md mb-2">배송지 정보</h3>
            {inputArray.map((list) => (
              <div className="flex flex-col gap-2" key={list.id}>
                <p className="mt-5">
                  {list.title} <span className="text-red-500">*</span>
                </p>
                {list.title === "주소" ? (
                  <div className="flex justify-between h-8">
                    <input
                      type={list.type}
                      value={formData.address}
                      placeholder={list.placeholder}
                      readOnly
                      className="ring-1 ring-gray-500 outline-none pl-1 rounded-sm w-[75%] text-sm"
                    />
                    <button
                      className="bg-gray-400 text-white w-[20%] text-xs rounded-md hover:bg-black hover:ring-1 hover:ring-gray-500"
                      onClick={() => setIsActiveAddress((prev) => !prev)}
                    >
                      주소찾기
                    </button>
                  </div>
                ) : (
                  <input
                    type={list.type}
                    placeholder={list.placeholder}
                    value={formData[list.name as keyof typeof formData]}
                    onChange={(e) => handleInputChange(e, list.name)}
                    className="ring-1 ring-gray-500 outline-none pl-1 rounded-sm h-8 text-sm"
                  />
                )}
              </div>
            ))}
            <button
              className={`w-full rounded-lg h-10 mt-7 bg-alarm text-white 
           ${isFormValid && "hover:bg-white hover:ring-1 hover:ring-alarm hover:text-alarm"}`}
              onClick={handlePayment}
              disabled={!isFormValid}
            >
              {isCheckingOut ? "결제 중..." : "결제하기"}
            </button>
            {/* 성공 모달 */}
            {showSuccessModal && <SuccessModal onClose={onClose} formData={formData} />}
          </div>
        </div>
      </div>
      <div
        className={`${
          !isActiveAddress && "hidden"
        } fixed top-1/4 left-1/3 z-50 ring-1 ring-black rounded-md overflow-hidden`}
      >
        {isActiveAddress ? (
          <div className="fixed top-1/4 left-1/3 z-50 ring-1 ring-black rounded-md overflow-hidden">
            <DaumPostcode onComplete={completeHandler} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PaymentPage;
