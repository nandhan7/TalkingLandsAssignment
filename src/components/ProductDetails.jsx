import React from "react";
import { Heart, Bookmark, Share2, Star, Minus, Plus, ShoppingBag } from "lucide-react";
import ThumbnailGrid from "./ThumbnailGrid";
import DeliveryInfo from "./DeliveryInfo";

export default function ProductDetails() {
  return (
    <div className="md:w-1/2 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Embrace Sideboard</h1>
        <div className="flex space-x-2">
          <button className="text-red-500 bg-red-100 p-2 rounded-full">
            <Heart size={24} />
          </button>
          <button className="text-gray-500 bg-gray-100 p-2 rounded-full">
            <Bookmark size={24} />
          </button>
          <button className="text-gray-500 bg-gray-100 p-2 rounded-full">
            <Share2 size={24} />
          </button>
        </div>
      </div>
      <p className="text-gray-500 mb-4">Teixeira Design Studio</p>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-blue-600 mr-2">$71.56</span>
        <span className="text-gray-500 line-through">$71.56</span>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 mr-2">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
          <Star size={20} />
        </div>
        <span className="text-blue-600">4.8</span>
        <span className="text-gray-500 ml-2">67 Reviews</span>
      </div>
      <p className="text-green-500 mb-4">
        93% of buyers have recommended this.
      </p>
      <div className="flex items-center mb-4">
        <div className="flex items-center bg-gray-100 rounded-lg">
          <button className="p-2">
            <Minus size={20} />
          </button>
          <input
            type="text"
            value="5"
            className="w-12 text-center bg-transparent"
            readOnly
          />
          <button className="p-2">
            <Plus size={20} />
          </button>
        </div>
        <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center">
          <ShoppingBag size={20} className="mr-2" />
          Add To Cart
        </button>
      </div>
      <ThumbnailGrid />
      <DeliveryInfo />
    </div>
  );
}
