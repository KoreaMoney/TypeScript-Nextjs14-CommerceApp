"use client";

interface IProps {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pageination = ({ currentPage, hasPrev, hasNext }: IProps) => {
  const createPageUrl = (pageNumber: number) => {
    
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-alarm text-white p-2 text-sm w-24 cur disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-alarm text-white p-2 text-sm w-24 cur disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pageination;
