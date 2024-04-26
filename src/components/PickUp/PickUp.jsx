import React from 'react'
import LineDivider from '@/components/LineDivider/LineDivider.jsx'
import { useFetch } from '@/hooks/useFetch';

export default function PickUp() {

    const { data } = useFetch(
      "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
  );
  
  return (
    <div className="block pt-6 pb-4">
      <div className="flex items-start justify-center w-full">
        <p className="text-sm text-gray-800 font-medium w-72">
          Pickup · Toronto Central
        </p>
        <LineDivider />
      </div>
      <div className="flex justify-between w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">Pickup Date</p>
        <p className="text-sm text-gray-800 font-medium">
          Monday, October 16, 2023
        </p>
      </div>
      <div className="flex justify-between w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">Pickup Timeslot</p>
        <p className="text-sm text-gray-800 font-medium">12:30am</p>
      </div>
      <div className="block justify-start w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">Pickup Address</p>
        <p className="text-sm text-gray-800 font-medium">
          {data?.fulfillment.fulfillment_address}{" "}
          <span className=" text-green-600 font-medium underline decoration-1 cursor-pointer">
            Map
          </span>
        </p>
      </div>
      <div className="block justify-start w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">Pickup Instructions</p>
        <p className="text-sm text-gray-800 font-medium">
          {data?.fulfillment.instructions}
        </p>
      </div>
    </div>
  );
}
