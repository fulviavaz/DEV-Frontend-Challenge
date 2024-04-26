import Image from "next/image";
import React from "react";
import LineDivider from "@/components/LineDivider/LineDivider.jsx";
import { useFetch } from "@/hooks/useFetch";

export default function Orders() {
  const { data } = useFetch(
    "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
  );

  return (
    <div>
      {data?.order_entries.map((entry, id) => (
        <div>
        <div
          key={entry.id}
          className="flex items-start justify-between  w-full pb-2 pt-2"
        >
          <div className="w-auto">
            <Image src="/images/grape.png" alt="grape" width={48} height={48} />
          </div>
          <div className="flex flex-col items-start justify-center lg:w-4/5">
            <div className="flex items-center justify-start mb-2 ">
              <p className="text-sm text-gray-800 font-medium mr-1">
                {entry.product_name.slice(0, 15)} 
              </p>
              <p className="text-sm text-gray-800 font-medium">
                x{entry.unit_quantity}
              </p>
            </div>
            <div className="flex items-center justify-center lg:ml-2">
              <p className="text-sm text-gray-800 font-medium mr-1 ">
                ${entry.price} /
              </p>
              <p className="text-sm text-gray-800 font-medium">
                {entry.package_name}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <a
              href="#"
              className="text-sm text-green-600 font-medium underline decoration-1 mb-2"
            >
              view
            </a>
            <p className="text-sm text-gray-800 font-medium">
              ${entry.total_price}
            </p>
          </div>
          </div>
          <LineDivider />
          </div>
      ))}
      
    </div>
  );
}
