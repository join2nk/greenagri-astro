import { useState } from "react";

const products = [
  {
    title: "Boiled IR Rice",
    description:
      "We specialize in providing premium-quality Boiled IR Rice, meticulously processed to meet global industry standards.",
    image: "/product-1.png",
  },
  {
    title: "Boiled Swarna Rice",
    description:
      "We process Boiled Swarna Rice with precision, ensuring it meets the highest standards for the global market.",
    image: "/product-2.png",
  },
  {
    title: "White Broken Rice",
    description:
      "Every batch of White Broken Rice meets rigorous quality standards to ensure the best taste and nutrition.",
    image: "/product-3.png",
  },
  {
    title: "White Rice",
    description:
      "We ensure that every batch of White Rice meets the highest quality standards for a superior culinary experience.",
    image: "/product-4.png",
  },
];

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {!selectedProduct ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 w-full max-w-6xl">
          {products.map((product) => (
            <div
              key={product.title}
              className="cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
              <h2 className="text-2xl font-semibold text-center mt-2">
                {product.title}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full">
          <div className="flex-1 p-6">
            <h2 className="text-4xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-lg text-gray-700">
              {selectedProduct.description}
            </p>
            <button
              className="mt-6 text-[#558B2F] font-semibold"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back to Products
            </button>
          </div>
          <div className="flex-1">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-[60vh] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
