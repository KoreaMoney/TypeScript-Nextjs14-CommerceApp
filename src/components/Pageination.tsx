"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pageination = ({ currentPage, hasPrev, hasNext }: IProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-alarm text-white p-2 text-sm w-24 cur disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-alarm text-white p-2 text-sm w-24 cur disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pageination;
