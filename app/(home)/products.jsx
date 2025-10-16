"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, []);

  if (!product.length)
    return <div className="text-center py-10 text-gray-500">Loading...</div>;

  return (
    <section
      className="
        products 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 p-4
      "
    >
      {product.map((item) => (
        <article
          key={item.id}
          className="
            group relative bg-white rounded-2xl 
            shadow-md hover:shadow-xl 
            overflow-hidden transition-all duration-300 cursor-pointer
            flex flex-col
          "
        >
          <Link href={`/product-details/${item.id}`}>
            <div
              className="
                overflow-hidden bg-gray-100 flex justify-center 
                items-center h-56
              "
            >
              <img
                src={item.productImg}
                alt={item.title}
                className="
                  w-48 h-48 object-contain 
                  transition-transform duration-500 hover:scale-110
                "
              />
            </div>
          </Link>

          <div className="p-4 flex flex-col justify-between flex-grow">
            <Link href={`/product-details/${item.id}`}>
              <h1 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                {item.title.slice(0, 10)}...
              </h1>
            </Link>

            <p className="text-gray-500 text-xs mb-3 line-clamp-2">
              {item.description.slice(0, 50)}...
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="font-bold text-blue-600">${item.price}</div>

              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs transition">
                <i className="fa-solid fa-cart-plus" />
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
