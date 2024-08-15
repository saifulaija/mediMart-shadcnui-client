import Header from "@/components/shared/Header";
import { CategoryCarousel } from "./CategoryCarousel";


const Category = () => {
  return (
    <div className="w-full -mt-4">
      <Header title="Product Categories" />
      <div className="mt-7 container mx-auto">
        <CategoryCarousel />
      </div>
    </div>
  );
};

export default Category;
