// SubHero.tsx
import React from "react";

import SubHeroCard from "./SubHeroCard";

// TData type definition
export type TData = {
  title: string;
  icon: string;
  color: string;
};
import assets from "@/app/assets";
const SubHero: React.FC = () => {
  // const icon: assets.subHero.upload;
  const data: TData[] = [
    {
      title: "Upload Presentation",
      icon: assets.subHero.upload,
      color: "blue-300",
    },
    {
      title: "Book Appointment",
      icon: assets.subHero.appointment,
      color: "#00a78e",
    },
    {
      title: "Video Consultation",
      icon: assets.subHero.consultation,
      color: "#005670",
    },
    {
      title: "Call to Order",
      icon: assets.subHero.phone,
      color: "#74d2e7",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
      {data.map((item, index) => (
        <SubHeroCard key={index} item={item} />
      ))}
    </div>
  );
};

export default SubHero;
