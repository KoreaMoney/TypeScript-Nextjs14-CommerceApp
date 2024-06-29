import React from "react";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps): JSX.Element => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">주문 성공!</h2>
        <h3 className="text-lg font-bold">주문이 성공적으로 처리되었습니다.</h3>
        <p className="mb-6">
          <br />
          우리와 함께 쇼핑해 주셔서 감사합니다. <br />
          빠른시일 내 고객님께 배송될 수 있도록 노력하고 있습니다. 나중에 다시 만나기를 바랍니다.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-alarm text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
