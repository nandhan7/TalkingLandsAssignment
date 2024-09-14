import React from "react";
import { Truck } from "lucide-react";

export default function DeliveryInfo() {
  return (
    <>
      <div className="border rounded-lg p-4 mb-4">
        <div className="flex items-center mb-2">
          <Truck size={20} className="text-gray-500 mr-2" />
          <h2 className="font-semibold">Free Delivery</h2>
        </div>
        <p className="text-gray-500">
          Enter your Postal code for Delivery Availability
        </p>
      </div>
      <div className="border border-purple-500 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Truck size={20} className="text-purple-500 mr-2" />
          <h2 className="font-semibold text-purple-500">Return Delivery</h2>
        </div>
        <p className="text-purple-500">
          Free 30 days Delivery Return. Details
        </p>
      </div>
    </>
  );
}
