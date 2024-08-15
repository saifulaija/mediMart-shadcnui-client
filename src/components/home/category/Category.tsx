import Header from "@/components/shared/Header";
import { CategoryCarousel } from "./CategoryCarousel";


const Category = () => {
  return (
    <div className="w-full -mt-6">
      <Header title="Product Categories" />
      <div className=" container mx-auto mt-4">
        <CategoryCarousel />
      </div>
    </div>
  );
};

export default Category;
