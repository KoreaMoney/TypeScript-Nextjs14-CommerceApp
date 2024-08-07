import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";
import CustomizeProducts from "@/components/CustomizeProducts";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { Suspense } from "react";
import Reviews from "@/components/Reviews";

export const dynamic = 'force-dynamic';
interface IProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params }: IProps) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products.queryProducts().eq("slug", params.slug).find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        {product.description && (
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
          ></p>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">{product.priceData?.formatted?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">{product.priceData?.formatted?.price}</h3>
            <h2 className="font-medium text-2xl">{product.priceData?.formatted?.discountedPrice}</h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-000000-000000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-bold mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.title) }}></h4>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.description) }}></p>
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={product._id!} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
