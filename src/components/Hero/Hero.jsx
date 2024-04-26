import React from 'react'
import {useFetch} from '../../hooks/useFetch.js';

export default function Hero() {
    const { data } = useFetch(
      "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
    );

  const date = data ? new Date(data.opened_at):null;

  const options = {
    weekday: "long", 
    month: "long", 
    day: "numeric", 
    year: "numeric", 
  };


  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className="flex items-start justify-between w-full">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-base text-gray-800 mb-2 font-bold">
          Order 1534 - {data?.supplier.business_name}
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Placed {formattedDate}
        </p>
      </div>
      <p className="text-sm text-green-800 font-medium bg-green-100 rounded-full py-1 px-3">
        Open
      </p>
    </div>
  );
}
