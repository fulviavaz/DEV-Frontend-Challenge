import React from 'react'
import LineDivider from '@/components/LineDivider/LineDivider.jsx'
import { useFetch } from '@/hooks/useFetch';

export default function Payment() {

  const { data } = useFetch(
    "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
  );

      const date = data ? new Date(data.opened_at) : null;

      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      };

      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );


  return (
    <div className="block  pb-4">
      <div className="flex items-start justify-center w-full">
        <p className="text-sm text-gray-800 font-medium w-52">
          Payment · Credit
        </p>
        <LineDivider />
      </div>
      <div className="flex justify-between w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">{ data?.payment.payment_strategy_name}</p>
        <p className="text-sm text-gray-800 font-medium">{ data?.payment.payment_strategy_type}</p>
      </div>
      <div className="flex justify-between w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">Payment Due</p>
        <p className="text-sm text-gray-800 font-medium">
          {formattedDate}
        </p>
      </div>
      <div className="block justify-start w-full pt-2 pb-2">
        <p className="text-sm text-gray-500 font-medium">
          Payment Instructions
        </p>
        <p className="text-sm text-gray-800 font-medium">
          Your order will be charged upon final weighing of your products. If
          you wish to update your card on file you can do so from the “Saved
          Cards” section of your account settings.
        </p>
      </div>
    </div>
  );
}
