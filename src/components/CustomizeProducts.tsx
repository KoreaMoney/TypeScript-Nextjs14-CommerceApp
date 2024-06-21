"use client";

import { useState, useEffect } from "react";
import { products } from "@wix/stores";
import Add from "@/components/Add";

interface IProps {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}

const CustomizeProducts = ({ productId, variants, productOptions }: IProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoice = v.choices;
      if (!variantChoice) return false;
      return Object.entries(selectedOptions).every(([key, value]) => variantChoice[key] === value);
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoice = variant.choices;
      if (!variantChoice) return false;
      return (
        Object.entries(choices).every(([key, value]) => variantChoice[key] === value) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions?.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({ ...selectedOptions, [option.name!]: choice.description! });
              const selected = selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled ? undefined : () => handleOptionSelect(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{ backgroundColor: choice.value, cursor: disabled ? "not-allowed" : "pointer" }}
                  key={choice.value}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-alarm text-alarm rounded-md py-1 px-4 text-sm cursor-pointer"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected ? "#1c47f5" : disabled ? "#1c47f533" : "white",
                    color: selected || disabled ? "white" : "#1c47f5",
                    boxShadow: disabled ? "none" : "",
                  }}
                  key={choice.value}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={selectedVariant?._id || "00000000-000000-000000-000000000000"}
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
};

export default CustomizeProducts;
