import React from "react";
import Header from "../components/Header";
import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row">
          <ProductImages />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}
