// // components/CategoryCard.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { TCategory } from "@/types/category";

//  export interface CategoryCardProps {
//   category: TCategory;
// }

// const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
//   const { image, categoryName } = category;

//   return (
//     <Link
//       href={`/product/category/${categoryName}`}
//       className="block group border rounded w-56 h-auto hover:border hover:border-blue-300"
//     >
//       <div className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-md group-hover:shadow-lg">
//         <div className="flex justify-center items-center p-4">
//           <Image
//             src={image || "/default-category.jpg"}
//             alt={categoryName}
//             width={60}
//             height={60}
//             className=""
//             quality={100}
//           />
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-gray-900">
//             {categoryName}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CategoryCard;


// components/CategoryCard.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TCategory } from '@/types/category';

interface CategoryCardProps {
  category: TCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, categoryName } = category;

  return (
    <Link
      href={`/product/category/${categoryName}`}
      className="block group border rounded w-56 h-auto hover:border hover:border-blue-300"
    >
      <div className="overflow-hidden group transition-shadow duration-300 rounded-lg shadow-md group-hover:shadow-lg">
        <div className="flex justify-center items-center p-4">
          <Image
            src={image || "/default-category.jpg"}
            alt={categoryName}
            width={60}
            height={60}
          
            quality={100}
            className="group-hover:scale-90 transition-all duration-75"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center text-gray-800 group-hover:text-gray-900">
            {categoryName}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

