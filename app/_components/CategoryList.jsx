import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList }) {
  return (
    <div>
      <a className="font-bold text-4xl">Categories of Cars Available</a>

      <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 hover:text-bold hover:text-lg ">
        {categoryList.length > 0
          ? categoryList.map((category, index) => (
              <Link
                href={"/search/" + category.name}
                key={index}
                className="flex flex-col items-center justify-center gap-2 bg-red-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out"
              >
                <Image
                  src={category.icon?.url}
                  alt="icon"
                  width={100}
                  height={100}
                />
                <h2 className="text-primary ">{category.name}</h2>
              </Link>
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategoryList;
