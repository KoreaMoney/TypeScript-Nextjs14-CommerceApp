"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-alarm text-white p-2 rounded-md cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed max-w-96"
    >
      {pending ? "Updating..." : "Update"}
    </button>
  );
};

export default UpdateButton;
