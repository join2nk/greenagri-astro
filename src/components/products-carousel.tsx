import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Boiled IR",
    image: "product-1.png", // Replace with actual image path
    link: "/products/organic-rice", // Product page link
  },
  {
    id: 2,
    name: "Boiled Swarna Rice",
    image: "product-2.png",
    link: "/products/fresh-vegetables",
  },
  {
    id: 3,
    name: "White Broken Rice",
    image: "product-3.png",
    link: "/products/premium-wheat",
  },
  {
    id: 4,
    name: "White Rice",
    image: "product-4.png",
    link: "/products/dairy-products",
  },
  //   {
  //     id: 5,
  //     name: "Natural Spices",
  //     image: "/images/spices.jpg",
  //     link: "/products/natural-spices",
  //   },
];
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
export function Products() {
  return (
    <div className="space-y-8 py-12">
      <h2
        className="text-[#2E7D32] text-center text-2xl md:text-2xl lg:text-5xl p-8 font-semibold"
        data-aos="fade-up"
      >
        A Range of Our Rice Varieties
      </h2>

      <Carousel
        className="max-w-5xl mx-auto items-center justify-center px-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-64">
              {/* <div className="p-2"> */}

              <Card className="overflow-hidden rounded-lg shadow-lg group">
                {/* Product Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 mt-3">
                    {product.name}
                  </CardTitle>
                  <CardDescription>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                {/* Product Name */}
                <CardContent></CardContent>
                <CardFooter>
                  {/* "Know More" Button */}
                  <a
                    href={product.link}
                  // className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md text-sm flex items-center gap-2 transition-all hover:bg-green-700"
                  >
                    Know More →
                  </a>
                </CardFooter>
              </Card>
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


      <div className="mx-auto w-full flex justify-center">

        <a
          href="/product"
          data-aos="fade-up" data-aos-delay="200"
        >
          <Button
            variant={'knowMore'}
          >
            Explore More
          </Button>
        </a>
      </div>
    </div>
  );
}
