import React from "react";

export default function ThumbnailGrid() {
  const thumbnails = [
    "/pexels-alexandra-maria-58259-318236.jpg",
    "/pexels-olly-972804.jpg",
    "/pexels-olly-974911.jpg",
    "/pexels-olly-994234.jpg",
  ];

  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {thumbnails.map((item, index) => (
        <div key={index} className="relative w-full pt-[100%]">
          <img
            src={item}
            alt={`Thumbnail ${index}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
