import React, { useState } from "react";

interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const VerticalBanner: React.FC = () => {
  const [promotions] = useState<Promotion[]>([
    {
      id: 1,
      title: 'Promo 1',
      description: 'Diskon hingga 50% untuk produk tertentu',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961.jpg',
    },
    {
      id: 2,
      title: 'Promo 2',
      description: 'Gratis ongkir untuk pembelian di atas Rp100.000',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889.jpg',
    },
    {
      id: 3,
      title: 'Promo 3',
      description: 'Beli 1 gratis 1 untuk produk tertentu',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
    },
    {
      id: 4,
      title: 'Promo 4',
      description: 'Diskon hingga 30% untuk produk tertentu',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
    },
    {
      id: 5,
      title: 'Promo 5',
      description: 'Beli 2 gratis 1 untuk produk tertentu',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
    },
    {
      id: 6,
      title: 'Promo 6',
      description: 'Cashback hingga 20% untuk produk tertentu',
      imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
    },
  ]);

  return (
    <div className="relative">
      <div className="h-24 w-full flex items-center justify-center text-white">
        Banner Promotion
      </div>
      <div className="mt-4">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="w-[75%] mx-auto border border-gray-200 rounded-md shadow-md p-4 mb-8 transition-transform hover:scale-105 hover:border-red-300">
            <img src={promotion.imageUrl} alt={promotion.title} className="w-full mb-2 rounded-md" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{promotion.title}</h3>
              <p className="text-sm">{promotion.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalBanner;
