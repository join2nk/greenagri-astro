import { Fragment, useState, type Dispatch } from "react";

const categories = [
  {
    name: "Boiled Rice",
    products: ["Boiled IR Rice", "Boiled Swarna Rice"],
  },
  {
    name: "White Rice",
    products: ["White Broken Rice", "White Rice"],
  },
];

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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Produtes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[number] | null
  >(null);

  // Function to get filtered products based on category
  const getFilteredProducts = () => {
    if (selectedProduct) {
      return [selectedProduct]; // Show only selected product in detail view
    }
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) =>
      categories
        .find((cat) => cat.name === selectedCategory)
        ?.products.includes(product.title)
    );
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6 border-r">
        {/* <h3 className="text-2xl font-bold text-[#558B2F] mb-4">Categories</h3> */}
        <ul>
          <li>
            <button
              className={`w-full text-left p-2 font-semibold hover:text-[#558B2F] transition ${
                selectedCategory === "All" && !selectedProduct
                  ? "text-[#558B2F]"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory("All");
                setSelectedProduct(null);
              }}
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className={`w-full text-left p-2 font-semibold hover:text-[#558B2F] transition ${
                  selectedCategory === category.name && !selectedProduct
                    ? "text-[#558B2F]"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setSelectedProduct(null);
                }}
              >
                {category.name}
              </button>
              <ul className="pl-4">
                {category.products.map((productTitle) => (
                  <li key={productTitle}>
                    <button
                      className={`w-full text-left p-2 text-sm hover:text-[#558B2F] transition ${
                        selectedProduct?.title === productTitle
                          ? "text-[#558B2F]"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        setSelectedProduct(
                          products.find((p) => p.title === productTitle)
                        );
                      }}
                    >
                      {productTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* bread crumbs */}
        <div>
          <nav className="text-sm text-gray-500 mb-4">
            <ul className="flex space-x-2">
              <li>
                <button
                  className="hover:text-[#558B2F]"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedProduct(null);
                  }}
                >
                  Home
                </button>
              </li>
              {selectedCategory !== "All" && (
                <>
                  <li>/</li>
                  <li>
                    <button
                      className="hover:text-[#558B2F]"
                      onClick={() => {
                        setSelectedCategory(selectedCategory);
                        setSelectedProduct(null);
                      }}
                    >
                      {selectedCategory}
                    </button>
                  </li>
                </>
              )}
              {selectedProduct && (
                <>
                  <li>/</li>
                  <li>{selectedProduct.title}</li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {selectedProduct ? (
          // Product Detail View
          <div className="max-w-2xl mx-auto bg-white p-6 mt-8 rounded-lg shadow-lg">
            <button
              className="text-[#558B2F] font-semibold mb-4"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back to {selectedCategory}
            </button>
            <div className="text-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-64 h-64 object-cover mx-auto rounded-lg border"
              />
              <h2 className="text-3xl font-bold text-[#558B2F] mt-4">
                {selectedProduct.title}
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        ) : (
          // Product List View
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-14">
            {getFilteredProducts().map((product) => (
              <div
                key={product.title}
                className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-cover rounded-lg border"
                />
                <div>
                  <h2 className="text-lg font-semibold text-[#558B2F]">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 text-sm mt-1">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function RenderListOfProducts({
  products: p,
  setSelectedCategory,
  setSelectedProduct,
}: {
  products: Array<(typeof products)[number]>;
  setSelectedProduct: Dispatch<(typeof products)[number] | null>;
  setSelectedCategory: Dispatch<string>;
}) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-14">
      {p.map((product) => (
        <div
          key={product.title}
          className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:shadow-xl transition"
          onClick={() => setSelectedProduct(product)}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-28 h-28 object-cover rounded-lg border"
          />
          <div>
            <h2 className="text-lg font-semibold text-[#558B2F]">
              {product.title}
            </h2>
            <p className="text-gray-700 text-sm mt-1">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
function RenderProductDetail({
  products: p,
  selectedCategory,
  setSelectedCategory,
  setSelectedProduct,
}: {
  selectedCategory: string;
  products: (typeof products)[number];
  setSelectedProduct: Dispatch<(typeof products)[number] | null>;
  setSelectedCategory: Dispatch<string>;
}) {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-8 rounded-lg shadow-lg">
      <button
        className="text-[#558B2F] font-semibold mb-4"
        onClick={() => setSelectedProduct(null)}
      >
        ← Back to {selectedCategory}
      </button>
      <div className="text-center">
        <img
          src={p.image}
          alt={p.title}
          className="w-64 h-64 object-cover mx-auto rounded-lg border"
        />
        <h2 className="text-3xl font-bold text-[#558B2F] mt-4">{p.title}</h2>
        <p className="text-lg text-gray-700 mt-2">{p.description}</p>
      </div>
    </div>
  );
}
