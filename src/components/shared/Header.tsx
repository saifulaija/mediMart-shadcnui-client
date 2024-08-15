import { ChevronRight } from "lucide-react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <p className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-700  text-start">
        {title}
      </p>
     
    </div>
  );
};

export default Header;
