"use client";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { TCategory } from "@/types/category";
import CategoryCard from "./CategoryCard";
import { useGetAllCategoryQuery } from "@/redux/api/features/category/categoryApi";
import Loader from "@/components/shared/Loader";
import { cn } from "@/lib/utils";

// Mock data or replace with actual API data


export function CategoryCarousel() {
  const { data: categories, isLoading } = useGetAllCategoryQuery({});
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Carousel className="w-full max-w-sm md:max-w-4xl">
      <CarouselContent className="-ml-1">
        {categories.map((category: any, index: number) => (
          <CarouselItem
            key={index}
            className="pl-2 basis-1/2 md:basis-1/2 lg:basis-1/4"
          >
            <div className="p-2 space-x-1">
              <CategoryCard category={category} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={cn(
          "bg-primary ml-10 hover:bg-blue-400  text-white hover:text-gray-600"
        )}
      />
      <CarouselNext
        className={cn(
          "bg-primary mr-10 hover:bg-blue-400 text-white hover:text-gray-600"
        )}
      />
    </Carousel>
  );
}

// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { TCategory } from "@/types/category";
// import CategoryCard from "./CategoryCard";
// import { useGetAllCategoryQuery } from "@/redux/api/features/category/categoryApi";
// import Loader from "@/components/shared/Loader";
// import { cn } from "@/lib/utils";

// // Carousel Component
// export function CategoryCarousel() {
//   const { data: categories, isLoading } = useGetAllCategoryQuery({});

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <div className="container mx-auto my-8">
//       <Carousel className="w-full max-w-7xl">
//         <CarouselContent className="-ml-2 flex flex-wrap">
//           {categories.map((category: TCategory, index: number) => (
//             <CarouselItem
//               key={index}
//               className={cn(
//                 "px-2",
//                 "w-full",
//                 "sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
//               )}
//             >
//               <div className="p-2">
//                 <CategoryCard category={category} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white" />
//         <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white" />
//       </Carousel>
//     </div>
//   );
// }

