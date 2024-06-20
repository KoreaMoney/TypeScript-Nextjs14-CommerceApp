"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://cdn.pixabay.com/photo/2024/02/28/12/52/ai-generated-8602011_960_720.png",
//   },
//   {
//     id: 2,
//     url: "https://cdn.pixabay.com/photo/2017/07/31/20/24/people-2560747_1280.jpg",
//   },
//   {
//     id: 3,
//     url: "https://cdn.pixabay.com/photo/2016/11/29/04/45/buildings-1867384_960_720.jpg",
//   },
//   {
//     id: 4,
//     url: "https://cdn.pixabay.com/photo/2024/05/07/23/27/ai-generated-8747011_1280.jpg",
//   },
// ];

interface IProps {
  items: any;
}

const ProductImages = ({ items }: IProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image src={items[index].image?.url} alt="product" fill sizes="50vw" className="object-cover rounded-md" />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, idx: number) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={() => setIndex(idx)}>
            <Image src={item.image?.url} alt="product" fill sizes="30vw" className="object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
