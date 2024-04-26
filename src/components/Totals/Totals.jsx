import React from 'react'
import LineDivider from '@/components/LineDivider/LineDivider.jsx'
import { useFetch } from '@/hooks/useFetch';

export default function Totals() {

    const { data } = useFetch(
      "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/"
  );
  
  return (
    <div className="grid gap-4 grid-cols-2 w-full">
      <div></div>
      <div className="block">
        <div className="flex justify-between w-full pt-2 pb-2">
          <p className="text-sm text-gray-500 font-medium">Subtotal</p>
          <p className="text-sm text-gray-800 font-medium">${data?.subtotal}</p>
        </div>
        <div className="flex justify-between w-full pt-2 pb-2">
          <p className="text-sm text-gray-500 font-medium">Delivery Fee</p>
          <p className="text-sm text-gray-800 font-medium">${data?.payment_fees}</p>
        </div>
        <div className="flex justify-between w-full pt-2 pb-2">
          <p className="text-sm text-gray-500 font-medium">Tax</p>
          <p className="text-sm text-gray-800 font-medium">${data?.tax}</p>
        </div>
        <LineDivider />
        <div className="flex justify-between w-full pt-2 pb-2">
          <p className="text-base text-gray-800 font-bold">Total</p>
          <p className="text-base text-gray-800 font-bold">${data?.total }</p>
        </div>
        <div className="flex justify-between w-full pt-2 pb-2">
          <p className="text-sm text-gray-500 font-medium">Payment Status</p>
          <p className="text-sm text-gray-800 font-medium">{ data?.payment.status}</p>
              </div>
              <button className="text-sm font-medium text-gray-800 bg-white rounded-sm
              py-2 px-3 border border-solid border-gray-300 w-full">View invoice</button>
      </div>
    </div>
  );
}
