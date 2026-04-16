'use client';

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const mockProducts = [
    { id: 1, name: "The Ordinary Niacinamide 10% + Zinc 1%", description: "Brightening serum for clear, glowing skin", price: 8.90, image: "https://picsum.photos/id/1015/300/300" },
    { id: 2, name: "CeraVe Moisturizing Cream", description: "Daily face & body moisturizer for dry skin", price: 15.99, image: "https://picsum.photos/id/201/300/300" },
    { id: 3, name: "Neutrogena Hydro Boost Water Gel", description: "Oil-free hydrating face moisturizer", price: 19.99, image: "https://picsum.photos/id/237/300/300" },
    { id: 4, name: "Vitamin C Serum 20%", description: "Brightening & anti-aging facial serum", price: 12.49, image: "https://picsum.photos/id/1005/300/300" },
    { id: 5, name: "Olly Undeniable Beauty Gummies", description: "Hair, skin & nails vitamins (60 count)", price: 14.99, image: "https://picsum.photos/id/29/300/300" },
    { id: 6, name: "Nature Made Fish Oil 1200mg", description: "Omega-3 softgels for heart health", price: 9.99, image: "https://picsum.photos/id/180/300/300" },
    { id: 7, name: "La Roche-Posay Toleriane Moisturizer", description: "Gentle daily face cream for sensitive skin", price: 22.99, image: "https://picsum.photos/id/251/300/300" },
    { id: 8, name: "Aveeno Calm + Restore Oat Gel Cream", description: "Soothing moisturizer for stressed skin", price: 16.49, image: "https://picsum.photos/id/870/300/300" },
  ];

  const handleSearch = () => {
    setResults(mockProducts);
  };

  const handlePhotoUpload = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setResults(mockProducts); // fake results for photo too
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold text-pink-600">Dupey</h1>
        <p className="text-xl text-gray-500">Beauty &amp; Wellness Dupes</p>
      </div>

      {/* Search bar */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search any beauty or wellness product..."
          className="flex-1 border border-gray-300 focus:border-pink-500 rounded-3xl px-8 py-6 text-xl outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-6 rounded-3xl text-xl font-medium"
        >
          Search
        </button>
      </div>

      {/* Photo upload */}
      <div className="mb-12">
        <p className="text-sm font-medium mb-3 text-gray-600">Or upload a photo of the product you like</p>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="block w-full text-sm text-gray-500 file:mr-6 file:py-4 file:px-8 file:rounded-3xl file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
        />
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div>
          <h2 className="text-3xl font-semibold mb-8">Here are your matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-lg leading-tight mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-4xl font-bold text-pink-600">${product.price}</span>
                    </div>
                    <button className="bg-black text-white px-8 py-3 rounded-3xl text-sm font-medium hover:bg-gray-800">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
