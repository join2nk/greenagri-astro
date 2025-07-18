<<<<<<< HEAD:src/components/product.jsx
import { useState } from "react";

=======

("use client");

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const navigation = {
  categories: [
    {
      name: "Category 1",
      featured: [
        {
          name: "Featured Item 1",
          href: "#",
          imageSrc: "https://via.placeholder.com/150",
          imageAlt: "Featured Item 1",
        },
      ],
      sections: [
        {
          name: "Section 1",
          id: "section-1",
          items: [{ name: "Item 1", href: "#" }],
        },
      ],
    },
  ],
  pages: [{ name: "Page 1", href: "#" }],
};

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All Products", href: "#" },
  { name: "Boiled Rice", href: "#" },
  { name: "White Rice", href: "#" },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Boiled IR Rice", label: "Boiled IR Rice", checked: false },
      {
        value: "Boiled Swarna Rice",
        label: "Boiled Swarna Rice",
        checked: false,
      },
      { value: "White Broken Rice", label: "White Broken Rice", checked: true },
      { value: "White Rice", label: "White Rice", checked: false },
    ],
  },
];
>>>>>>> 80d3740276a48460f411899a0d3f37427c881b92:src/components/products-2.tsx
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
<<<<<<< HEAD:src/components/product.jsx

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
=======
function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
import { useState } from "react";
export default function Produtes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
>>>>>>> 80d3740276a48460f411899a0d3f37427c881b92:src/components/products-2.tsx

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
