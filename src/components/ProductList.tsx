import Link from "next/link";
import Image from "next/image";

interface IProps {
  categoryId: string;
  limit: number;
}

const ProductList = async ({ categoryId, limit }: IProps) => {
  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl right-1 ring-1 ring-alarm text-alarm py-2 px-4 text-xs hover:bg-alarm hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* -------------------------------- */}
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl right-1 ring-1 ring-alarm text-alarm py-2 px-4 text-xs hover:bg-alarm hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* -------------------------------- */}
      {/* -------------------------------- */}
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl right-1 ring-1 ring-alarm text-alarm py-2 px-4 text-xs hover:bg-alarm hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* -------------------------------- */}
      {/* -------------------------------- */}
      <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$50</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="w-max rounded-2xl right-1 ring-1 ring-alarm text-alarm py-2 px-4 text-xs hover:bg-alarm hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* -------------------------------- */}
    </div>
  );
};

export default ProductList;
